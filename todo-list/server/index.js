import express from 'express'
import cors from 'cors'

import * as db from './db.js'

const app = express()
const port = 3000

app.use(cors({ origin: 'http://localhost:5173' }))
app.use(express.json())

app.get('/tasks', (req, res) => {
  res.json(db.readTasks())
})

app.get('/tasks/:id', (req, res) => {
  const id = Number(req.params.id)
  const task = findTask(id)
  res.json(task)
})

app.post('/tasks', (req, res) => {
  res.json(db.createTask(req.body))
})

app.patch('/tasks/:id', (req, res) => {
  const id = Number(req.params.id)
  findTask(id)
  res.json(db.updateTask(id, req.body))
})

app.put('/tasks/:id', (req, res) => {
  const id = Number(req.params.id)
  findTask(id)
  res.json(db.replaceTask(id, req.body))
})

app.delete('/tasks/:id', (req, res) => {
  const id = Number(req.params.id)
  findTask(id)
  res.json(db.deleteTask(id))
})

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.error('Task', err.message)
  res.status(404)
  res.send('Not Found')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

function findTask(id) {
  const task = db.readTaskById(id)
  if (!task) {
    throw new Error('Not Found')
  }

  return task
}
