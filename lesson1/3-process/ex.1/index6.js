const majorNodeVersion = +process.versions.node.split('.')[0]
console.log('Major Node.js version:', majorNodeVersion)

if (majorNodeVersion < 22) {
  throw new Error('Required major Node.js version is 20 or higher')
}

console.log('Node major version OK!')
