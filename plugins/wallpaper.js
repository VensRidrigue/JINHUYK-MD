const fs = require("fs");
const fetch = require("node-fetch");
const { smd, TelegraPh } = require("../lib");
const Config = require("../config");

smd(
  {
    pattern: "aesthetic",
    category: "wallpaper",
    filename: __filename,
    desc: "Obtenez un fond d'écran esthétique.",
  },
  async (m) => {
    try {
      let apiUrl = "https://api.maher-zubair.tech/wallpaper/asthetic";
      let response = await fetch(apiUrl);
      let jsonResponse = await response.json();

      if (jsonResponse.status === 200) {
        await m.send(jsonResponse.url, { caption: Config.caption }, "image", m);
      } else {
        await m.send("*_La demande n'a pas pu être traitée !!_*");
      }
    } catch (error) {
      await m.error(
        error + "\n\ncommande: aesthetic",
        error,
        "*_Pas de réponse de l'API, Désolé !!_*"
      );
    }
  }
);

smd(
    {
      pattern: "bike",
      category: "wallpaper",
      filename: __filename,
      desc: "Obtenez un fond d'écran de vélo.",
    },
    async (m) => {
      try {
        let apiUrl = "https://api.maher-zubair.tech/wallpaper/bike";
        let response = await fetch(apiUrl);
        let jsonResponse = await response.json();
  
        if (jsonResponse.status === 200) {
          await m.send(jsonResponse.url, { caption: Config.caption }, "image", m);
        } else {
          await m.send("*_La demande n'a pas pu être traitée !!_*");
        }
      } catch (error) {
        await m.error(
          error + "\n\ncommande: bike",
          error,
          "*_Pas de réponse de l'API, Désolé !!_*"
        );
      }
    }
);

smd(
    {
      pattern: "cr7",
      category: "wallpaper",
      filename: __filename,
      desc: "Obtenez un fond d'écran de CR7 (Cristiano Ronaldo).",
    },
    async (m) => {
      try {
        let apiUrl = "https://api.maher-zubair.tech/wallpaper/cr7";
        let response = await fetch(apiUrl);
        let jsonResponse = await response.json();
  
        if (jsonResponse.status === 200) {
          await m.send(jsonResponse.url, { caption: Config.caption }, "image", m);
        } else {
          await m.send("*_La demande n'a pas pu être traitée !!_*");
        }
      } catch (error) {
        await m.error(
          error + "\n\ncommande: cr7",
          error,
          "*_Pas de réponse de l'API, Désolé !!_*"
        );
      }
    }
);

smd(
    {
      pattern: "cat",
      category: "wallpaper",
      filename: __filename,
      desc: "Obtenez un fond d'écran de chat.",
    },
    async (m) => {
      try {
        let apiUrl = "https://api.maher-zubair.tech/wallpaper/cat";
        let response = await fetch(apiUrl);
        let jsonResponse = await response.json();
  
        if (jsonResponse.status === 200) {
          await m.send(jsonResponse.url, { caption: Config.caption }, "image", m);
        } else {
          await m.send("*_La demande n'a pas pu être traitée !!_*");
        }
      } catch (error) {
        await m.error(
          error + "\n\ncommande: cat",
          error,
          "*_Pas de réponse de l'API, Désolé !!_*"
        );
      }
    }
);

smd(
    {
      pattern: "dog",
      category: "wallpaper",
      filename: __filename,
      desc: "Obtenez un fond d'écran de chien.",
    },
    async (m) => {
      try {
        let apiUrl = "https://api.maher-zubair.tech/wallpaper/dog";
        let response = await fetch(apiUrl);
        let jsonResponse = await response.json();
  
        if (jsonResponse.status === 200) {
          await m.send(jsonResponse.url, { caption: Config.caption }, "image", m);
        } else {
          await m.send("*_La demande n'a pas pu être traitée !!_*");
        }
      } catch (error) {
        await m.error(
          error + "\n\ncommande: dog",
          error,
          "*_Pas de réponse de l'API, Désolé !!_*"
        );
      }
    }
);

smd(
    {
      pattern: "messi",
      category: "wallpaper",
      filename: __filename,
      desc: "Obtenez un fond d'écran de Lionel Messi.",
    },
    async (m) => {
      try {
        let apiUrl = "https://api.maher-zubair.tech/wallpaper/messi";
        let response = await fetch(apiUrl);
        let jsonResponse = await response.json();
  
        if (jsonResponse.status === 200) {
          await m.send(jsonResponse.url, { caption: Config.caption }, "image", m);
        } else {
          await m.send("*_La demande n'a pas pu être traitée !!_*");
        }
      } catch (error) {
        await m.error(
          error + "\n\ncommande: messi",
          error,
          "*_Pas de réponse de l'API, Désolé !!_*"
        );
      }
    }
);

