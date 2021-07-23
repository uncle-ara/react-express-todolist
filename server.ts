import dotenv from "dotenv"
import express from "express"
import { v4 as uuidv4 } from "uuid"

import { Todo } from "./types"

dotenv.config()
const app = express()
const PORT = process.env.PORT || 5000

//middleware
app.use(express.json())

const todos = [
  { id: "2", text: "Hello world" },
  { id: "3", text: "Call me" },
  { id: "4", text: "My name is Piter" },
]

app.get("/", (req, res) => {
  res.status(200).json(todos)
})

app.post("/", (req, res) => {
  const createTodo: Todo = {
    id: uuidv4(),
    text: req.body.text,
  }

  todos.push(createTodo)
  res.status(201).json(todos)
})

app.listen(PORT, () => {
  console.log("hi")
})
