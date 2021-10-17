let handler = function (m) {
  // this.sendContact(m.chat, '6281515860089', 'Nurutomo', m)
  conn.sendContact(m.chat, '6289528232401', 'Zul Yahaha', m)
  m.reply('wa.me/6289528232401')
}

handler.command = /^pj1$/i

module.exports = handler