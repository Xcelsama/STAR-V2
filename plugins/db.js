let handler = async (m) => {
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    m.reply(`*${totalreg} users using Bot*`)
}
handler.help = ['database','db']
handler.tags = ['info']
handler.command = /^(database|db)$/i
export default handler