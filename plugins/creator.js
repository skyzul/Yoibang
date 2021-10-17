let handler = function (m) {
  // this.sendContact(m.chat, '6285795431803', 'Andy', m)
  conn.sendContact(m.chat, '6289528232401', 'Zul', m)
  m.reply('wa.me/6289528232401')
}

handler.command = /^owner|creator$/i

module.exports = handler
