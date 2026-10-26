import http from 'node:http'
import {
  generateRootHtml,
  generateText,
  generateJson,
  getTodos,
  postTodo,
  generateNotFound,
  generateForm
} from './api.mjs'

const PORT = 3000

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    return generateRootHtml(req, res)
  }

  if (req.method === 'GET' && req.url === '/text') {
    return generateText(req, res)
  }

  if (req.method === 'GET' && req.url === '/json') {
    return generateJson(req, res)
  }

  if (req.method === 'GET' && req.url === '/todos') {
    return getTodos(req, res)
  }
  if (req.method === 'POST' && req.url === '/todos') {
    return postTodo(req, res)
  }

  if (req.method === 'GET' && req.url === '/form') {
    return generateForm(req, res)
  }

  return generateNotFound(req, res)
})

server.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`)
})
