const moment = require("moment-timezone");
const Config = require("../config");
let { smd, prefix, updateProfilePicture, parsedJid } = require("../lib");
const { cmd } = require("../lib/plugins");
let mtypes = ["imageMessage"];

// Commande pour définir l'image de profil
smd(
  {
    pattern: "pp",
    desc: "Définir l'image de profil",
    category: "whatsapp",
    use: "<répondre à l'image>",
    fromMe: true,
    filename: __filename,
  },
  async (_0x4f9f9f) => {
    try {
      let _0x3d8b6f = mtypes.includes(_0x4f9f9f.mtype)
        ? _0x4f9f9f
        : _0x4f9f9f.reply_message;
      if (!_0x3d8b6f || !mtypes.includes(_0x3d8b6f?.mtype || "need_Media")) {
        return await _0x4f9f9f.reply("*Répondez à une image, cher utilisateur*");
      }
      return await updateProfilePicture(
        _0x4f9f9f,
        _0x4f9f9f.user,
        _0x3d8b6f,
        "pp"
      );
    } catch (_0x18308f) {
      await _0x4f9f9f.error(_0x18308f + "\n\ncommande : pp", _0x18308f);
    }
  }
);

// Commande pour définir l'image de profil en plein écran
smd(
  {
    pattern: "fullpp",
    desc: "Définir l'image de profil en plein écran",
    category: "whatsapp",
    use: "<répondre à l'image>",
    fromMe: true,
    filename: __filename,
  },
  async (_0x36432c) => {
    try {
      let _0x312b1b = mtypes.includes(_0x36432c.mtype)
        ? _0x36432c
        : _0x36432c.reply_message;
      if (!_0x312b1b || !mtypes.includes(_0x312b1b?.mtype || "need_Media")) {
        return await _0x36432c.reply("*Répondez à une image, cher utilisateur*");
      }
      return await updateProfilePicture(
        _0x36432c,
        _0x36432c.user,
        _0x312b1b,
        "fullpp"
      );
    } catch (_0x8343ed) {
      await _0x36432c.error(_0x8343ed + "\n\ncommande : fullpp", _0x8343ed);
    }
  }
);

// Commande pour supprimer l'image de profil
smd(
  {
    pattern: "rpp",
    desc: "Supprimer l'image de profil",
    category: "whatsapp",
    use: "<chat>",
    fromMe: true,
    filename: __filename,
  },
  async (_0x1c9bb5) => {
    try {
      await _0x1c9bb5.removepp();
      _0x1c9bb5.send("*_Image de profil supprimée avec succès !_*");
    } catch (_0x385cbc) {
      await _0x1c9bb5.error(_0x385cbc + "\n\ncommande : rpp", _0x385cbc);
    }
  }
);

// Commande pour mettre à jour le statut de profil
smd(
  {
    pattern: "bio",
    desc: "Mettre à jour le statut du profil WhatsApp",
    category: "whatsapp",
    use: "<texte>",
    fromMe: true,
    filename: __filename,
  },
  async (_0xd700b1, _0xb45f41) => {
    try {
      if (!_0xb45f41) {
        return await _0xd700b1.send(
          "*_Fournissez du texte pour mettre à jour le statut de profil !_*\n*_Exemple: " +
            prefix +
            "bio Kerm Md_*"
        );
      }
      await _0xd700b1.bot.updateProfileStatus(_0xb45f41);
      _0xd700b1.send("*Statut du profil mis à jour avec succès!*");
    } catch (_0x365d42) {
      await _0xd700b1.error(_0x365d42 + "\n\ncommande : bio", _0x365d42);
    }
  }
);

// Commande pour envoyer un message vidéo en PT
cmd(
  {
    pattern: "ptv",
    desc: "Envoyer un message vidéo PT",
    category: "whatsapp",
    filename: __filename,
  },
  async (_0x235a20, _0x3f96d6, { cmdName: _0x31c746 }) => {
    try {
      if (!_0x235a20.quoted) {
        return await _0x235a20.send("*Uhh, veuillez répondre à une vidéo*");
      }
      let _0x109aee = _0x235a20.quoted.mtype;
      if (_0x109aee !== "videoMessage") {
        return await _0x235a20.send("*Uhh cher utilisateur, répondez à un message vidéo*");
      }
      return await _0x235a20.bot.forwardOrBroadCast(
        _0x235a20.chat,
        _0x235a20.quoted,
        {},
        "ptv"
      );
    } catch (_0x5ae8f7) {
      await _0x235a20.error(_0x5ae8f7 + "\n\ncommande : ptv", _0x5ae8f7);
    }
  }
);

