import fs from 'node:fs/promises'

const createHtmlTemplate = (htmlInjection) => `
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    </head>
    <body>
      <div style='width: min(100% - 40px, 992px); margin-inline: auto;'>
        ${htmlInjection}
      </div>
    </body>
    </html>
`

const rootHtmlTemplate = createHtmlTemplate('<h1>Hello world</h1>')

const notFoundTemplate = createHtmlTemplate('<h1>404 Not Found</h1>')

let formTemplate

const loadFormTemplate = async () => {
  try {
    formTemplate = await fs.readFile('./src/templates/form.html')
  } catch (err) {
    console.error(err)
  }
}

loadFormTemplate()

const generateTodosTemplate = () => {
  const todosHtml = todos
    .map(
      (todo) => `
    <div>
      <h2>${todo.title}</h2>
      <p>User ID: ${todo.userId}</p>
      <p>Todo ID: ${todo.id}</p>
      <p>Completed: ${todo.completed ? 'Yes' : 'No'}</p>
    </div>
  `
    )
    .join('')

  const buttonHtml = `<button onclick="window.location.href = '/form'">Add new todo</button>`
  return createHtmlTemplate(`<h1>List of Todos</h1>${todosHtml}${buttonHtml}`)
}

const todos = [
  {
    userId: 1,
    id: 1,
    title: 'delectus aut autem',
    completed: false
  },
  {
    userId: 1,
    id: 2,
    title: 'quis ut nam facilis et officia qui',
    completed: false
  },
  {
    userId: 1,
    id: 3,
    title: 'fugiat veniam minus',
    completed: false
  },
  {
    userId: 1,
    id: 4,
    title: 'et porro tempora',
    completed: true
  },
  {
    userId: 1,
    id: 5,
    title: 'laboriosam mollitia et enim quasi adipisci quia provident illum',
    completed: false
  }
]

export {
  rootHtmlTemplate,
  notFoundTemplate,
  todos,
  formTemplate,
  generateTodosTemplate
}
