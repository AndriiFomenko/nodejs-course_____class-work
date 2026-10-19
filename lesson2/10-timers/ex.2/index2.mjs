import http from 'http'

const server = http.createServer((req, res) => {
  res.end('Hello World!')
})

server.listen(3030, () => {
  console.log('Server listen on port 3030')
})

const timer = setInterval(() => {
  console.log(process.memoryUsage())
}, 1000)

setTimeout(() => {
  console.log('Closing server...')
  clearInterval(timer)
  server.close(() => {
    console.log('Server closed.')
  })
}, 3000)
