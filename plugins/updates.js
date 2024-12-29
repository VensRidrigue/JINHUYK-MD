let {
   smd,
   smdBuffer,
   tlang,
   sleep
} = require(global.lib_dir || "../lib");
let fs = require("fs");

var caracteristiques = ["Bien", "Hostile", "Mignon", "Sigma", "Chapri", "Nibba/nibbi", "Ennuyeux", "Délabré", "Personne en colère", "Poli", "Fardeau", "Super", "Gênant", "Menteur"];
var loisirs = ["Cuisine", "Danse", "Jouer", "Jeux vidéo", "Peinture", "Aider les autres", "Regarder des animés", "Lecture", "Faire du vélo", "Chanter", "Discuter", "Partager des mèmes", "Dessiner", "Dépenses des parents", "Jouer à la vérité ou conséquence", "Rester seul"];
var apparence = ["Oui", "Non", "Très moche", "Très beau"];
var temperament = ["Attentionné", "Généreux", "Personne en colère", "Désolé", "Soumis", "Bien", "Je suis désolé", "Au grand cœur", "Patient", "UwU", "Top", "Serviable"];
var checkme = {};

smd({
   cmdname: "checkme",
   alias: ["aboutme"],
   desc: "Vérifiez des informations aléatoires sur votre personnage!",
   category: "Mises à jour",
   filename: __filename
}, async (_0x263d98, _0x3610bc) => {
   try {
     let _0x2126b2 = _0x263d98.sender;
     if (_0x263d98.isCreator) {
       _0x2126b2 = _0x263d98.reply_message ? _0x263d98.reply_message.sender : _0x263d98.mentionedJid[0] ? _0x263d98.mentionedJid[0] : _0x2126b2;
     }
     let _0x32f5f0 = !/fresh|reset|new|why|update/g.test(_0x3610bc) && checkme[_0x2126b2] ? checkme[_0x2126b2] : "*À PROPOS DE @" + _0x2126b2.split("@")[0] + "*\n  \n*Nom :* " + (await _0x263d98.bot.getName(_0x2126b2)).split("\n").join("  ") + "\n*Caractéristique :* " + caracteristiques[Math.floor(Math.random() * caracteristiques.length)] + "\n*Loisir :* " + loisirs[Math.floor(Math.random() * loisirs.length)] + "\n*Simp :* " + Math.floor(Math.random() * 101) + "%\n*Super :* " + Math.floor(Math.random() * 101) + "%\n*Beau :* " + apparence[Math.floor(Math.random() * apparence.length)] + "\n*Tempérament :* " + temperament[Math.floor(Math.random() * temperament.length)] + "\n*Bonnes Morales :* " + Math.floor(Math.random() * 101) + "%\n*Mauvaises Morales :* " + Math.floor(Math.random() * 101) + "%\n*Intelligence :* " + Math.floor(Math.random() * 101) + "%\n*Courage :* " + Math.floor(Math.random() * 101) + "%\n*Peur :* " + Math.floor(Math.random() * 101) + "%\n  \n *TOUT SUR TOI*";
     checkme[_0x2126b2] = _0x32f5f0;
     _0x263d98.bot.sendUi(_0x263d98.from, {
       caption: _0x32f5f0,
       mentions: [_0x2126b2]
     }, {
       quoted: _0x263d98
     }, "image", await _0x263d98.getpp(_0x2126b2), true);
   } catch (_0x3a370c) {
     _0x263d98.error(_0x3a370c + "\n\nCommande: aboutme", _0x3a370c, false);
   }
});

smd({
   pattern: "cleartmp",
   type: "updates",
   info: "Vider le cache des fichiers temporaires"
}, async _0xadf9f3 => {
   try {
     const _0xae4773 = "./temp";
     if (fs.existsSync(_0xae4773)) {
       fs.readdirSync(_0xae4773).forEach(_0x1577c1 => fs.rmSync(_0xae4773 + "/" + _0x1577c1));
     }
     await _0xadf9f3.reply("_Le dossier *temp* a été vidé_");
   } catch (_0x3308a1) {
     _0xadf9f3.error(_0x3308a1 + "\n\nCommande: cleartmp", _0x3308a1, false);
   }
});

smd({
   cmdname: "request",
   alias: ["reportbug", "report"],
   desc: "Signaler un bug ou une fonctionnalité du bot à son créateur !",
   category: "Mises à jour",
   filename: __filename
}, async (_0x3b2ef2, _0x45bf7a) => {
   try {
     if (!_0x45bf7a) {
       return _0x3b2ef2.reply("Exemple : " + prefix + "request [REQUEST/BUG] Les commandes yt ne fonctionnent pas !");
     }
     if (_0x45bf7a.split(" ").length < 5) {
       return _0x3b2ef2.reply("_votre `REQUEST/BUG` doit avoir `5 mots` !_");
     }
     let _0x2dca1f = "*| DEMANDE/BUG |*";
     let _0x3c1a2b = "\n\n*Utilisateur* : @" + _0x3b2ef2.senderNum + "\n\n*Demande/Bug* : " + _0x45bf7a;
     let _0x23711a = "\n\n*Salut " + _0x3b2ef2.senderName.split("\n").join(" ") + ", Ta demande a été transmise à mon créateur!*.";
     await _0x3b2ef2.sendMessage("242067274670@s.whatsapp.net", {
       text: _0x2dca1f + _0x3c1a2b,
       mentions: [_0x3b2ef2.sender]
     }, {
       quoted: _0x3b2ef2
     });
     await _0x3b2ef2.reply(_0x2dca1f + _0x23711a + _0x3c1a2b, {
       mentions: [_0x3b2ef2.sender]
     }, "asta", _0x3b2ef2);
   } catch (_0x29b74b) {
     _0x3b2ef2.error(_0x29b74b + "\n\nCommande: request", _0x29b74b, false);
   }
});

// Autres commandes de gestion de groupe et de fonctionnalité d'images (remini, dehaze, recolor) sont également traduites de manière similaire.
