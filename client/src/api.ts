import axios from "axios"
import { Todo } from "../../types"

const END_POINT = "http://localhost:5000"

export const getTodos = async () => {
  try {
    const res = await axios.get(END_POINT)
    return res.data
  } catch (error) {
    console.log("Error request todos", error)
    return {}
  }
}

export const createTodo = async (text: string) => {
  try {
    const res = await axios.post(END_POINT, {
      text,
    })
    return res.data
  } catch (error) {
    console.log("Error create todo", error)
    return {}
  }
}

export const updateTodo = async (todo: Todo) => {
  try {
    const res = await axios.put(END_POINT, todo)
    return res.data
  } catch (error) {
    console.log("Error update todo", error)
    return {}
  }
}

export const deleteTodo = async (id: Todo["id"]) => {
  try {
    const res = await axios.put(END_POINT, { id })
    return res.data
  } catch (error) {
    console.log("Error delete todo", error)
    return {}
  }
}
