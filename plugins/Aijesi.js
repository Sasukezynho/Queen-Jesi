/* Copyright (C) 2022 Sl-Yasia.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Queen-Jesi - Sl-Yasia
*/

var _0x378777=_0x2171;(function(_0x41ce5c,_0x486652){var _0x4b4742=_0x2171,_0x299514=_0x41ce5c();while(!![]){try{var _0x5ce10f=parseInt(_0x4b4742(0x18d))/0x1*(parseInt(_0x4b4742(0x190))/0x2)+parseInt(_0x4b4742(0x1c8))/0x3*(-parseInt(_0x4b4742(0x182))/0x4)+-parseInt(_0x4b4742(0x1b0))/0x5+-parseInt(_0x4b4742(0x1b9))/0x6*(parseInt(_0x4b4742(0x1b7))/0x7)+-parseInt(_0x4b4742(0x1cc))/0x8+parseInt(_0x4b4742(0x1aa))/0x9+-parseInt(_0x4b4742(0x1b4))/0xa*(-parseInt(_0x4b4742(0x19a))/0xb);if(_0x5ce10f===_0x486652)break;else _0x299514['push'](_0x299514['shift']());}catch(_0xb5a13f){_0x299514['push'](_0x299514['shift']());}}}(_0x3c60,0xbc109));const Jesi=require(_0x378777(0x1b5)),ffmpeg=require(_0x378777(0x17f)),fs=require('fs'),https=require(_0x378777(0x1a9)),googleTTS=require(_0x378777(0x1cb)),{MessageType,Mimetype,MessageOptions}=require(_0x378777(0x180)),Language=require(_0x378777(0x1b6)),Lang=Language[_0x378777(0x1a8)](_0x378777(0x17d)),conf=require(_0x378777(0x1be)),Config=require(_0x378777(0x1be)),axios=require(_0x378777(0x18b)),axiosdef=require('axios')[_0x378777(0x1c3)],os=require('os'),translatte=require(_0x378777(0x179)),LanguageDetect=require('languagedetect'),lngDetector=new LanguageDetect(),Heroku=require(_0x378777(0x19f)),heroku=new Heroku({'token':conf['HEROKU'][_0x378777(0x17c)]});function _0x3c60(){var _0x54b998=['reply_message','google-translate-tts','1846768IfADNP','catch','audio','format','mp4Audio','chunked','split','translatte','cnt','QueenJesi\x20Set\x20to\x20Semi-Functional!\x20Please\x20wait...!\x20☑️','API_KEY','voicy','get','fluent-ffmpeg','@adiwajshing/baileys','jid','164QElRqJ','map','readFileSync','APP_NAME','quotedMessage','sendMessage','QueenJesi\x20artificial\x20intelligence\x20is\x20currently\x20running\x20semi-functional.','auto','save','axios','end','4101oDjHgQ','adCmd','client','506WmBDZi','synthesize','Reply\x20to\x20any\x20voice\x20message','&msg=','message','WITAI_API','english','/config-vars','includes','false','39017cDSyVv','downloadAndSaveMediaMessage','user','jesi','replace','heroku-client','AIJESI','detect','.aijesi\x20on\x20/\x20off','data','true','patch','text','QueenJesi\x20Opened\x20Fully\x20Functionally!\x20Please\x20wait...!\x20✅','getString','https','9437382GBKqKV','Jesi','Activates\x20full\x20functional\x20QueenJesi\x20features.\x20Turn\x20your\x20account\x20into\x20a\x20ai\x20chatbot!','aijesi\x20?(.*)','json','LANG','4789230XtEiRg','_text','Start\x20to\x20Jesi\x20voice\x20chat','/apps/','2630xCPqYT','../events','../language','176785nRISyA','wav','42DZeUhT','mention','no-cache','AI_JESI','Bearer\x20','../config','toLowerCase','vtalk$','audio/wav','http://api.brainshop.ai/get?bid=163287&key=vfgiKmi5fASekeVJ&uid=','default','WORKTYPE','QueenJesi\x20artificial\x20intelligence\x20is\x20already\x20fully\x20functional.','output.wav','log','64626zWisTA','then'];_0x3c60=function(){return _0x54b998;};return _0x3c60();}let baseURI=_0x378777(0x1b3)+conf['HEROKU'][_0x378777(0x185)],wk=conf[_0x378777(0x1c4)]=='public'?![]:!![];var vtalk_dsc=_0x378777(0x1b2),reply_yasi=_0x378777(0x192);const recognizeAudio=()=>{var _0x1c9218=_0x378777;const _0x4763ff=new Headers({'Content-Type':_0x1c9218(0x1c1),'Authorization':_0x1c9218(0x1bd)+conf[_0x1c9218(0x195)],'Cache-Control':_0x1c9218(0x1bb),'Transfer-Encoding':_0x1c9218(0x177)}),_0x47369b={'method':'POST','body':fs[_0x1c9218(0x184)](_0x1c9218(0x1c6)),'headers':_0x4763ff};return fetch('https://api.wit.ai/speech?v=20200219',_0x47369b)[_0x1c9218(0x1c9)](_0x41659a=>_0x41659a[_0x1c9218(0x1ae)]())['then'](_0x375340=>_0x375340[_0x1c9218(0x1b1)]);},convertToWav=_0x4ffe15=>{var _0x4845fe=_0x378777;return ffmpeg(_0x4ffe15)['audioCodec']('pcm_s16le')[_0x4845fe(0x175)](_0x4845fe(0x1b8))[_0x4845fe(0x18a)](_0x4845fe(0x1c6));};function _0x2171(_0x4635d8,_0x3060ef){var _0x3c605c=_0x3c60();return _0x2171=function(_0x2171ed,_0x1723a8){_0x2171ed=_0x2171ed-0x173;var _0x120641=_0x3c605c[_0x2171ed];return _0x120641;},_0x2171(_0x4635d8,_0x3060ef);}Config[_0x378777(0x1bc)]==_0x378777(0x1a4)&&(Jesi[_0x378777(0x18e)]({'on':_0x378777(0x1a6),'fromMe':![],'dontAdCommandList':!![],'deleteCommand':![]},async(_0x36a2bd,_0x39986c)=>{var _0xa05197=_0x378777;if(_0x36a2bd[_0xa05197(0x194)]['startsWith'](_0xa05197(0x19d))&&conf[_0xa05197(0x1a0)]!==_0xa05197(0x1a4)){var _0x57b290=_0x36a2bd[_0xa05197(0x18f)]['user'][_0xa05197(0x181)][_0xa05197(0x178)]('@')[0x0],_0x1bfd79=_0x36a2bd[_0xa05197(0x194)][_0xa05197(0x19e)]('',_0xa05197(0x1ab))['replace']('\x20',_0xa05197(0x19d)),_0x8b4f87=lngDetector[_0xa05197(0x1a1)](_0x1bfd79),_0x1dddb5='';_0x8b4f87[0x0][0x0]!=='english'?(ceviri=await translatte(_0x1bfd79,{'from':_0xa05197(0x189),'to':'EN'}),_0xa05197(0x1a6)in ceviri&&(_0x1dddb5=ceviri[_0xa05197(0x1a6)])):_0x1dddb5=_0x1bfd79;var _0x46365c=encodeURI(_0x1dddb5);await axios[_0xa05197(0x17e)](_0xa05197(0x1c2)+_0x57b290+_0xa05197(0x193)+_0x46365c)[_0xa05197(0x1c9)](async _0x217e21=>{var _0x1e8fae=_0xa05197,_0x2c8785='';conf[_0x1e8fae(0x1af)]!=='EN'?(ceviri=await translatte(_0x217e21[_0x1e8fae(0x1a3)][_0x1e8fae(0x17a)],{'from':'auto','to':conf['LANG']}),'text'in ceviri&&(_0x2c8785=ceviri['text'])):_0x2c8785=_0x217e21[_0x1e8fae(0x1a3)][_0x1e8fae(0x17a)],await _0x36a2bd[_0x1e8fae(0x18f)][_0x1e8fae(0x187)](_0x36a2bd[_0x1e8fae(0x181)],_0x2c8785,MessageType['text'],{'quoted':_0x36a2bd[_0x1e8fae(0x1a3)]});});}}),Jesi[_0x378777(0x18e)]({'on':'text','fromMe':![],'deleteCommand':![]},async(_0x1646e6,_0x1f9c53)=>{var _0xe57104=_0x378777;if(conf[_0xe57104(0x1a0)]==_0xe57104(0x1a4)){if(_0x1646e6['jid'][_0xe57104(0x198)]('-')&&(_0x1646e6[_0xe57104(0x1ba)]!==![]&&_0x1646e6[_0xe57104(0x1ba)]['length']!==0x0))_0x1646e6['mention'][_0xe57104(0x183)](async _0x352aaf=>{var _0x594935=_0xe57104;if(_0x1646e6[_0x594935(0x18f)]['user'][_0x594935(0x181)][_0x594935(0x178)]('@')[0x0]===_0x352aaf[_0x594935(0x178)]('@')[0x0]){var _0x2e3a0e=_0x1646e6['client'][_0x594935(0x19c)][_0x594935(0x181)]['split']('@')[0x0],_0x4fbd7a=_0x1646e6[_0x594935(0x194)],_0x3f508f=lngDetector[_0x594935(0x1a1)](_0x4fbd7a),_0x3f777b='';_0x3f508f[0x0][0x0]!==_0x594935(0x196)?(ceviri=await translatte(_0x4fbd7a,{'from':_0x594935(0x189),'to':'EN'}),'text'in ceviri&&(_0x3f777b=ceviri[_0x594935(0x1a6)])):_0x3f777b=_0x4fbd7a;var _0x3176d3=encodeURI(_0x3f777b);await axios[_0x594935(0x17e)](_0x594935(0x1c2)+_0x2e3a0e+_0x594935(0x193)+_0x3176d3)[_0x594935(0x1c9)](async _0x1efa09=>{var _0x9d6eff=_0x594935,_0x13d4e9='';conf['LANG']!=='EN'?(ceviri=await translatte(_0x1efa09[_0x9d6eff(0x1a3)]['cnt'],{'from':'auto','to':conf[_0x9d6eff(0x1af)]}),_0x9d6eff(0x1a6)in ceviri&&(_0x13d4e9=ceviri[_0x9d6eff(0x1a6)])):_0x13d4e9=_0x1efa09[_0x9d6eff(0x1a3)][_0x9d6eff(0x17a)],await _0x1646e6[_0x9d6eff(0x18f)][_0x9d6eff(0x187)](_0x1646e6[_0x9d6eff(0x181)],_0x13d4e9,MessageType[_0x9d6eff(0x1a6)],{'quoted':_0x1646e6['data']});});}});else{if(_0x1646e6[_0xe57104(0x181)][_0xe57104(0x198)]('-')&&_0x1646e6[_0xe57104(0x1ca)]!==!![]){if(_0x1646e6[_0xe57104(0x1ca)][_0xe57104(0x181)][_0xe57104(0x178)]('@')[0x0]===_0x1646e6[_0xe57104(0x18f)][_0xe57104(0x19c)][_0xe57104(0x181)][_0xe57104(0x178)]('@')[0x0]){var _0x2bcb8a=_0x1646e6[_0xe57104(0x18f)][_0xe57104(0x19c)]['jid'][_0xe57104(0x178)]('@')[0x0],_0x339399=_0x1646e6['message'],_0xce9aa0=lngDetector[_0xe57104(0x1a1)](_0x339399),_0x4f06b0='';_0xce9aa0[0x0][0x0]!=='english'?(ceviri=await translatte(_0x339399,{'from':_0xe57104(0x189),'to':'EN'}),'text'in ceviri&&(_0x4f06b0=ceviri[_0xe57104(0x1a6)])):_0x4f06b0=_0x339399;var _0x4bfad=encodeURI(_0x4f06b0);await axios[_0xe57104(0x17e)](_0xe57104(0x1c2)+_0x2bcb8a+_0xe57104(0x193)+_0x4bfad)['then'](async _0x424b75=>{var _0x5a9231=_0xe57104,_0x2495aa='';conf[_0x5a9231(0x1af)]!=='EN'?(ceviri=await translatte(_0x424b75['data']['cnt'],{'from':_0x5a9231(0x189),'to':conf[_0x5a9231(0x1af)]}),'text'in ceviri&&(_0x2495aa=ceviri['text'])):_0x2495aa=_0x424b75[_0x5a9231(0x1a3)][_0x5a9231(0x17a)],await _0x1646e6[_0x5a9231(0x18f)]['sendMessage'](_0x1646e6[_0x5a9231(0x181)],_0x2495aa,MessageType[_0x5a9231(0x1a6)],{'quoted':_0x1646e6[_0x5a9231(0x1a3)]});});}}else{var _0x2bcb8a=_0x1646e6[_0xe57104(0x18f)]['user']['jid'][_0xe57104(0x178)]('@')[0x0],_0x339399=_0x1646e6[_0xe57104(0x194)],_0xce9aa0=lngDetector[_0xe57104(0x1a1)](_0x339399),_0x4f06b0='';_0xce9aa0[0x0][0x0]!==_0xe57104(0x196)?(ceviri=await translatte(_0x339399,{'from':_0xe57104(0x189),'to':'EN'}),_0xe57104(0x1a6)in ceviri&&(_0x4f06b0=ceviri[_0xe57104(0x1a6)])):_0x4f06b0=_0x339399;var _0x4bfad=encodeURI(_0x4f06b0);await axios['get'](_0xe57104(0x1c2)+_0x2bcb8a+_0xe57104(0x193)+_0x4bfad)[_0xe57104(0x1c9)](async _0x54237c=>{var _0x177bc5=_0xe57104,_0x2f3c1d='';conf['LANG']!=='EN'?(ceviri=await translatte(_0x54237c[_0x177bc5(0x1a3)][_0x177bc5(0x17a)],{'from':_0x177bc5(0x189),'to':conf['LANG']}),_0x177bc5(0x1a6)in ceviri&&(_0x2f3c1d=ceviri[_0x177bc5(0x1a6)])):_0x2f3c1d=_0x54237c[_0x177bc5(0x1a3)][_0x177bc5(0x17a)],await _0x1646e6[_0x177bc5(0x18f)][_0x177bc5(0x187)](_0x1646e6[_0x177bc5(0x181)],_0x2f3c1d,MessageType[_0x177bc5(0x1a6)],{'quoted':_0x1646e6['data']});});}}}}));Jesi[_0x378777(0x18e)]({'pattern':_0x378777(0x1c0),'desc':vtalk_dsc,'dontAddCommandList':!![],'fromMe':wk},async(_0x2f67a8,_0x295b3b)=>{var _0x4a31f5=_0x378777;if(!_0x2f67a8[_0x4a31f5(0x1ca)])return await _0x2f67a8[_0x4a31f5(0x18f)][_0x4a31f5(0x187)](_0x2f67a8['jid'],reply_yasi,MessageType[_0x4a31f5(0x1a6)],{'quoted':_0x2f67a8['data']});try{const _0x3ef35a=await _0x2f67a8[_0x4a31f5(0x18f)][_0x4a31f5(0x19b)]({'key':{'remoteJid':_0x2f67a8[_0x4a31f5(0x1ca)][_0x4a31f5(0x181)],'id':_0x2f67a8[_0x4a31f5(0x1ca)]['id']},'message':_0x2f67a8['reply_message'][_0x4a31f5(0x1a3)][_0x4a31f5(0x186)]});convertToWav(_0x3ef35a)['on'](_0x4a31f5(0x18c),async()=>{var _0x21593f=_0x4a31f5;const _0x3b4d71=await recognizeAudio();var _0x176772='';ceviri=await translatte(_0x3b4d71,{'from':_0x21593f(0x189),'to':'EN'});_0x21593f(0x1a6)in ceviri&&(_0x176772=ceviri[_0x21593f(0x1a6)]);var _0x33baa3=_0x2f67a8[_0x21593f(0x18f)][_0x21593f(0x19c)][_0x21593f(0x181)][_0x21593f(0x178)]('@')[0x0],_0x16380b=encodeURI(_0x176772);await axios[_0x21593f(0x17e)](_0x21593f(0x1c2)+_0x33baa3+_0x21593f(0x193)+_0x16380b)[_0x21593f(0x1c9)](async _0x4927d2=>{var _0x2ca80f=_0x21593f,_0x918094='';cevir=await translatte(_0x4927d2[_0x2ca80f(0x1a3)][_0x2ca80f(0x17a)],{'from':'auto','to':conf[_0x2ca80f(0x1af)]});_0x2ca80f(0x1a6)in cevir&&(_0x918094=cevir['text']);let _0x2a3355=conf[_0x2ca80f(0x1af)][_0x2ca80f(0x1bf)](),_0x2aa605=_0x918094,_0x47f583=0x1;var _0xf12f5e=await googleTTS[_0x2ca80f(0x191)]({'text':_0x2aa605,'voice':_0x2a3355});await _0x2f67a8[_0x2ca80f(0x18f)][_0x2ca80f(0x187)](_0x2f67a8[_0x2ca80f(0x181)],_0xf12f5e,MessageType[_0x2ca80f(0x174)],{'mimetype':Mimetype[_0x2ca80f(0x176)],'ptt':!![],'quoted':_0x2f67a8[_0x2ca80f(0x1a3)]});})[_0x21593f(0x173)](async _0xe78ee8=>{var _0x4426ad=_0x21593f;console[_0x4426ad(0x1c7)](_0xe78ee8);});});}catch(_0x13c456){console['log'](_0x13c456);}});var fulleva_dsc='',already_on='',already_off='',succ_on='',succ_off='';conf['LANG']=='EN'&&(fulleva_dsc=_0x378777(0x1ac),already_on=_0x378777(0x1c5),already_off=_0x378777(0x188),succ_on=_0x378777(0x1a7),succ_off=_0x378777(0x17b));Jesi[_0x378777(0x18e)]({'pattern':_0x378777(0x1ad),'desc':fulleva_dsc,'fromMe':!![],'dontAddCommandList':!![],'usage':_0x378777(0x1a2)},async(_0x2e1c79,_0x296d7b)=>{var _0x401aff=_0x378777,_0x1f6f43=''+conf[_0x401aff(0x1bc)];if(_0x296d7b[0x1]=='on'){if(_0x1f6f43==_0x401aff(0x1a4))return await _0x2e1c79[_0x401aff(0x18f)][_0x401aff(0x187)](_0x2e1c79[_0x401aff(0x181)],'*'+already_on+'*',MessageType['text']);else await heroku[_0x401aff(0x1a5)](baseURI+_0x401aff(0x197),{'body':{[_0x401aff(0x1bc)]:_0x401aff(0x1a4)}}),await _0x2e1c79[_0x401aff(0x18f)][_0x401aff(0x187)](_0x2e1c79[_0x401aff(0x181)],'*'+succ_on+'*',MessageType[_0x401aff(0x1a6)]);}else{if(_0x296d7b[0x1]=='off'){if(_0x1f6f43!==_0x401aff(0x1a4))return await _0x2e1c79[_0x401aff(0x18f)][_0x401aff(0x187)](_0x2e1c79[_0x401aff(0x181)],'*'+already_off+'*',MessageType[_0x401aff(0x1a6)]);else await heroku[_0x401aff(0x1a5)](baseURI+_0x401aff(0x197),{'body':{[_0x401aff(0x1bc)]:_0x401aff(0x199)}}),await _0x2e1c79['client']['sendMessage'](_0x2e1c79[_0x401aff(0x181)],'*'+succ_off+'*',MessageType[_0x401aff(0x1a6)]);}}});
