let axios = require("axios");
let handler = async(m, { conn, text }) => {

	axios.get(`https://bx-hunter.herokuapp.com/api/katabijak?apikey=Ikyy69`).then ((res) => {
	 	let hasil = `${res.data.result}`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['katabijak']
handler.tags = ['katabijak']
handler.command = /^(katabijak)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = false

module.exports = handler
