const _0x961c7a=_0x1fd9;
function _0x1baf(){
  const _0x51e937=['admin','mentionedJid','\x0a*▢\x20Membres\x20:*\x0a\x20\x20\x20•\x20','Fait\x20wa\x20me\x20pour\x20l\'utilisateur\x20cité\x20ou\x20mentionné.','Fait\x20wa\x20me\x20pour\x20l\'utilisateur.','find','length','<répondez\x20à\x20n\'importe\x20qui>','sendMessage','join','\x20\x20*---La\x20photo\x20de\x20profil\x20est\x20ici---*\x0a','\x0a║\x20\x20\x20\x20*Restez\x20calme\x20mec🥳*\x20\x20\x20\x20◇\x0a╚════════════════╝\x0a','wa-sticker-formatter','error','admins','2236794JlefYP','getName','split','undefined','\x0a║\x20*👤Numéro\x20:*\x20','bot','map','participants','reply_message','catch','getpp','153972FOKLrE','3561gOaTHz','node-fetch','user','62690hiaLNF','sender','\x0a\x0acommande\x20:\x20whois','.\x20wa.me/','metadata','slice','../lib','caption','```Photo\x20de\x20profil\x20non\x20récupérée```','184558sbsvzX','status','24FgzsmZ','3pXLWOo','6manbCM','8Jcjjtn','toString','1308JIQKUE','\x0a*▢\x20Admins\x20:*\x0a','profilePictureUrl','get\x20jid\x20of\x20all\x20user\x20in\x20a\x20group.','wa.me/','*_Veuillez\x20répondre\x20à\x20une\x20personne!_*','desc','\x0a║\x20*🎐Bio\x20\x20\x20\x20:*\x20\x20','superadmin','image','\x0a\x0acommande\x20:\x20wa','\x0a\x20\x20\x20','1384030BNFdfp','2109094EYOCLe','\x0a*▢\x20Propriétaire\x20du\x20groupe\x20:*\x0a\x20\x20\x20•\x20','subject','_non\x20défini_','fetchStatus','whois','\x0a\x0acommande\x20:\x20getpp','671PZRJgp','reply','Fait\x20une\x20photo\x20du\x20sticker\x20répondu.','chat','isGroup','https://wa.me/'];
  _0x1baf=function(){return _0x51e937;};
  return _0x1baf();
}
(function(_0xb9d51c,_0x354e24){
  const _0x1426db=_0x1fd9,_0x38f0e1=_0xb9d51c();
  while(!![]){
    try{
      const _0x321d49=-parseInt(_0x1426db(0x19a))/0x1*(parseInt(_0x1426db(0x197))/0x2)+parseInt(_0x1426db(0x18b))/0x3*(parseInt(_0x1426db(0x19e))/0x4)+parseInt(_0x1426db(0x162))/0x5*(-parseInt(_0x1426db(0x19b))/0x6)+-parseInt(_0x1426db(0x17f))/0x7+-parseInt(_0x1426db(0x19c))/0x8*(parseInt(_0x1426db(0x18a))/0x9)+parseInt(_0x1426db(0x18e))/0xa*(parseInt(_0x1426db(0x16a))/0xb)+parseInt(_0x1426db(0x199))/0xc*(parseInt(_0x1426db(0x163))/0xd);
      if(_0x321d49===_0x354e24)break;
      else _0x38f0e1['push'](_0x38f0e1['shift']());
    }catch(_0x3d3c85){
      _0x38f0e1['push'](_0x38f0e1['shift']());
    }
  }
}(_0x1baf,0x31fc5));

function _0x1fd9(_0xafcd42,_0x5b3970){
  const _0x1bafde=_0x1baf();
  return _0x1fd9=function(_0x1fd9d6,_0x517a4e){
    _0x1fd9d6=_0x1fd9d6-0x158;
    let _0x273b3b=_0x1bafde[_0x1fd9d6];
    return _0x273b3b;
  },
  _0x1fd9(_0xafcd42,_0x5b3970);
}

const {tlang,getAdmin,prefix,Config,sck,sck1,fetchJson,getBuffer,runtime,smd}=require(_0x961c7a(0x194)),
{Sticker,createSticker,StickerTypes}=require(_0x961c7a(0x17c)),
fs=require('fs'),
axios=require('axios'),
fetch=require(_0x961c7a(0x18c)),
cmd=smd;

cmd({'pattern':'jid','desc':_0x961c7a(0x159),'category':_0x961c7a(0x18d),'filename':__filename,'use':'<@utilisateur>'},async({jid:_0x317d9b,reply:_0x355aae,quoted:_0x5256f4})=>{
  if(_0x5256f4) return _0x355aae(_0x5256f4['sender']);
  else return _0x355aae(_0x317d9b);
}),

cmd({'pattern':_0x961c7a(0x189),'desc':'Obtenez\x20la\x20photo\x20de\x20profil\x20pour\x20l\'utilisateur\x20donné','category':_0x961c7a(0x18d),'filename':__filename},async _0x24b8a0=>{
  const _0x5dd487=_0x961c7a;
  try{
    let _0x4cd072=_0x24b8a0['reply_message']?_0x24b8a0[_0x5dd487(0x187)][_0x5dd487(0x18f)]:
    _0x24b8a0['mentionedJid'][0x0]?_0x24b8a0['mentionedJid'][0x0]:_0x24b8a0['from'],
    _0x23f248;
    try{
      _0x23f248=await _0x24b8a0['bot'][_0x5dd487(0x158)](_0x4cd072,_0x5dd487(0x15f));
    }catch(_0x42ab42){
      return _0x24b8a0[_0x5dd487(0x16b)](_0x5dd487(0x196));
    }
    return await _0x24b8a0[_0x5dd487(0x184)][_0x5dd487(0x178)](_0x24b8a0[_0x5dd487(0x16d)],{'image':{'url':_0x23f248},'caption':_0x5dd487(0x17a)+Config[_0x5dd487(0x195)]},{'quoted':_0x24b8a0});
  }catch(_0x40b881){
    await _0x24b8a0['error'](_0x40b881+_0x5dd487(0x169),_0x40b881);
  }
}),
