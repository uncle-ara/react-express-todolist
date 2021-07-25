import cors from "cors"
import dotenv from "dotenv"
import express from "express"
import { v4 as uuidv4 } from "uuid"

import { Todo, Todos } from "./types"

dotenv.config()
const app = express()
const PORT = process.env.PORT || 5000

//middleware
app.use(express.json())
//---

app.use(cors())

const storage: Todos = {
  [uuidv4()]: { id: "123", text: "string", date: 123 },
}

app.get("/", (req, res) => {
  res.status(200).json(storage)
})

app.post("/", (req, res) => {
  const newTodo: Todo = {
    id: uuidv4(),
    text: req.body.text,
    date: Date.now(),
    selected: false,
  }
  storage[newTodo.id] = newTodo
  res.status(201).json(storage)
})

app.listen(PORT, () => {
  console.log("hi")
})
