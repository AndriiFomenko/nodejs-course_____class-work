import { Duplex } from 'node:stream'

const inputStream = new Duplex({
  write(chunk, encoding, callback) {
    console.log(chunk.toString())
    callback()
  },

  read() {
    // ACSII => Z is 90
    if (this.currentCharCode > 90) {
      this.push(null)
      return
    }
    this.push(String.fromCharCode(this.currentCharCode++))
  }
})

inputStream.currentCharCode = 65 //  ACSII => 65 is A

inputStream.pipe(process.stdout)
