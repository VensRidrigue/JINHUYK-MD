const { smd } = require("../lib");
const { exec } = require("child_process");
const fs = require("fs");

async function editeurAudio(context, effet = "bass", description = "") {
  if (!context.quoted) {
    return await context.send("*_Répondez à un fichier audio pour appliquer un effet !_*");
  }

  let typeMedia = context.quoted.mtype || context.mtype;
  if (!/audio/.test(typeMedia)) {
    return await context.send("*_Répondez à un fichier audio pour appliquer un effet !_*", {}, "", description);
  }

  try {
    let filtreFFmpeg = "-af equalizer=f=54:width_type=o:width=2:g=20";

    switch (effet) {
      case "bass":
        filtreFFmpeg = "-af equalizer=f=54:width_type=o:width=2:g=20";
        break;
      case "blown":
        filtreFFmpeg = "-af acrusher=.1:1:64:0:log";
        break;
      case "deep":
        filtreFFmpeg = "-af atempo=4/4,asetrate=44500*2/3";
        break;
      case "earrape":
        filtreFFmpeg = "-af volume=12";
        break;
      case "fast":
        filtreFFmpeg = '-filter:a "atempo=1.63,asetrate=44100"';
        break;
      case "fat":
        filtreFFmpeg = '-filter:a "atempo=1.6,asetrate=22100"';
        break;
      case "nightcore":
        filtreFFmpeg = "-filter:a atempo=1.06,asetrate=44100*1.25";
        break;
      case "reverse":
        filtreFFmpeg = '-filter_complex "areverse"';
        break;
      case "robot":
        filtreFFmpeg = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"';
        break;
      case "slow":
        filtreFFmpeg = '-filter:a "atempo=0.7,asetrate=44100"';
        break;
      case "smooth":
        filtreFFmpeg = "-filter:v \"minterpolate='mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120'\"";
        break;
      case "tupai":
        filtreFFmpeg = '-filter:a "atempo=0.5,asetrate=65100"';
        break;
    }

    let fichierOriginal = await context.bot.downloadAndSaveMediaMessage(context.quoted);
    let fichierSortie = "temp/" + (context.sender.slice(6) + effet) + ".mp3";

    exec(
      `ffmpeg -i ${fichierOriginal} ${filtreFFmpeg} ${fichierSortie}`,
      async (erreur, _, __) => {
        try {
          fs.unlinkSync(fichierOriginal);
        } catch {}
        if (erreur) {
          return context.error(erreur);
        } else {
          let audioModifié = fs.readFileSync(fichierSortie);
          try {
            fs.unlinkSync(fichierSortie);
          } catch {}
          return context.bot.sendMessage(
            context.chat,
            {
              audio: audioModifié,
              mimetype: "audio/mpeg",
              ptt: /ptt|voice/.test(context.test || "") ? true : false,
            },
            { quoted: context }
          );
        }
      }
    );
  } catch (erreur) {
    await context.error(`Erreur : ${erreur}\n\nCommand : ${effet}`);
    console.log("Erreur dans ./lib/asta.js -> editeurAudio()\n", erreur);
  }
}

// Commandes pour chaque effet
const effetsAudio = [
  { cmdname: "bass", info: "Ajoute un effet bass à l'audio" },
  { cmdname: "blown", info: "Ajoute un effet blown à l'audio" },
  { cmdname: "deep", info: "Ajoute un effet deep à l'audio" },
  { cmdname: "earrape", info: "Ajoute un effet earrape à l'audio" },
  { cmdname: "fast", info: "Ajoute un effet fast à l'audio" },
  { cmdname: "fat", info: "Ajoute un effet fat à l'audio" },
  { cmdname: "nightcore", info: "Ajoute un effet nightcore à l'audio" },
  { cmdname: "reverse", info: "Inverse l'audio" },
  { cmdname: "robot", info: "Ajoute un effet robot à l'audio" },
  { cmdname: "slow", info: "Ralentit l'audio" },
  { cmdname: "smooth", info: "Ajoute un effet smooth à l'audio" },
  { cmdname: "tupai", info: "Ajoute un effet tupai à l'audio" },
];

effetsAudio.forEach(({ cmdname, info }) => {
  smd(
    {
      cmdname,
      info,
      type: "audio",
      use: "<répondez à un audio>",
    },
    async (context, _, { smd: effet }) => {
      try {
        await editeurAudio(context, effet, context);
      } catch (erreur) {
        await context.error(`Erreur : ${erreur}\n\nCommand : ${effet}`);
      }
    }
  );
});
