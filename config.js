const chalk = require("chalk")
const fs = require("fs")

global.ownerNumber = ["6282213939203@s.whatsapp.net"]
global.nomerOwner = "6282213939203"
global.nomorOwner = ['6282213939203']
global.nameGEDE = "RAGIB"
global.namaDeveloper = "Ragibjebe"
global.namaBot = "RagibBotz WhatsApp"
global.packname = ""
global.author = "Sticker By RagibBotz"
global.thumb = fs.readFileSync("./thumb.png")

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})

/*

Thanks To By RagibBotz
Base Ori By RagibBotz
Ubah Nomor Owner?
Ganti Di File ./owner.json
Harap Jangan Jual Sc Ini
Karena Sc Ini adalah punya Ragib Jebe 
*/