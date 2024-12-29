//Kang JINHUYK
const Config = require("../config");
let {
  sendGImages,
  smd
} = require("../lib");
const axios = require("axios");
const fetch = require("node-fetch");
const {
  fetchJson,
  getBuffer
} = require("../lib/");
async function sendAnime(_0x55a475, _0x509539, _0x4e419e, _0x835b9a = "") {
  function _0xf3e051() {
    const _0x58922f = ["Naruto", "\n*More on✨:* ", "map", "1736295xNxVMd", "get", "json", "\n*Created On☘️:* ", "https://api.waifu.pics/sfw/", "articles", "sendMessage", "https://api.waifu.pics/nsfw/", "split", "animenews", "foxgirl", "12896280WdEPAA", "chat", "log", "url", "publishedAt", "/video.json", "https://nekos.life/api/v2/img/fox_girl", "floor", "result", "waifu", "nsfw", "\n\n*Content🧩:* ", "trap", "author", "neko", "loli", "length", "4267560Bkglyi", "2301172sMBiSS", "demon", "12uzEKTO", "title", "naruto", "data", "./commands/Anime.js/sendAnime()\n", "source", "102969imHSeo", "bot", "1786770BYzQsB", "megumin", "*Title🔰:* ", ",Here we go😊!!!!*", "10vterwW", "1894515XGwMrc", "https://newsapi.org/v2/everything?q=", "error", "\n*Author📌:* "];
    _0xf3e051 = function () {
      return _0x58922f;
    };
    return _0xf3e051();
  }
  const _0x2d1f22 = _0x2f0bdf;
  (function (_0x62479, _0x27d9b1) {
    const _0x384220 = _0x2f0bdf;
    const _0x1ce537 = _0x62479();
    while (true) {
      try {
        const _0x9dcce7 = -parseInt(_0x384220(332)) / 1 * (-parseInt(_0x384220(338)) / 2) + -parseInt(_0x384220(346)) / 3 + parseInt(_0x384220(324)) / 4 + parseInt(_0x384220(334)) / 5 * (-parseInt(_0x384220(326)) / 6) + -parseInt(_0x384220(339)) / 7 + -parseInt(_0x384220(323)) / 8 + parseInt(_0x384220(357)) / 9;
        if (_0x9dcce7 === _0x27d9b1) {
          break;
        } else {
          _0x1ce537.push(_0x1ce537.shift());
        }
      } catch (_0x58dc6a) {
        _0x1ce537.push(_0x1ce537.shift());
      }
    }
  })(_0xf3e051, 425495);
  function _0x2f0bdf(_0x12f513, _0x42e578) {
    const _0x36af85 = _0xf3e051();
    _0x2f0bdf = function (_0x362f95, _0x29060b) {
      _0x362f95 = _0x362f95 - 323;
      let _0x43aa24 = _0x36af85[_0x362f95];
      return _0x43aa24;
    };
    return _0x2f0bdf(_0x12f513, _0x42e578);
  }
  try {
    if (_0x4e419e === _0x2d1f22(366) || _0x4e419e === _0x2d1f22(371) || _0x4e419e === _0x2d1f22(335)) {
      let _0x379467 = _0x835b9a.split("|")[0] || "";
      let _0x4c4376 = _0x835b9a[_0x2d1f22(354)]("|")[1] || "1";
      let _0x117530 = _0x835b9a[_0x2d1f22(354)]("|")[1] ? "" : " *" + _0x4e419e + _0x2d1f22(337);
      let _0x43e16d = _0x379467 == _0x2d1f22(367) ? _0x2d1f22(353) + (_0x4e419e === "megumin" ? _0x2d1f22(369) : _0x2d1f22(366)) : _0x2d1f22(350) + _0x4e419e;
      for (let _0x4e7334 = 0; _0x4e7334 < _0x4c4376; _0x4e7334++) {
        let _0x576105 = await (await fetch(_0x43e16d))[_0x2d1f22(348)]();
        await _0x55a475.bot.sendMessage(_0x509539[_0x2d1f22(358)], {
          image: {
            url: _0x576105.url
          },
          caption: _0x117530
        }, {
          quoted: _0x509539
        });
      }
    } else if (_0x4e419e === _0x2d1f22(372) || _0x4e419e === _0x2d1f22(356)) {
      let _0x385596 = _0x4e419e === _0x2d1f22(372) ? "https://api.waifu.pics/sfw/shinobu" : _0x2d1f22(363);
      let _0x3e303e = await axios[_0x2d1f22(347)](_0x385596);
      await _0x55a475[_0x2d1f22(333)][_0x2d1f22(352)](_0x509539[_0x2d1f22(358)], {
        image: {
          url: _0x3e303e[_0x2d1f22(329)][_0x2d1f22(360)]
        }
      }, {
        quoted: _0x509539
      });
    } else if (_0x4e419e === _0x2d1f22(325) || _0x4e419e === _0x2d1f22(328)) {
      let _0x3a01f7 = "https://raw.githubusercontent.com/SuhailTechInfo/Suhail-Md-Media/main/" + (_0x4e419e === "demon" ? "Demonslayer" : _0x2d1f22(343)) + _0x2d1f22(362);
      const _0x37dffc = await fetchJson(_0x3a01f7);
      const _0x51dced = _0x37dffc.result[Math[_0x2d1f22(364)](Math.random() * _0x37dffc[_0x2d1f22(365)][_0x2d1f22(373)])].url;
      await _0x55a475[_0x2d1f22(333)][_0x2d1f22(352)](_0x509539[_0x2d1f22(358)], {
        video: {
          url: _0x51dced
        },
        caption: "*Amuse toi⚔️!!*"
      });
    } else if (_0x4e419e === _0x2d1f22(355)) {
      let _0x509613 = await axios.get(_0x2d1f22(340) + _0x835b9a + "&domains=techcrunch.com,animenewsnetwork.com,myanimelist.net,comingsoon.net,crunchyroll.com&language=en&sortby=publishedat&apikey=cd4116be09ef4a0caceedf21b6258460&pageSize=8");
      let _0x7f6c91 = _0x509613[_0x2d1f22(329)][_0x2d1f22(351)];
      _0x7f6c91[_0x2d1f22(345)](async (_0x3a0939, _0x38234d) => {
        const _0x4a7def = _0x2d1f22;
        try {
          _0x55a475.bot.sendMessage(_0x509539[_0x4a7def(358)], {
            image: {
              url: _0x3a0939.urlToImage
            },
            caption: _0x4a7def(336) + _0x3a0939[_0x4a7def(327)] + _0x4a7def(368) + _0x3a0939.content + _0x4a7def(342) + _0x3a0939[_0x4a7def(370)] + "\n*Source♦️:* " + _0x3a0939[_0x4a7def(331)].name + _0x4a7def(349) + _0x3a0939[_0x4a7def(361)] + _0x4a7def(344) + _0x3a0939[_0x4a7def(360)] + "\n\n" + Config.caption + "*"
          }, {
            quoted: _0x509539
          });
        } catch (_0x120a1d) {}
      });
    }
  } catch (_0x29e730) {
    console[_0x2d1f22(359)](_0x2d1f22(330), _0x29e730);
    await _0x509539[_0x2d1f22(341)](_0x29e730);
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