// Commande pour enregistrer un message dans le numéro de log
cmd(
  {
    pattern: "slog",
    desc: "Enregistrer le message dans le numéro de log",
    category: "whatsapp",
    filename: __filename,
  },
  async (_0x23a729, _0x5ad999, { cmdName: _0x2cb44f }) => {
    try {
      let _0x48ef43 = _0x23a729.reply_message;
      if (!_0x48ef43) {
        return await _0x23a729.send("*Uhh, veuillez répondre à un message*");
      }
      let _0x114513 = await _0x23a729.bot.forwardOrBroadCast(
        _0x23a729.user,
        _0x48ef43
      );
    } catch (_0x43530a) {
      await _0x23a729.error(_0x43530a + "\n\ncommande : save", _0x43530a);
    }
  }
);
cmd(
  {
    pattern: "quoted",
    desc: "Obtenir le message auquel on a répondu",
    category: "utilisateur",
    filename: __filename,
  },
  async (_0x65da56) => {
    try {
      if (!_0x65da56.quoted) {
        return await _0x65da56.send("*_Uhh cher utilisateur, répondez à un message_*");
      }
      var _0xaab596 = await _0x65da56.bot.serializeM(
        await _0x65da56.getQuotedObj()
      );
      if (!_0xaab596 || !_0xaab596.quoted) {
        return await _0x65da56.replay(
          "*Le message auquel vous avez répondu ne contient pas de message de réponse*"
        );
      }
      try {
        await _0x65da56.react("✨", _0x65da56);
        return await _0x65da56.bot.copyNForward(
          _0x65da56.chat,
          _0xaab596.quoted,
          false
        );
      } catch (_0x669d0c) {
        await _0x65da56.bot.forward(
          _0x65da56.chat,
          _0xaab596.quoted,
          {},
          _0x65da56
        );
        console.log(_0x669d0c);
      }
    } catch (_0x358ded) {
      await _0x65da56.error(_0x358ded + "\n\ncommande : quoted", _0x358ded);
    }
  }
);

cmd(
  {
    pattern: "blocklist",
    desc: "Obtenir la liste de tous les numéros bloqués",
    category: "whatsapp",
    fromMe: true,
    filename: __filename,
    use: "<texte>",
  },
  async (_0x48a6fc) => {
    try {
      const _0x2c7cd9 = await _0x48a6fc.bot.fetchBlocklist();
      if (_0x2c7cd9.length === 0) {
        return await _0x48a6fc.reply(
          "Uhh cher utilisateur, vous n'avez aucun numéro bloqué."
        );
      }
      let _0x50c0a6 =
        "\n*≡ Liste*\n\n*_Total des utilisateurs:* " +
        _0x2c7cd9.length +
        "_\n\n┌─⊷ \t*UTILISATEURS BLOQUÉS*\n";
      for (let _0x261860 = 0; _0x261860 < _0x2c7cd9.length; _0x261860++) {
        _0x50c0a6 +=
          "▢ " +
          (_0x261860 + 1) +
          ":- wa.me/" +
          _0x2c7cd9[_0x261860].split("@")[0] +
          "\n";
      }
      _0x50c0a6 += "└───────────";
      return await _0x48a6fc.bot.sendMessage(_0x48a6fc.chat, {
        text: _0x50c0a6,
      });
    } catch (_0x526b95) {
      await _0x48a6fc.error(_0x526b95 + "\n\ncommande : blocklist", _0x526b95);
    }
  }
);

