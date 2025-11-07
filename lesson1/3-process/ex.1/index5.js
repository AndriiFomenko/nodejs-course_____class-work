// if (process.versions.node !== '24.11.0') {
//   throw new Error('Wrong node.js version')
// }
//
// console.log('Node version OK!')

const majorNodeVersion = +process.versions.node.slice(0, 2)
console.log(majorNodeVersion)
console.log(typeof majorNodeVersion)

if (majorNodeVersion < 22) {
  throw new Error('Wrong node.js version')
}

console.log('Node version OK!')