smd(
    {
      pattern: "mlegend",
      category: "wallpaper",
      filename: __filename,
      desc: "Obtenez un fond d'écran de Mobile Legends.",
    },
    async (m) => {
      try {
        let apiUrl = "https://api.maher-zubair.tech/wallpaper/mlegend";
        let response = await fetch(apiUrl);
        let jsonResponse = await response.json();
  
        if (jsonResponse.status === 200) {
          await m.send(jsonResponse.url, { caption: Config.caption }, "image", m);
        } else {
          await m.send("*_La demande n'a pas pu être traitée !!_*");
        }
      } catch (error) {
        await m.error(
          error + "\n\ncommande: mlegend",
          error,
          "*_Pas de réponse de l'API, Désolé !!_*"
        );
      }
    }
);

smd(
    {
      pattern: "pubg",
      category: "wallpaper",
      filename: __filename,
      desc: "Obtenez un fond d'écran de PUBG.",
    },
    async (m) => {
      try {
        let apiUrl = "https://api.maher-zubair.tech/wallpaper/pubg";
        let response = await fetch(apiUrl);
        let jsonResponse = await response.json();
  
        if (jsonResponse.status === 200) {
          await m.send(jsonResponse.url, { caption: Config.caption }, "image", m);
        } else {
          await m.send("*_La demande n'a pas pu être traitée !!_*");
        }
      } catch (error) {
        await m.error(
          error + "\n\ncommande: pubg",
          error,
          "*_Pas de réponse de l'API, Désolé !!_*"
        );
      }
    }
);

smd(
    {
      pattern: "random",
      category: "wallpaper",
      filename: __filename,
      desc: "Obtenez un fond d'écran aléatoire.",
    },
    async (m) => {
      try {
        let apiUrl = "https://api.maher-zubair.tech/wallpaper/random";
        let response = await fetch(apiUrl);
        let jsonResponse = await response.json();
  
        if (jsonResponse.status === 200) {
          await m.send(jsonResponse.url, { caption: Config.caption }, "image", m);
        } else {
          await m.send("*_La demande n'a pas pu être traitée !!_*");
        }
      } catch (error) {
        await m.error(
          error + "\n\ncommande: random",
          error,
          "*_Pas de réponse de l'API, Désolé !!_*"
        );
      }
    }
);

smd(
    {
      pattern: "car",
      category: "wallpaper",
      filename: __filename,
      desc: "Obtenez un fond d'écran de voiture.",
    },
    async (m) => {
      try {
        let apiUrl = "https://api.maher-zubair.tech/wallpaper/car";
        let response = await fetch(apiUrl);
        let jsonResponse = await response.json();
  
        if (jsonResponse.status === 200) {
          await m.send(jsonResponse.url, { caption: Config.caption }, "image", m);
        } else {
          await m.send("*_La demande n'a pas pu être traitée !!_*");
        }
      } catch (error) {
        await m.error(
          error + "\n\ncommande: car",
          error,
          "*_Pas de réponse de l'API, Désolé !!_*"
        );
      }
    }
);

smd(
    {
      pattern: "blackpink",
      category: "wallpaper",
      filename: __filename,
      desc: "Obtenez un fond d'écran de Blackpink.",
    },
    async (m) => {
      try {
        let apiUrl = "https://api.maher-zubair.tech/wallpaper/blackpink";
        let response = await fetch(apiUrl);
        let jsonResponse = await response.json();
  
        if (jsonResponse.status === 200) {
          await m.send(jsonResponse.url, { caption: Config.caption }, "image", m);
        } else {
          await m.send("*_La demande n'a pas pu être traitée !!_*");
        }
      } catch (error) {
        await m.error(
          error + "\n\ncommande: blackpink",
          error,
          "*_Pas de réponse de l'API, Désolé !!_*"
        );
      }
    }
);
// Commande Naruto Shippuden - Animaux
smd(
  {
    pattern: "naruto-animals",
    category: "wallpaper",
    filename: __filename,
    desc: "Obtenez un fond d'écran d'animaux dans l'univers Naruto Shippuden.",
  },
  async (m) => {
    try {
      let apiUrl = "https://api.maher-zubair.tech/wallpaper/naruto-animals";
      let response = await fetch(apiUrl);
      let jsonResponse = await response.json();

      if (jsonResponse.status === 200) {
        await m.send(jsonResponse.url, { caption: Config.caption }, "image", m);
      } else {
        await m.send("*_La demande n'a pas pu être traitée !!_*");
      }
    } catch (error) {
      await m.error(
        error + "\n\ncommande: naruto-animals",
        error,
        "*_Pas de réponse de l'API, Désolé !!_*"
      );
    }
  }
);