cmd(
  {
    pattern: "location",
    desc: "Ajouter *readmore* dans un texte donné.",
    category: "whatsapp",
    filename: __filename,
  },
  async (_0x1de930, _0x4113fc) => {
    try {
      if (!_0x4113fc) {
        return await _0x1de930.reply(
          "*Fournissez les coordonnées pour envoyer la localisation !*\n *Exemple : " +
            prefix +
            "location 24.121231,55.1121221*"
        );
      }
      let _0x1622ee = parseFloat(_0x4113fc.split(",")[0]) || "";
      let _0x4c75f7 = parseFloat(_0x4113fc.split(",")[1]) || "";
      if (!_0x1622ee || isNaN(_0x1622ee) || !_0x4c75f7 || isNaN(_0x4c75f7)) {
        return await _0x1de930.reply(
          "*_Les coordonnées ne sont pas au bon format, essayez encore_*"
        );
      }
      await _0x1de930.reply(
        "*----------LOCALISATION------------*\n```Envoi de la localisation des données fournies :\n Latitude: " +
          _0x1622ee +
          "\n Longitude: " +
          _0x4c75f7 +
          "```\n\n" +
          Config.caption
      );
      return await _0x1de930.sendMessage(
        _0x1de930.jid,
        {
          location: {
            degreesLatitude: _0x1622ee,
            degreesLongitude: _0x4c75f7,
          },
        },
        {
          quoted: _0x1de930,
        }
      );
    } catch (_0x399d05) {
      await _0x1de930.error(_0x399d05 + "\n\ncommande : location", _0x399d05);
    }
  }
);
smd(
  {
    pattern: "listpc",
    category: "whatsapp",
    desc: "Trouve des informations sur les chats personnels",
    filename: __filename,
  },
  async (_0xc7dd0, _0x22efeb, { store: _0x1c364d }) => {
    try {
      _0xc7dd0.react("🫡");
      let _0x5c8d61 = await _0x1c364d.chats
        .all()
        .filter((_0x3b06a8) => _0x3b06a8.id.endsWith(".net"))
        .map((_0x21d01f) => _0x21d01f);
      let _0x9ec34d =
        " 「  " +
        Config.botname +
        "'s pm user list  」\n\nTotal " +
        _0x5c8d61.length +
        " utilisateurs ont échangé dans des chats personnels.";
      for (let _0x4d6030 of _0x5c8d61) {
        _0x9ec34d +=
          "\n\nUtilisateur: @" +
          _0x4d6030.id.split("@")[0] +
          "\nMessages : " +
          _0x4d6030.unreadCount +
          "\nDernier chat : " +
          moment(_0x4d6030.conversationTimestamp * 1000)
            .tz(timezone)
            .format("DD/MM/YYYY HH:mm:ss");
      }
      _0xc7dd0.bot.sendTextWithMentions(_0xc7dd0.chat, _0x9ec34d, _0xc7dd0);
    } catch (_0x5752f9) {
      return await _0xc7dd0.error(
        _0x5752f9 + "\n\n commande: listpc",
        _0x5752f9,
        "*_Aucun résultat trouvé, désolé !_*"
      );
    }
  }
);

smd(
  {
    pattern: "listgc",
    category: "whatsapp",
    desc: "Trouve des informations sur tous les groupes actifs",
    filename: __filename,
  },
  async (_0x281fb2, _0x20e08d, { store: _0x7945b9, Void: _0x274b4e }) => {
    try {
      _0x281fb2.react("🫡");
      let _0x2c5ea1 = await _0x7945b9.chats
        .all()
        .filter((_0x82e0b2) => _0x82e0b2.id.endsWith("@g.us"))
        .map((_0xd85092) => _0xd85092);
      let _0x21f6f4 =
        " 「  " +
        Config.botname +
        "'s group user list  」\n\nTotal " +
        _0x2c5ea1.length +
        " groupes actifs trouvés !";
      for (let _0xd36fa of _0x2c5ea1) {
        let _0x433157 = await _0x274b4e.groupMetadata(_0xd36fa.id);
        _0x21f6f4 +=
          "\n\nNom : " +
          _0x433157.subject +
          " " +
          (_0x433157.owner
            ? "\nPropriétaire : @" + _0x433157.owner.split("@")[0]
            : "") +
          "\nID : " +
          _0xd36fa.id +
          "\nCréé : " +
          (_0x433157.creation
            ? moment(_0x433157.creation * 1000)
                .tz("Asia/Kolkata")
                .format("DD/MM/YYYY HH:mm:ss")
            : _0x433157.creation) +
          "\nMembres : " +
          (_0x433157.participants.length || 0) +
          "\n\nMessages : " +
          _0xd36fa.unreadCount +
          "\nDernier chat : " +
          moment(_0xd36fa.conversationTimestamp * 1000)
            .tz(timezone)
            .format("DD/MM/YYYY HH:mm:ss");
      }
      _0x281fb2.send(_0x21f6f4, {}, "asta", _0x281fb2);
    } catch (_0x5633d6) {
      return await _0x281fb2.error(
        _0x5633d6 + "\n\n commande: listpc",
        _0x5633d6,
        "*_Aucun résultat trouvé, désolé !_*"
      );
    }
  }
);

