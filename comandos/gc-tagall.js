let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `*βͺπΌπ΄π½ππ°πΉπ΄:* ${pesan}`
let teks = `*βΊπππ―π’π―ππ§ ππ¨π­π¬ - πππ«ππ₯ ππ¨π­βΊ*\n\nβͺ ${oi}\n\nβͺ *π΄ππΈπππ΄ππ°π:*\n`
for (let mem of participants) {
teks += `β£π€ @${mem.id.split('@')[0]}\n`}
teks += `βπππ«ππ₯ ππ¨π­`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocaciΓ³n)$/i
handler.admin = true
handler.group = true
export default handler
