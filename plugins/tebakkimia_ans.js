const similarity = require('similarity')
const threshold = 0.72
let handler = m => m
handler.before = async function (m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Ketik.*teki/i.test(m.quoted.text)) return !0
    conn.tebakkimia = conn.tebakkimia ? conn.tebakkimia : {}
    if (!(id in conn.tebakkimia)) return m.reply('Soal itu telah berakhir')
    if (m.quoted.id == conn.tebakkimia[id][0].id) {
        let json = JSON.parse(JSON.stringify(conn.tebakkimia[id][1]))
        if (/^.*teki$/i.test(m.text)) return !0
        if (m.text.toLowerCase() == json.name.toLowerCase().trim()) {
            global.db.data.users[m.sender].exp += conn.tebakkimia[id][2]
            m.reply(`*Benar!*\n+${conn.tebakkimia[id][2]} XP`)
            clearTimeout(conn.tebakkimia[id][3])
            delete conn.tebakkimia[id]
        } else if (similarity(m.text.toLowerCase(), json.name.toLowerCase().trim()) >= threshold) m.reply(`*Dikit Lagi!*`)
        else m.reply(`*Salah!*`)
    }
    return !0
}
handler.exp = 0

module.exports = handler
