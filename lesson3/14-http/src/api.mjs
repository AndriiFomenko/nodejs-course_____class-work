import {
  rootHtmlTemplate,
  notFoundTemplate,
  todos,
  formTemplate,
  generateTodosTemplate
} from './data.mjs'
import querystring from 'node:querystring'

const generateRootHtml = (req, res) => {
  res.statusCode = 200
  res.setHeader('Content-type', 'text/html')
  res.end(rootHtmlTemplate)
}

const generateForm = (req, res) => {
  if (!formTemplate) {
    res.statusCode = 500
    res.end('Internal server error')
    return
  } else {
    res.statusCode = 200
    res.setHeader('Content-type', 'text/html')
    res.end(formTemplate)
  }
}

const generateText = (req, res) => {
  res.statusCode = 200
  res.setHeader('Content-type', 'text/plain')
  res.end('This is plain text')
}

const generateJson = (req, res) => {
  res.statusCode = 200
  res.setHeader('Content-type', 'application/json')
  res.end(JSON.stringify({ message: 'Hello from JSON' }))
}

const getTodos = (req, res) => {
  res.statusCode = 200
  res.setHeader('Content-type', 'text/html')
  res.end(generateTodosTemplate())
}

const postTodo = (req, res) => {
  if (req.headers['content-type'] === 'application/json') {
    let dataJson = ''

    req.on('data', (chunk) => (dataJson += chunk))

    req.on('end', () => {
      try {
        todos.push(JSON.parse(dataJson))
        res.statusCode = 201
        res.end(JSON.stringify({ message: 'Todo created successfully' }))
      } catch (err) {
        res.statusCode = 400
        res.end(JSON.stringify({ message: 'Invalid JSON' }))
      }
    })
  } else if (
    req.headers['content-type'] === 'application/x-www-form-urlencoded'
  ) {
    let dataUrlEncoded = ''

    req.on('data', (chunk) => (dataUrlEncoded += chunk))

    req.on('end', () => {
      try {
        let todo = querystring.parse(dataUrlEncoded)
        todo = {
          ...todo,
          userId: +todo.userId,
          id: +todo.id,
          completed: !!todo.completed
        }
        todos.push(todo)
        res.statusCode = 201
        res.end(JSON.stringify({ message: 'Todo created successfully' }))
      } catch (err) {
        res.statusCode = 400
        res.end(JSON.stringify({ message: 'Invalid URL-encoded' }))
      }
    })
  } else {
    res.statusCode = 400
    res.end(JSON.stringify({ message: 'Invalid Content-Type' }))
  }
}

const generateNotFound = (req, res) => {
  res.statusCode = 404
  res.setHeader('Content-type', 'text/html')
  res.end(notFoundTemplate)
}

export {
  generateRootHtml,
  generateText,
  generateJson,
  getTodos,
  postTodo,
  generateNotFound,
  generateForm
}
