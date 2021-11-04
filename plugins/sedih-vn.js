//tadinya iseng, eb malah work
let fs = require("fs")
let handler  = async (m, { conn, usedPrefix: _p }) => {
const { MessageType,Presence } = require('@adiwajshing/baileys')
const f = {
	 key:
	 { fromMe: false,
	 participant: `0@s.whatsapp.net`, ...(m.chat ? 
	 { remoteJid: "status@broadcast" } : {}) },
	 message: { "locationMessage": { "title":"jakarta","h": `hemlo`, 'jpegThumbnail': fs.readFileSync('./src/ceue.jpg')}}
	}

conn.updatePresence(m.chat, Presence.recording)
conn.sendFile(m.chat, 'src/sad.opus', 'tts.opus', null, f, true)
}
handler.customPrefix = /^(sedih|Sedih|semdih|Semdih|😭|😢|😔|😓)/i
handler.command = new RegExp
module.exports = handler
