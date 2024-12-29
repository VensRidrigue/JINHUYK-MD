let antiCallMessage = process.env.ANTICALL_MESSAGE || `
\`\`\`Bonjour, je suis JINHUYK-MD_V2, un assistant personnel !\n\n
Désolé, nous ne pouvons pas recevoir d'appels pour le moment, que ce soit dans un groupe ou en privé.\n\n
Si vous avez besoin d'aide ou souhaitez proposer une fonctionnalité, veuillez contacter le propriétaire.\n\n
Propulsé par JINHUYK-MD_V2 Chatbot.\`\`\`
`;
const { smd, botpic, send, Config, tlang, sleep, smdBuffer, prefix, bot_ } = require('../lib');
let antiCallCountries = [], antiCallusers = {}, bots = false;

smd({
  pattern: 'anticall <on | off>',
  desc: 'Détecte les appels et les rejette automatiquement.',
  category: 'Paramètres',
  use: 'anticall all | <indicatifs pays>',
  filename: __filename,
}, async (_event, input) => {
  let chatSettings = await bot_.findOne({ id: `anticall_${_event.user}` }) || await bot_.create({ id: `anticall_${_event.user}` });
  let inputArgs = input ? input.toLowerCase().trim() : '';

  if (inputArgs.includes('off') || inputArgs.includes('désactiver')) {
    if (chatSettings.anticall === 'false') {
      return await _event.send('*_La fonction anticall est déjà désactivée pour ce chat !_*');
    }
    await bot_.updateOne({ id: `anticall_${_event.user}` }, { anticall: 'false' });
    return await _event.send('*_La fonction anticall a été désactivée avec succès !_*');
  } else if (!input) {
    return await _event.send(`*_Statut actuel de la fonction anticall : ${chatSettings.anticall === 'false' ? 'Désactivée' : 'Activée avec les paramètres suivants : "' + chatSettings.anticall + '"' }_*`);
  }

  let allowedCountries = inputArgs.includes('all') ? 'all' : inputArgs ? inputArgs.split(',').map(code => parseInt(code)).filter(code => !isNaN(code)).join(',') : false;
  if (!allowedCountries) {
    return await _event.send(`*_Veuillez fournir un indicatif pays valide pour bloquer les appels_*\n*Exemple : ${prefix}anticall all | 212,91*`);
  }

  await bot_.updateOne({ id: `anticall_${_event.user}` }, { anticall: '' + allowedCountries });
  return await _event.send(`*_La fonction anticall a été configurée avec succès pour les indicatifs : ${allowedCountries}_*`);
});

// Gestion des appels entrants
smd({ call: 'incoming' }, async (_callEvent) => {
  try {
    if (!bots) {
      bots = await bot_.findOne({ id: `anticall_${_callEvent.user}` });
    }
    if (_callEvent.fromMe || !bots || !bots.anticall || bots.anticall === 'false') {
      return;
    }

    (!antiCallCountries || !antiCallCountries[0]) && (antiCallCountries = bots.anticall?.split(',').filter(country => country.trim() !== '') || []);

    let allCountriesAllowed = ('' + bots.anticall).includes('all');
    let isBlockedCountry = allCountriesAllowed ? true : antiCallCountries.some(code => _callEvent.from?.startsWith(code));

    if (isBlockedCountry) {
      if (!antiCallusers[_callEvent.from]) {
        antiCallusers[_callEvent.from] = { warn: 0 };
      }
      if (antiCallusers[_callEvent.from].warn < 2) {
        await _callEvent.send(antiCallMessage);
      }
      antiCallusers[_callEvent.from].warn++;
      await _callEvent.send(`*_Avertissement numéro ${antiCallusers[_callEvent.from].warn} : Appel rejeté de l'utilisateur @${_callEvent.from.split('@')[0]}_*`, {
        mentions: [_callEvent.from]
      });
      await _callEvent.reject();
    }
  } catch (error) {
    console.error('Erreur lors du traitement des appels entrants : ', error);
  }
});