cmd(
  {
    pattern: "vcard",
    desc: "Créer un contact avec le nom donné.",
    category: "whatsapp",
    filename: __filename,
  },
  async (_0xcffaeb, _0x4158fc) => {
    try {
      if (!_0xcffaeb.quoted) {
        return _0xcffaeb.reply("*Veuillez répondre à l'utilisateur avec un nom*");
      }
      if (!_0x4158fc) {
        return _0xcffaeb.reply(
          "Veuillez me donner le nom de l'utilisateur, \n *Exemple : " +
            prefix +
            "vcard Kang JINHUYK* "
        );
      }
      var _0x423556 = _0x4158fc.split(" ");
      if (_0x423556.length > 3) {
        _0x4158fc = _0x423556.slice(0, 3).join(" ");
      }
      const _0x11df4f =
        "BEGIN:VCARD\nVERSION:3.0\nFN:" +
        _0x4158fc +
        "\nORG:;\nTEL;type=CELL;type=VOICE;waid=" +
        _0xcffaeb.quoted.sender.split("@")[0] +
        ":+" +
        owner[0] +
        "\nEND:VCARD";
      let _0x50f316 = {
        contacts: {
          displayName: _0x4158fc,
          contacts: [
            {
              vcard: _0x11df4f,
            },
          ],
        },
      };
      return await _0xcffaeb.bot.sendMessage(_0xcffaeb.chat, _0x50f316, {
        quoted: _0xcffaeb,
      });
    } catch (_0x429e69) {
      await _0xcffaeb.error(_0x429e69 + "\n\ncommande : vcard", _0x429e69);
    }
  }
);
smd(
  {
    pattern: "edit",
    fromMe: true,
    desc: "Modifier un message envoyé par le bot",
    type: "whatsapp",
  },
  async (_0x1afa64, _0x539d95) => {
    try {
      let _0x329b9f =
        _0x1afa64.reply_message && _0x1afa64.reply_message.fromMe
          ? _0x1afa64.reply_message
          : false;
      if (!_0x329b9f) {
        return await _0x1afa64.reply("_Répondez à un message envoyé par vous !_");
      }
      if (!_0x539d95) {
        return await _0x1afa64.reply("_Besoin de texte, Exemple : edit salut_");
      }
      return await _0x1afa64.edit(_0x539d95, {
        edit: _0x329b9f,
      });
    } catch (_0x294464) {
      await _0x1afa64.error(_0x294464 + "\n\ncommande : edit", _0x294464);
    }
  }
);

smd(
  {
    pattern: "forward",
    alias: ["send"],
    desc: "Transférer vos messages à un jid",
    type: "whatsapp",
  },
  async (_0x402cfa, _0x122b17) => {
    try {
      if (!_0x402cfa.reply_message) {
        return _0x402cfa.reply("*_Répondez à quelque chose !_*");
      }
      let _0x363cd7 = await parsedJid(_0x122b17);
      if (!_0x363cd7 || !_0x363cd7[0]) {
        return await _0x402cfa.send(
          "*Fournissez un jid pour transférer le message*\n*utilisez _" +
            prefix +
            "jid,_ pour obtenir le jid des utilisateurs!*"
        );
      }
      for (let _0x4a5ab9 = 0; _0x4a5ab9 < _0x363cd7.length; _0x4a5ab9++) {
        _0x402cfa.bot.forwardOrBroadCast(
          _0x363cd7[_0x4a5ab9],
          _0x402cfa.reply_message
        );
      }
    } catch (_0x3721ac) {
      await _0x402cfa.error(_0x3721ac + "\n\ncommande : forward", _0x3721ac);
    }
  }
);

