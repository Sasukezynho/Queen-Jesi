/* Copyright (C) 2021 Sl-Yasia.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Queen-Jesi - Sl-Yasia
*/

const Jesi = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');
const QueenJesiStack = require('queenjesi-npm');
const Language = require('../language');
const Lang = Language.getString('log');
let wk = Config.WORKTYPE == 'public' ? false : true

Jesi.adCmd({pattern: 'carbon$', fromMe: wk, desc: Lang.CARBON_DESC}, (async (message, match) => {
    if (!message.reply_message) return await message.client.sendMessage(message.jid,Lang.REPLY, MessageType.text);
    var theme_c = await QueenJesiStack.ctheme()
    var lang_c = await QueenJesiStack.clang()
    var rgb_c = await QueenJesiStack.crgb()
    var text = message.reply_message.text
    var fin = text.replace(/(?:\r\n|\r|\n)/g, '%250A')
    var pay = encodeURIComponent(fin)       
    var respoimage = await axios.get('https://thiccyscarbonapi.herokuapp.com/?code=' + pay + '&theme=' + theme_c + '&exportSize=3x&paddingVertical=200px&paddingHorizontal=200px&backgroundColor=rgba(' + rgb_c + ')&language=' + lang_c, { responseType: 'arraybuffer' })
    await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, { mimetype: Mimetype.png, caption: Config.CPK})
}));

