/* Copyright (C) 2021 Sl-Yasia.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Queen-Jesi - Sl-Yasia
*/

var _0x6c47=["\x2E\x2E\x2F\x65\x76\x65\x6E\x74\x73","\x40\x61\x64\x69\x77\x61\x6A\x73\x68\x69\x6E\x67\x2F\x62\x61\x69\x6C\x65\x79\x73","\x61\x78\x69\x6F\x73","\x2E\x2E\x2F\x68\x65\x6C\x70\x65\x72\x73","\x2E\x2E\x2F\x63\x6F\x6E\x66\x69\x67","\x60\x60\x60\x55\x70\x6C\x6F\x64\x69\x6E\x67\x20\x59\x6F\x75\x72\x20\x56\x69\x64\x65\x6F\u2026\x60\x60\x60","\x60\x60\x60\x44\x6F\x77\x6E\x6C\x6F\x61\x64\x69\x6E\x67\x20\x59\x6F\x75\x72\x20\x56\x69\x64\x65\x6F\u2026\x60\x60\x60","\x60\x60\x60\x4E\x65\x65\x64\x20\x54\x69\x6B\x74\x6F\x6B\x20\x56\x69\x64\x65\x6F\x20\x4C\x69\x6E\x6B\x20\uD83D\uDC7B\x60\x60\x60","\x54\x69\x6B\x74\x6F\x6B\x20\x76\x69\x64\x65\x6F\x20\x64\x6F\x77\x6E\x6C\x6F\x61\x64\x20\x77\x69\x74\x68\x6F\x75\x74\x20\x77\x61\x74\x65\x72\x6D\x61\x72\x6B","\x60\x60\x60\x50\x6C\x65\x61\x73\x65\x20\x45\x6E\x74\x65\x72\x20\x56\x61\x6C\x69\x64\x20\x56\x69\x64\x65\x6F\x20\x4C\x69\x6E\x6B\x20\uD83D\uDC9D\x60\x60\x60","\x57\x4F\x52\x4B\x54\x59\x50\x45","\x70\x75\x62\x6C\x69\x63","\x74\x69\x6B\x74\x6F\x6B\x20\x3F\x28\x2E\x2A\x29","\x6A\x69\x64","\x74\x65\x78\x74","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65","\x63\x6C\x69\x65\x6E\x74","\x64\x61\x74\x61","\x63\x61\x74\x63\x68","\x72\x65\x73\x75\x6C\x74","\x61\x72\x72\x61\x79\x62\x75\x66\x66\x65\x72","\x67\x65\x74","\x66\x72\x6F\x6D","\x76\x69\x64\x65\x6F","\x6D\x70\x34","\x43\x50\x4B","\x74\x68\x65\x6E","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x7A\x65\x6E\x7A\x61\x70\x69\x2E\x78\x79\x7A\x2F\x61\x70\x69\x2F\x64\x6F\x77\x6E\x6C\x6F\x61\x64\x65\x72\x2F\x74\x69\x6B\x74\x6F\x6B\x3F\x75\x72\x6C\x3D","\x26\x61\x70\x69\x6B\x65\x79\x3D\x35\x33\x30\x65\x65\x62\x31\x36\x65\x39","\x61\x64\x43\x6D\x64"];const Jesi=require(_0x6c47[0]);const {MessageType,MessageOptions,Mimetype}=require(_0x6c47[1]);const axios=require(_0x6c47[2]);const {errorMessage,infoMessage}=require(_0x6c47[3]);const Config=require(_0x6c47[4]);const UP=_0x6c47[5];const DW=_0x6c47[6];const ND=_0x6c47[7];const LN=_0x6c47[8];const NO=_0x6c47[9];let NW=Config[_0x6c47[10]]== _0x6c47[11]?false:true;Jesi[_0x6c47[29]]({pattern:_0x6c47[12],fromMe:NW,desc:LN},async (_0xe723xa,_0xe723xb)=>{const _0xe723xc=_0xe723xb[1];if(!_0xe723xc){return  await _0xe723xa[_0x6c47[16]][_0x6c47[15]](_0xe723xa[_0x6c47[13]],ND,MessageType[_0x6c47[14]])}; await _0xe723xa[_0x6c47[16]][_0x6c47[15]](_0xe723xa[_0x6c47[13]],DW,MessageType[_0x6c47[14]]); await axios[_0x6c47[21]](`${_0x6c47[27]}${_0xe723xc}${_0x6c47[28]}`)[_0x6c47[26]](async (_0xe723xe)=>{const {nowatermark}=_0xe723xe[_0x6c47[17]][_0x6c47[19]];const _0xe723xf= await axios[_0x6c47[21]](nowatermark,{responseType:_0x6c47[20]}); await _0xe723xa[_0x6c47[16]][_0x6c47[15]](_0xe723xa[_0x6c47[13]],UP,MessageType[_0x6c47[14]]); await _0xe723xa[_0x6c47[16]][_0x6c47[15]](_0xe723xa[_0x6c47[13]],Buffer[_0x6c47[22]](_0xe723xf[_0x6c47[17]]),MessageType[_0x6c47[23]],{mimetype:Mimetype[_0x6c47[24]],caption:Config[_0x6c47[25]]})})[_0x6c47[18]](async (_0xe723xd)=>{return  await _0xe723xa[_0x6c47[16]][_0x6c47[15]](_0xe723xa[_0x6c47[13]],NO,MessageType[_0x6c47[14]],{quoted:_0xe723xa[_0x6c47[17]]})})})
