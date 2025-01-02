cmd({
  pattern: "tgs",
  alias: ["sticker", "animatedsticker"],
  desc: "Rechercher et obtenir des stickers animés (TGS) de Telegram",
  category: "fun",
  react: "🎨",
  filename: __filename
}, async (_0x19564c, _0x1d2bb7) => {
  try {
    // Vérifie si une recherche a été fournie
    if (!_0x1d2bb7) {
      return await _0x19564c.reply("*_Veuillez fournir un nom ou mot-clé pour rechercher des stickers. Exemple : .tgs cats_*");
    }

    // Utilise l'API Telegram pour rechercher des stickers
    const query = _0x1d2bb7;
    const telegramStickerAPI = `https://t.me/addstickers/${encodeURIComponent(query)}`;
    const response = await axios.get(telegramStickerAPI);

    // Vérifie si le pack existe
    if (response.status === 404) {
      return await _0x19564c.reply("❌ *Aucun pack de stickers trouvé pour ce mot-clé.*");
    }

    // Préparation de la réponse avec le lien du pack
    const message = `✨ *Stickers trouvés pour "${query}"* ✨\n\n🔗 [Cliquez ici pour voir le pack de stickers](https://t.me/addstickers/${encodeURIComponent(query)})`;

    await _0x19564c.reply(message);

  } catch (error) {
    console.error("Erreur lors de la commande tgs :", error);
    await _0x19564c.reply("❌ *Une erreur s'est produite lors de la recherche des stickers.*");
  }
});
