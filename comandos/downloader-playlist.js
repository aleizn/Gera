
import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command, text }) => {
if (!text) throw `*[โ] INGRESA UNA CANCION PARA ENVIAR LA LISTA, EJEMPLO*:\n*โ  ${usedPrefix + command} phonk*`
try {
const { video } = await youtubeSearch(text)
const listSections = []
let teks = [...video ].map(v => {
switch (v.type) {
case 'video': {
listSections.push([`${v.title}`, [
['Video ๐ฆ', `${usedPrefix}ytmp4 ${v.url}`, `descargar: ${v.title} (${v.url})`],
['Videodoc ๐ฆ', `${usedPrefix}ytmp4doc ${v.url}`, `descargar: ${v.title} (${v.url})`],    
['Audio ๐ต', `${usedPrefix}ytmp3 ${v.url}`, `descargar: ${v.title} (${v.url})`],
['Audiodoc ๐ต', `${usedPrefix}ytmp3doc ${v.url}`, `descargar: ${v.title} (${v.url})`]
]])
}}}).filter(v => v).join('\n\n========================\n\n')
conn.sendList(m.chat, ' *ใ LISTA YOUTUBE  ใ*', `*๐ Musica relacionada con: ${args.join(" ")}*`, '*๐ Elije una opciรณn y presiona enviar*', '*[๐ RESULTADOS ๐]*', listSections, m)
} catch {
await m.reply('*[โ ๏ธ] ERROR, VUELVA A INTENTARLO*')
}}
handler.dorracoins = 5
handler.command = /^playlist|playlist2$/i
export default handler