smd(
  {
    cmdname: "block",
    info: "Bloque une personne",
    fromMe: true,
    type: "whatsapp",
    filename: __filename,
    use: "<répondre/mentionner un utilisateur>",
  },
  async (_0x1ed3b3) => {
    try {
      let _0x3489cf = _0x1ed3b3.reply_message
        ? _0x1ed3b3.reply_message.sender
        : !_0x1ed3b3.isGroup
        ? _0x1ed3b3.from
        : _0x1ed3b3.mentionedJid[0]
        ? _0x1ed3b3.mentionedJid[0]
        : "";
      if (!_0x3489cf && !_0x3489cf.includes("@s.whatsapp.net")) {
        return await _0x1ed3b3.reply("*Eh bien, répondez/mentionnez un utilisateur*");
      }
      if (_0x1ed3b3.checkBot(_0x3489cf)) {
        return await _0x1ed3b3.reply("*Je ne peux pas bloquer mon créateur Kang JINHUYK, idiot😑 !!*");
      }
      await _0x1ed3b3.bot
        .updateBlockStatus(_0x3489cf, "block")
        .then((_0x112d4d) => {
          _0x1ed3b3.react("🔒", _0x1ed3b3);
        })
        .catch((_0x4deb64) => _0x1ed3b3.reply("*_Impossible de bloquer l'utilisateur, désolé !!_*"));
    } catch (_0x337f7a) {
      await _0x1ed3b3.error(_0x337f7a + "\n\ncommande: block", _0x337f7a, false);
    }
  }
);

smd(
  {
    cmdname: "unblock",
    info: "Débloque un utilisateur",
    type: "whatsapp",
    fromMe: true,
    filename: __filename,
  },
  async (_0xdd6403) => {
    try {
      let _0xe86e54 = _0xdd6403.reply_message
        ? _0xdd6403.reply_message.sender
        : !_0xdd6403.isGroup
        ? _0xdd6403.from
        : _0xdd6403.mentionedJid[0]
        ? _0xdd6403.mentionedJid[0]
        : "";
      if (!_0xe86e54 && !_0xe86e54.includes("@s.whatsapp.net")) {
        return await _0xdd6403.reply("*Eh bien, répondez/mentionnez un utilisateur*");
      }
      await _0xdd6403.bot
        .updateBlockStatus(_0xe86e54, "unblock")
        .then((_0x4f3a25) =>
          _0xdd6403.send(
            "*@" + _0xe86e54.split("@")[0] + " Débloqué avec succès..!*",
            {
              mentions: [users],
            }
          )
        )
        .catch((_0x2f7e88) =>
          _0xdd6403.reply("*_Impossible de débloquer l'utilisateur, assurez-vous qu'il soit bloqué !!_*")
        );
    } catch (_0x5ae50f) {
      await _0xdd6403.error(_0x5ae50f + "\n\ncommande: unblock", _0x5ae50f);
    }
  }
);
cmd(
  {
    pattern: "vv",
    alias: ["viewonce", "retrive"],
    desc: "Télécharge un message viewOnce.",
    category: "whatsapp",
    use: "<requête>",
    react: "💾",
    filename: __filename,
  },
  async (_0x5e331d, _0x237d8a) => {
    try {
      var _0x17ffa2 = false;
      if (_0x5e331d.reply_message) {
        if (
          _0x5e331d.reply_message.viewOnce ||
          (_0x5e331d.device === "ios" &&
            /audioMessage|videoMessage|imageMessage/g.test(
              _0x5e331d.reply_message.mtype
            ))
        ) {
          _0x17ffa2 = _0x5e331d.reply_message;
        }
      }
      _0x17ffa2.mtype = _0x17ffa2.mtype2;
      if (!_0x17ffa2) {
        return _0x5e331d.reply("```Veuillez répondre à un message ViewOnce```");
      }
      let _0x86453 = {
        key: _0x17ffa2.key,
        message: {
          conversation: "```[VIEWONCE TROUVÉ, TÉLÉCHARGEMENT 100%]```",
        },
      };
      let _0x22f0a2 = await _0x5e331d.bot.downloadAndSaveMediaMessage(
        _0x17ffa2.msg
      );
      await _0x5e331d.bot.sendMessage(
        _0x5e331d.jid,
        {
          [_0x17ffa2.mtype2.split("Mess")[0]]: {
            url: _0x22f0a2,
          },
          caption: _0x17ffa2.body,
        },
        {
          quoted: _0x86453,
        }
      );
    } catch (_0x23316d) {
      await _0x5e331d.error(_0x23316d + "\n\ncommande : vv", _0x23316d);
    }
  }
);
