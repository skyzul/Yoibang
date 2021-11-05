let { MessageType, mentionedJid } = require('@adiwajshing/baileys')
let fs = require ('fs')
let moment = require ('moment-timezone')
let handler = async (m, { conn, usedPrefix }) => {
let name = m.fromMe ? conn.user : conn.contacts[m.sender]  
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
const wib = moment.tz('Asia/Jakarta').format("HH:mm:ss")
const fgif = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(m.chat ? 
	 { remoteJid: "6285795431803-1625305606@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title":"Anjay",
                 "h": `Hahaha`,
                 'seconds': '12345', 
                 'gifPlayback': 'true', 
                 'caption': `${pickRandom(['Semdih','Hamdeh','Awikwok','Kemren bang','Wuis','Wamduh'])}`,
                 'jpegThumbnail': fs.readFileSync(`./cewe/${pickRandom(['1','2','3','4','5','6','7','8'])}.jpg`)
                        }
                       }
	                  } 
let { limit, exp, money, lastclaim, registered, regTime, role, age, level } = global.DATABASE.data.users[m.sender]
let text = `
*❒* \`\`\`Hi, ${ucapan()} ${ucapin()}\`\`\`
*❒* \`\`\`@${m.sender.replace(/@.+/, '')} ✨\`\`\`

`/`/`/NB : Spam/Telpon : blok!!!`/`/`/
`.trim()

 await conn.send2ButtonImg(m.chat, text.trim(), "./src/logo.jpg", "Jam : ${wib} WIB/n/n© zullsaha", 'Menu', '.bwha', 'Saya mau chat owner', '.owner', { quoted: fgif, sendEphemeral: true, contextInfo: { mentionedJid: conn.parseMention(text), forwardingScore: 135, isForwarded: true }})
  
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
        res = "Selamat pagi"
    }
    if (time > 10) {
        res = "Selamat siang"
    }
    if (time >= 15) {
        res = "Selamat sore"
    }
    if (time >= 18) {
        res = "Selamat malam"
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
