const axios = require("axios");

// Fonction utilitaire pour récupérer les images depuis une API
async function sendAnime(message, category) {
  try {
    // Exemple d'utilisation d'une API d'images aléatoires
    const url = `https://api.waifu.pics/sfw/${category}`;
    const response = await axios.get(url);

    if (response.data && response.data.url) {
      // Retourne l'URL de l'image
      return response.data.url;
    } else {
      throw new Error("Image introuvable dans la catégorie " + category);
    }
  } catch (error) {
    console.error(`Erreur lors de la récupération de l'image pour ${category} :`, error);
    return null;
  }
}

// Commande pour obtenir des images aléatoires de waifu
smd({
  pattern: "waifu",
  desc: "Obtenez des images aléatoires de waifu.",
  category: "anime",
  filename: __filename
}, async (message, reply, { cmdName }) => {
  try {
    const result = await sendAnime(message, "waifu");
    if (result) {
      await message.reply({ image: result, caption: "Voici une image de waifu !" });
    } else {
      throw new Error("Aucune image trouvée.");
    }
  } catch (error) {
    console.error("Erreur dans la commande 'waifu' :", error);
    await message.reply("Une erreur s'est produite lors de la récupération de l'image waifu.");
  }
});

// Commande pour envoyer une image de neko
smd({
  pattern: "neko",
  desc: "Envoie une image de neko dans le chat.",
  category: "anime",
  filename: __filename
}, async (message, reply, { cmdName }) => {
  try {
    const result = await sendAnime(message, "neko");
    if (result) {
      await message.reply({ image: result, caption: "Voici une image de neko !" });
    } else {
      throw new Error("Aucune image trouvée.");
    }
  } catch (error) {
    console.error("Erreur dans la commande 'neko' :", error);
    await message.reply("Une erreur s'est produite lors de la récupération de l'image neko.");
  }
});

// Commande pour obtenir des images aléatoires de Megumin
smd({
  pattern: "megumin",
  desc: "Obtenez des images aléatoires de Megumin.",
  category: "anime",
  filename: __filename
}, async (message, reply, { cmdName }) => {
  try {
    const result = await sendAnime(message, "megumin");
    if (result) {
      await message.reply({ image: result, caption: "Voici une image de Megumin !" });
    } else {
      throw new Error("Aucune image trouvée.");
    }
  } catch (error) {
    console.error("Erreur dans la commande 'megumin' :", error);
    await message.reply("Une erreur s'est produite lors de la récupération de l'image Megumin.");
  }
});

// Commande pour envoyer une image de loli
smd({
  pattern: "loli",
  desc: "Envoie une image de loli.",
  category: "anime",
  filename: __filename
}, async message => {
  try {
    const result = await sendAnime(message, "loli");
    if (result) {
      await message.reply({ image: result, caption: "Voici une image de loli !" });
    } else {
      throw new Error("Aucune image trouvée.");
    }
  } catch (error) {
    console.error("Erreur dans la commande 'loli' :", error);
    await message.reply("Une erreur s'est produite lors de la récupération de l'image loli.");
  }
});

// Commande pour envoyer une image de fille-renard (Fox Girl)
smd({
  pattern: "foxgirl",
  desc: "Envoie une image de fille-renard (anime).",
  category: "anime",
  filename: __filename
}, async message => {
  try {
    const result = await sendAnime(message, "foxgirl");
    if (result) {
      await message.reply({ image: result, caption: "Voici une image de fille-renard !" });
    } else {
      throw new Error("Aucune image trouvée.");
    }
  } catch (error) {
    console.error("Erreur dans la commande 'foxgirl' :", error);
    await message.reply("Une erreur s'est produite lors de la récupération de l'image de fille-renard.");
  }
});

// Commande pour envoyer une image d'animé Smug
smd({
  pattern: "smug",
  desc: "Envoie une image smug.",
  category: "anime",
  filename: __filename
}, async message => {
  try {
    const result = await sendAnime(message, "smug");
    if (result) {
      await message.reply({ image: result, caption: "Voici une image smug !" });
    } else {
      throw new Error("Aucune image trouvée.");
    }
  } catch (error) {
    console.error("Erreur dans la commande 'smug' :", error);
    await message.reply("Une erreur s'est produite lors de la récupération de l'image smug.");
  }
});

// Commande pour envoyer une image de bonjour
smd({
  pattern: "waifu-greet",
  desc: "Envoie une image de waifu qui dit bonjour.",
  category: "anime",
  filename: __filename
}, async message => {
  try {
    const result = await sendAnime(message, "wave");
    if (result) {
      await message.reply({ image: result, caption: "Bonjour 👋 Voici une waifu qui dit bonjour !" });
    } else {
      throw new Error("Aucune image trouvée.");
    }
  } catch (error) {
    console.error("Erreur dans la commande 'waifu-greet' :", error);
    await message.reply("Une erreur s'est produite lors de la récupération de l'image.");
  }
});
