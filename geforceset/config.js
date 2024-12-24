/*

 * Base By Anggazyy
 * Jangan hapus credit yaw

 Contact Support:
 📞 Whatsapp : wa.me/6288804148639
 ☎ Telegram : t.me/anggazyydev
 
*/

global.owner = [
  "6285668310873", //ganti nomor owner
  "" //nomor owner kedua kalo ada
]


let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})
