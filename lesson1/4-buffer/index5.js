const email = 'john@email'
const password = '123'

const original = `${email}:${password}`

// Кодуємо у різні формати
const base64String = Buffer.from(original).toString('base64')
const hexString = Buffer.from(original).toString('hex')

console.log('=== ОРИГІНАЛЬНИЙ РЯДОК ===')
console.log('original:', original)

console.log('\n=== ФОРМАТНІ РЯДКИ ===')
console.log('base64String:', base64String)
console.log('hexString:', hexString)

console.log('\n=== РОЗКОДУВАННЯ (повернення до оригіналу) ===')
// Розкодуємо з base64
const decodedFromBase64 = Buffer.from(base64String, 'base64').toString()
console.log('decoded from base64:', decodedFromBase64)

// Розкодуємо з hex
const decodedFromHex = Buffer.from(hexString, 'hex').toString()
console.log('decoded from hex:', decodedFromHex)

console.log('\n=== ПЕРЕВІРКА ===')
console.log('base64 === original:', decodedFromBase64 === original)
console.log('hex === original:', decodedFromHex === original)
