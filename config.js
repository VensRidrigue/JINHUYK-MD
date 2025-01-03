//#ENJOY BRO😍
// Credit: JINHUYK|KangJinhuyk 
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kangjinhuyk@yahoo.com";
global.location = "Douala, Cameroun";
global.mongodb = process.env.MONGODB_URL || "mongodb+srv://Rayan:<Emmanuel237>@cluster0.8twd0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/KangJinhuyk/JINHUYK-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vajrhmz96H4IsEjh4a41";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vajrhmz96H4IsEjh4a41";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.postimg.cc/wT3ZsJ8D/Solo-max-level-newbie-3.jpg";
global.devs = "https://wa.me/50955169275, https://wa.me/50955169275";
global.sudo = process.env.SUDO || "50955169275";
global.owner = process.env.OWNER_NUMBER || "+50955169275";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.postimg.cc/c1FPHhjs/JINHUYK.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "false";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://unknown-md-sessions-generator-1.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV1BZR1lyTU55d1IxRXVza082b21PQlFWN2xNZ0c1N3BYWUJmVW5uKzIwcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSWlPejdCM0s4UlVyazc1Z0cxYm1ScGQxWmdEaVo5ZHJiSlQ3Z2ZHOCtEdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0SVdDUjJMeWIza0FQczVvd2daSGJSdkNaK0NNTlJ5Rkg1R1ZYNzk5QjE4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLUmFPUnhiRkZNeXk3YktPUS9mQnYvbVNhSWpXdzZTNnFOekd2c0pRbm5JPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNDbEhZMDQva3hBYnBYNGxuVDFNZk5LSFZHWGhXem5EOWhxOGxUbEkrRTQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InA3U2gzMWdkclpWcTl0U3FYeFZYcU9mNWpCbG5HY3gxNXR5dEhodG42eEE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUsxNjBDaW5BM0pBMy9neTRJSDF6ZDhBNnFsQjBhRHZ3SGxzWDBPUldYVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOVNJNDJOVWJ1S2dHRDVoNDY5bVJRSjUxTk9SZTJ5aFlXM2JmVHE2YTVUcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlpTaEVGOHVSVTVuUkk4Ukd1MHBhMlUzRXNyT3VJdFhaMitES2oySU1USDNnQkVWUWJrVEhlaGdIQUpocnQwYm5iSnpLdDNUKytydGd4ZHhIWTh2T0NRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OSwiYWR2U2VjcmV0S2V5IjoidVp5UVorUFBrQmRkSzBoUFF0cUs2SnFkMEtrbG92YTFwWUNIQTMyMnllbz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiZXFWbjhOYnBUQUdQNjBrdVhPSjFxUSIsInBob25lSWQiOiJiZTg3NWU1Yi0xMWVhLTQzNWYtYjE2NC02OTYxYjE0NzA0ZTUiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicXhOMVgvd0pTalVsanhRa1ZkVnhKRGYxZk80PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndiRm1hNXRzLzVHWm5sV1RaYkNlTWlaWm9JVT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJRNTNaQzM0VCIsIm1lIjp7ImlkIjoiNTA5NTUxNjkyNzU6M0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwk4ap4LyS8J2Vg/CdlYbihJ3wnZS7IPCWo5jwnZC38J2br/Cdm63wnZup8J2brvCThZPwnZCD8J2aq/CdmqrwnZCK8J2QkvCdmrXwnZqw8J2Qg+C8kiAg6qeB8J2QgvCdkIPwnZqz6qeC8JOGqiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUHpjdEswREVMcXY0THNHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiMVE0RzlhQVhxcDhLMFBCWjR5MS82VzdNSkN4dHBYK2h0UktlcWYrMjZSYz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiWm44c2JZRUUxVDBaQVhhZ2tKdWdta2NsY2xWbHM5aXJiZnJQUU1BYnNiN1U2bFRCaDJXVExVN1g1YktLMnBVdnd1bWRMQi90MXczTzIrbnhaaTVIQXc9PSIsImRldmljZVNpZ25hdHVyZSI6InpYU0k0NVhCWUZlVC9XeE40QVErVnNUUnMwYUNIdk13TGtsaS9rT21TaWN4elphQlYrWFFuOXRBaEUzT2xJTkV6dk5OeUhHb2NNL3pHVW5YQ0pteUNnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiNTA5NTUxNjkyNzU6M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkVU9CdldnRjZxZkN0RHdXZU10ZitsdXpDUXNiYVYvb2JVU25xbi90dWtYIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM1OTIzNjU1LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU9yaCJ9"
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || "$",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF 𝐉𝚰𝚴𝚮𝐘𝐔𝐊`",
  author: process.env.PACK_AUTHER || "✡️Lord Démon Darkseid😈" 
  packname: process.env.PACK_NAME || "🍂𝐉𝐈𝐍𝐇𝐔𝐘𝐊-𝐌𝐃🍂",
  botname: process.env.BOT_NAME || "𝐉𝚰𝚴𝚮𝐘𝐔𝐊-𝚳𝐃",
  ownername: process.env.OWNER_NAME || "✡️Lord Démon Darkseid😈",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "JINHUYK").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