// Commande Demon Slayer - Animaux
smd(
  {
    pattern: "demon-slayer-animals",
    category: "wallpaper",
    filename: __filename,
    desc: "Obtenez un fond d'écran d'animaux dans l'univers de Demon Slayer.",
  },
  async (m) => {
    try {
      let apiUrl = "https://api.maher-zubair.tech/wallpaper/demon-slayer-animals";
      let response = await fetch(apiUrl);
      let jsonResponse = await response.json();

      if (jsonResponse.status === 200) {
        await m.send(jsonResponse.url, { caption: Config.caption }, "image", m);
      } else {
        await m.send("*_La demande n'a pas pu être traitée !!_*");
      }
    } catch (error) {
      await m.error(
        error + "\n\ncommande: demon-slayer-animals",
        error,
        "*_Pas de réponse de l'API, Désolé !!_*"
      );
    }
  }
);

// Commande Jujutsu Kaisen - Animaux
smd(
  {
    pattern: "jujutsu-kaisen-animals",
    category: "wallpaper",
    filename: __filename,
    desc: "Obtenez un fond d'écran d'animaux dans l'univers de Jujutsu Kaisen.",
  },
  async (m) => {
    try {
      let apiUrl = "https://api.maher-zubair.tech/wallpaper/jujutsu-kaisen-animals";
      let response = await fetch(apiUrl);
      let jsonResponse = await response.json();

      if (jsonResponse.status === 200) {
        await m.send(jsonResponse.url, { caption: Config.caption }, "image", m);
      } else {
        await m.send("*_La demande n'a pas pu être traitée !!_*");
      }
    } catch (error) {
      await m.error(
        error + "\n\ncommande: jujutsu-kaisen-animals",
        error,
        "*_Pas de réponse de l'API, Désolé !!_*"
      );
    }
  }
);
// Commande Akashi Seijuro
smd(
  {
    pattern: "akashi",
    category: "wallpaper",
    filename: __filename,
    desc: "Obtenez un fond d'écran d'Akashi Seijuro.",
  },
  async (m) => {
    try {
      let apiUrl = "https://api.maher-zubair.tech/wallpaper/akashi";
      let response = await fetch(apiUrl);
      let jsonResponse = await response.json();

      if (jsonResponse.status === 200) {
        await m.send(jsonResponse.url, { caption: Config.caption }, "image", m);
      } else {
        await m.send("*_La demande n'a pas pu être traitée !!_*");
      }
    } catch (error) {
      await m.error(
        error + "\n\ncommande: akashi",
        error,
        "*_Pas de réponse de l'API, Désolé !!_*"
      );
    }
  }
);

// Commande Kagami Taiga
smd(
  {
    pattern: "kagami",
    category: "wallpaper",
    filename: __filename,
    desc: "Obtenez un fond d'écran de Kagami Taiga.",
  },
  async (m) => {
    try {
      let apiUrl = "https://api.maher-zubair.tech/wallpaper/kagami";
      let response = await fetch(apiUrl);
      let jsonResponse = await response.json();

      if (jsonResponse.status === 200) {
        await m.send(jsonResponse.url, { caption: Config.caption }, "image", m);
      } else {
        await m.send("*_La demande n'a pas pu être traitée !!_*");
      }
    } catch (error) {
      await m.error(
        error + "\n\ncommande: kagami",
        error,
        "*_Pas de réponse de l'API, Désolé !!_*"
      );
    }
  }
);

// Commande Aomine Daiki
smd(
  {
    pattern: "aomine",
    category: "wallpaper",
    filename: __filename,
    desc: "Obtenez un fond d'écran d'Aomine Daiki.",
  },
  async (m) => {
    try {
      let apiUrl = "https://api.maher-zubair.tech/wallpaper/aomine";
      let response = await fetch(apiUrl);
      let jsonResponse = await response.json();

      if (jsonResponse.status === 200) {
        await m.send(jsonResponse.url, { caption: Config.caption }, "image", m);
      } else {
        await m.send("*_La demande n'a pas pu être traitée !!_*");
      }
    } catch (error) {
      await m.error(
        error + "\n\ncommande: aomine",
        error,
        "*_Pas de réponse de l'API, Désolé !!_*"
      );
    }
  }
);
