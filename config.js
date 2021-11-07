let fs = require('fs')
global.DeveloperMode = 'false' //true Or false
global.owner = ['62857121256952','6289528232401', '6282331033919'] // Put your number here
global.mods = ['6289528232401','62857121256952']  // Want some help?
global.prems = JSON.parse(fs.readFileSync('./src/premium.json')) 
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  zeks: 'https://api.zeks.xyz',
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'faisalkey',
  'https://api.zeks.xyz': 'apivinz',
}

// Sticker WM
global.packname = 'ZUL GEZET'
global.author ='+62857121256952'

global.multiplier = 1000 // The higher, The harder levelup

let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})