import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'ᴍᴀꜱᴜᴋᴋᴀɴ ᴛᴇxᴛ'
  m.reply('ᴘʀᴏꜱᴇꜱ...')
  let res = `https://api.erdwpe.com/api/photooxy/pubg?text=${response[0]}&text2=${response[1]}`
  conn.sendFile(m.chat, res, 'pubg.jpg', `ꜱᴜᴅᴀʜ ᴊᴀᴅɪ`, m, false)
}
handler.help = ['logo-pubg'].map(v => v + ' <text>')
handler.tags = ['logo', 'maker']
handler.command = /^(logo-pubg)$/i
handler.limit = false
//buatan zyko-md, jgn hapus atuh 😊
export default handler