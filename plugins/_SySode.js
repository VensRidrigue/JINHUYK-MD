const {
  exec
} = require("child_process");
const {
  plugins,
  smd,
  Config
} = require("../lib");
let s_ser = true;
smd(
   {
     cmdname: "shutdown",
     info: "To restart bot",
     type: "tools",
     fromMe: s_ser,
     filename: __filename,
   },
   async (_0x514d3c) => {
     const { exec: _0x1912df } = require("child_process");
     _0x514d3c.reply("Shutting Down");
     _0x1912df("pm2 stop all");
   }
 );
smd({
  cmdname: "restart",
  info: "To restart bot",
  type: "tools",
  fromMe: s_ser,
  filename: __filename
}, async _0x514d3c => {
  const {
    exec: _0x1912df
  } = require("child_process");
  _0x514d3c.reply("Restarting");
  _0x1912df("pm2 restart all");
});
smd({
  cmdname: "plugins",
  alias: ["plugin"],
  type: "owner",
  info: "Shows list of all externally installed modules",
  fromMe: s_ser,
  filename: __filename,
  use: "<name>"
}, async (_0x2a10d6, _0x2420b0) => {
  try {
    let _0x4e5e2e = await plugins(_0x2a10d6, "plugins", _0x2420b0);
    return await _0x2a10d6.send(!_0x4e5e2e ? "*_There's no plugin install in " + Config.botname + "_*" : !_0x2420b0 ? "*All Installed Modules are:-*\n\n" + _0x4e5e2e : _0x4e5e2e);
  } catch (_0x21e335) {
    _0x2a10d6.error(_0x21e335 + " \n\ncmdName plugins\n");
  }
});
smd({
  pattern: "remove",
  alias: ["uninstall"],
  type: "owner",
  info: "removes external modules.",
  fromMe: s_ser,
  filename: __filename,
  use: "<plugin name>"
}, async (_0x1510c9, _0x40e763) => {
  if (!_0x40e763) {
    return await _0x1510c9.reply("*_Uhh Please, Provide Me Plugin Name_*");
  }
  if (_0x40e763 === "alls") {
    return await _0x1510c9.reply(await plugins("remove", "all", __dirname));
  }
  try {
    await _0x1510c9.send(await plugins(_0x1510c9, "remove", _0x40e763, __dirname), {}, "", _0x1510c9);
  } catch {}
});
smd({
  cmdname: "install",
  type: "owner",
  info: "Installs external modules..",
  fromMe: s_ser,
  filename: __filename,
  use: "<gist url>"
}, async (_0xf71b5c, _0x2bdd09) => {
  let _0x2b0828 = _0x2bdd09 ? _0x2bdd09 : _0xf71b5c.quoted ? _0xf71b5c.quoted.text : "";
  if (!_0x2b0828.toLowerCase().includes("https")) {
    return await _0xf71b5c.send("*_Uhh Please, Provide Me Plugin Url_*");
  }
  await _0xf71b5c.reply(await plugins(_0xf71b5c, "install", _0x2b0828, __dirname));
});
smd({
   pattern: "jinhuyk",
   desc: "Commande du propriétaire.",
   category: "owner",
   filename: __filename,
   use: ""
}, async (_0x19df48) => {
   try {
     // Réponse du bot avec le message et l'image
     let message = `Bonjour je suis *JINHUYK-MD* un bot multimédia développé par Kang Jinhyuk ayant une bonne expérience. Je suis toujours en amélioration continue, de nouvelles fonctionnalités arrivent pour plus de fun.`;
     let imageUrl = "https://files.catbox.moe/ys8210.jpg";
     
     // Envoi du message avec l'image
     await _0x19df48.reply(message, { image: { url: imageUrl }, caption: message });
     
     // Réaction à la commande
     await _0x19df48.react('🍁');
   } catch (error) {
     console.error("Erreur lors de l'exécution de la commande 'jinhuyk':", error);
     await _0x19df48.reply("Une erreur s'est produite lors de l'exécution de la commande.");
   }
});
