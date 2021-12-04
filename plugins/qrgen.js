/* Copyright (C) 2021 Sl-Yasia.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Queen-Jesi - Sl-Yasia
*/

const Jesi = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const request = require('request');
const got = require("got");

const Language = require('../language');
const Lang = Language.getString('qrgenerator');

if (Config.WORKTYPE == 'private') {

Jesi.adCmd({pattern: 'qr ?(.*)', fromMe: true, desc: Lang.QR_DESC}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(Lang.TEXT);

    var webimage = await axios.get(`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${match[1].replace(/#/g, '\n')} `, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CPK,quoted: message.data})
}));
}
if (Config.WORKTYPE == 'public') {

Jesi.adCmd({pattern: 'qr ?(.*)', fromMe: false, desc: Lang.QR_DESC}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(Lang.TEXT);

    var webimage = await axios.get(`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${match[1].replace(/#/g, '\n')} `, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CPK,quoted: message.data})
}));
}