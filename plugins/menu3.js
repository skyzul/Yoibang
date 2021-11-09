let { MessageType, mentionedJid } = require('@adiwajshing/baileys')
let fetch = require('node-fetch')
let path = require('path')
let fs = require ('fs')
let moment = require ('moment-timezone')
let handler = async (m, { conn, usedPrefix }) => {
let name = m.fromMe ? conn.user : conn.contacts[m.sender]
let { limit, exp, money, lastclaim, registered, regTime, role, age, level } = global.DATABASE.data.users[m.sender]
const wib = moment.tz('Asia/Jakarta').format("HH:mm:ss")
const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
//let oy = `@${tag.replace(/@.+/, '')}`
//let own = `@${owner[0]}`
const fvn = {
    key: { 
         fromMe: false,
         participant: `0@s.whatsapp.net`, ...(m.chat ? 
    { remoteJid: "6285795431803-1615555379@g.us" } : {}) 
               },
    message: { 
       "audioMessage": {
                "mimetype":"audio/ogg; codecs=opus",
                "seconds": "1",
                "ptt": "true"
                       }
                     } 
                    }
/*let text = `
\`\`\`Hi, ${ucapan()} ${ucapin()} @${tag.replace(/@.+/, '')} ✨\`\`\`

\`\`\`NOTE - BOT TIDAK AKAN MERESPON DI DALAM GRUP JIKA PESAN SEMENTARA TIDAK DIMATIKAN.\`\`\`
`.trim()*/

let content = fs.readFileSync('./src/logo.jpg') // change for file type
const media = await conn.prepareMessage(m.chat, content, MessageType.image, { thumbnail: Buffer.alloc(0) })// change for file type

const buttons = [
  {buttonId: `${usedPrefix}` + 'bwha', buttonText: {displayText: 'Menu️'}, type: 1},
  {buttonId: `${usedPrefix}` + 'jsb', buttonText: {displayText: 'List sewa bot bang'}, type: 1}/*,
   {buttonId: '/wip', buttonText: {displayText: 'info'}, type: 1}*/
]
const buttonMessage = {
    contentText: `\`\`\`Hamlo ${name.vnmae || name.notify || name.name || ('+' + name.jid.split`@`[0])}, ${ucapan()} ${ucapin()}\`\`\`

\`\`\`NB : Spam, Telpon : Blok!!!\`\`\``,
    footerText: `Jam ${wib} WIB || © Zul Ganzy`,
    buttons: buttons,
    headerType: 4, // change for file type
    imageMessage: media.message.imageMessage // change for file type
}

const andy = await conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage, { sendEphemeral: true, quoted: fvn, contextInfo: { forwardingScore: 899,
                isForwarded: true ,"externalAdReply": {
          "title": `${pickRandom(['Wamduh','Yoi bang','awikwok','Kemren'])}`,
          "body": `${pickRandom(['Hemhe','Watermak Zul','Awikwok','Yoi bang','Hamdeh'])}`,
          "mediaType": "1",
          "thumbnailUrl": `${pickRandom(['https://telegra.ph/file/6055740746c9067cd7ef9.jpg','https://telegra.ph/file/2624fbad04a89e4809417.jpg','https://telegra.ph/file/7980abf4219996710f1e4.jpg','https://telegra.ph/file/1a7d087032eea6abd0cd5.jpg'])}`,
          "mediaUrl": `${pickRandom(['https://instagram.com/zullsaha','https://instagram.com/zulbot_official','https://github.com/andyjavadams','https://wa.me/6289528232401?text=Save+nomor+saya+bang'])}`,
     //     "thumbnail": "https://i.ibb.co/ysTv8wY/Screenshot-20210808-112316.png",
         "sourceUrl": `${pickRandom(['https://instagram.com/zullsaha','https://instagram.com/zulbot_official','https://github.com/ZulGanzy','https://wa.me/6289528232401?text=Save+nomor+saya+bang'])}`,
           }}})
        setTimeout(() => {
        conn.deleteMessage(m.chat, andy.key)
      }, 100000)
}
handler.command = /^(menu|help)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    res = "Selamat dini hari"
    if (time >= 4) {
        res = "Pagi bang"
    }
    if (time > 10) {
        res = "Siang bang"
    }
    if (time >= 15) {
        res = "Sore bang"
    }
    if (time >= 18) {
        res = "Malam bang"
    }
    return res
}
function ucapin() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    res = "🌃"
    if (time >= 4) {
        res = "🌄"
    }
    if (time > 10) {
        res = "☀️"
    }
    if (time >= 15) {
        res = "🌆"
    }
    if (time >= 18) {
        res = "🌉"
    }
    return res
}
function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
