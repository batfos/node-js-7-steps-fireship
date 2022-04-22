// console.log('Salam, Dunia! 👋')

// 4. KNOW YOUR RUNTIME

// console.log(global.tanggalRamadan)

// global.tanggalRamadan = '20'

// console.log(global.tanggalRamadan)

// console.log(process.platform)

// console.log(process.env.USER)

// 5. EVENTS

// const {EventEmitter} = require('events')

// const eventEmitter = new EventEmitter()

// eventEmitter.on('istigfar', () => {
//   console.log('Astaghfirullāh 🧎')
// })

// eventEmitter.emit('istigfar') // Astaghfirullāh 🧎
// eventEmitter.emit('istigfar') // Astaghfirullāh 🧎
// eventEmitter.emit('istigfar') // Astaghfirullāh 🧎

// 6. FILE SYSTEM

// const {readFile, readFileSync} = require('fs')

// const txt = readFileSync('./salam.txt', 'utf8')

// // console.log(txt)
// // console.log('GPL‼️')

// readFile('./salam.txt', 'utf8', (err, txt) => {
//   console.log(txt)
// })

// console.log('GPL‼️')

// const {readFile} = require('fs').promises

// async function salam() {
//   const file = await readFile('./salam.txt', 'utf8')

//   console.log(file)
// }

// salam()

// console.log('GPL‼️')

// 7. MODULES & NPM

const myModule = require('./my-module')

console.log(myModule)
