let handler = async (m, { conn, usedPrefix: _p }) => {
let { name, money, limit, exp, lastclaim, registered, regTime, age, level, role } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let math = max - xp
conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": "*List Menu AriaBotzz*",
                        "description":"Level : %level",
                        "buttonText": "Menu disini",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                             "rows": [
                                    {
                                        "title": `Download Menu`,
                                        "description": "\n*I Want To Use Download Menu*",
                                        "rowId": ".downloadmenu"
                                    },{
                                        "title": "Database Menu",
                                        "description": "\n*I Want To Use Database Menu*",
                                        "rowId": ".dbmenu"                 
                                    },{
                                        "title": "Jadibot Menu",
                                        "description": "\n*I Want To Use Jadibot Menu*",
                                        "rowId": ".jadibotmenu"                 
                                    },{
                                        "title": "Owner Menu",
                                        "description": "\n*I Want To Use Owner Menu*",
                                        "rowId": ".ownermenu"                 
                                    },{
                                        "title": "Editor Menu",
                                        "description": "\n*I Want To Use Hentai Menu*",
                                        "rowId": ".editormenu"
                                    },{
                                        "title": "Absen Menu",
                                        "description": "\n*I Want To Use Absen Menu*",
                                        "rowId": ".absenmenu"                 
                                    },{
                                        "title": "Random Menu",
                                        "description": "\n*I Want To User Random Menu*",
                                        "rowId": ".randommenu"
                                    },{
                                        "title": "Tools Menu",
                                        "description": "\n*I Want To Use Tools Menu*",
                                        "rowId": ".toolmenu"
                                    },{
                                        "title": "Rpg Menu",
                                        "description": "\n*I Want To Use Rpg Menu*",
                                        "rowId": ".rpgmenu"
                                    },{
                                        "title": "Game Menu",
                                        "description": "\n*I Want To Use Game Menu*",
                                        "rowId": ".gamemenu"
                                    },{
                                        "title": "Sticker Menu",
                                        "description": "\n*I Want To Use Sticker Menu*",
                                        "rowId": ".stickermenu"
                                    },{
                                        "title": "Info Bot Menu",
                                        "description": "\n*I Want To Use Info Bot Menu*",
                                        "rowId": ".infomenu"
                                    },{
                                        "title": "Group Menu",
                                        "description": "\n*I Want To Use Group Menu*",
                                        "rowId": ".groupmenu"
                                    }

                                ]
                            }
                        ], "contextInfo": { "stanzaId": m.key.id,
"participant": m.sender,
"quotedMessage": m.message
}
                    }
                 }, {}), {waitForAck: true})
handler.command = ['menu']
handler.register = true
module.exports = handler
