const axios = require("axios");

cmd({
  pattern: "lyrics",
  alias: ["song", "paroles"],
  desc: "Obtenir les paroles d'une chanson",
  category: "music",
  react: "🎵",
  filename: __filename
}, async (_0x19564c, _0x1d2bb7) => {
  try {
    // Vérifie si une recherche a été fournie
    if (!_0x1d2bb7) {
      return await _0x19564c.reply("*_Veuillez fournir le titre de la chanson et/ou l'artiste. Exemple : .lyrics Shape of You Ed Sheeran_*");
    }

    // Configuration de l'API Genius avec ta clé
    const GENIUS_API_URL = "https://api.genius.com";
    const GENIUS_ACCESS_TOKEN = "16CA0fh8P74wcdQ4bb2oUdvQs"; // Clé API Genius

    // Recherche de la chanson
    const query = _0x1d2bb7;
    const searchResponse = await axios.get(`${GENIUS_API_URL}/search`, {
      params: { q: query },
      headers: { Authorization: `Bearer ${GENIUS_ACCESS_TOKEN}` },
    });

    // Vérifie si des résultats sont disponibles
    const hits = searchResponse.data.response.hits;
    if (!hits.length) {
      return await _0x19564c.reply("❌ *Aucune chanson trouvée. Vérifiez le titre ou l'artiste.*");
    }

    // Prend le premier résultat
    const song = hits[0].result;
    const lyricsUrl = song.url;

    // Récupère les paroles depuis l'URL de Genius
    const lyricsPage = await axios.get(lyricsUrl);
    const lyricsMatch = lyricsPage.data.match(/<div class="lyrics">([\s\S]*?)<\/div>/);

    let lyrics;
    if (lyricsMatch && lyricsMatch[1]) {
      lyrics = lyricsMatch[1]
        .replace(/<br>/g, "\n")
        .replace(/<\/?[^>]+(>|$)/g, "")
        .substring(0, 4000); // Limite pour éviter un dépassement de message
    } else {
      lyrics = "❌ *Impossible de récupérer les paroles.*";
    }

    // Réponse au chat avec les paroles ou un message d'erreur
    await _0x19564c.reply(`*🎵 ${song.full_title} 🎵*\n\n${lyrics}\n\n🔗 [Voir sur Genius](${lyricsUrl})`);

  } catch (error) {
    console.error("Erreur lors de la commande lyrics :", error);
    await _0x19564c.reply("❌ *Une erreur s'est produite lors de la récupération des paroles.*");
  }
});
