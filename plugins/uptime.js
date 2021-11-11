let fs = require ('fs')
let handler  = async (m, { conn, usedPrefix: _p }) => {
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
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    
conn.send2Button(m.chat, `Saya berjalan selama ${uptime}`, '© zullsaha', 'All menu', '.bwha', 'Owner', '.owner', { quoted: fvn })
}    
handler.command = /^(uptime)$/i
handler.help = ['uptime']
handler.tags = ['info']

module.exports = handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
