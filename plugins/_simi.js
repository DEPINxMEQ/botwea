let fetch = require('node-fetch')
let handler = m => m

handler.before = async (m) => {
    let chat = global.db.data.chats[m.chat]
    if (chat.simi && !chat.isBanned && !m.isGroup) {
        if (/^.*false|disnable|(turn)?off|0/i.test(m.text)) return
        if (!m.text) return
        if (m.text == "") return
        let res = await fetch('https://api.zeks.xyz/api/simi?apikey=AriaGanzTzy&text=' + encodeURIComponent(m.text))
        let json = await res.json()
        if (json.jawab == 'Aku tidak mengerti apa yang kamu katakan.Tolong ajari aku.') await m.reply('siminya blom diajarin jadi gatau t_t custom pesannya di https://simsimi.com/teach')
        else await m.reply(`*Simi:* ${json.result.replace(/ayla/i, 'AriaBotz')}`)
        return !0
    }
    return !0
}
module.exports = handler
