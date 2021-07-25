import React, { useEffect, useState } from "react"
import Filters from "./components/Filters/Filters"
import Todo from "./components/Todo/Todo"
import { Todos, Todo as TodoStruct } from "../../types"
import { createTodo, deleteTodo, getTodos, updateTodo } from "./api"
import { Filter } from "./types"

const App = () => {
  const [todos, setTodos] = useState<Todos>({})
  const [text, setText] = useState("")
  const [filter, setFilter] = useState(Filter.All)

  useEffect(() => {
    getTodos().then(setTodos)
  }, [])

  const handleSend = () => {
    createTodo(text).then((newTodo) => {
      setTodos((prev) => ({ ...prev, [newTodo.id]: newTodo }))
    })
    setText("")
  }

  const handleUpdate = (todo: TodoStruct) => {
    updateTodo(todo).then((updatedTodo) => {
      setTodos((prev) => ({ ...prev, [updatedTodo.id]: updatedTodo }))
    })
  }

  const handleDelete = (id: TodoStruct["id"]) => {
    deleteTodo(id).then(() => {
      setTodos((prev) => {
        //Удаление элемента по динамическому ключу из объекта
        // https://stackoverflow.com/questions/34401098/remove-a-property-in-an-object-immutably
        const { [id]: deletedTodo, ...rest } = prev
        return rest
      })
    })
  }

  return (
    <div className="todoapp stack-large">
      <h1>TodoList</h1>
      <form>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            What needs to be done?
          </label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
          value={text}
          onChange={(event) => setText(event.currentTarget.value)}
          placeholder="Enter text"
        />
        <button
          onClick={handleSend}
          type="button"
          className="btn btn__primary btn__lg"
        >
          Add
        </button>
      </form>
      <Filters onChange={setFilter} filter={filter} />
      {Object.values(todos)
        .filter((todo) => {
          if (Filter.Completed === filter) {
            return todo.selected
          }
          if (Filter.Active === filter) {
            return !todo.selected
          }
          return true
        })
        .sort((todoA, todoB) => todoB.date - todoA.date)
        .map((todo) => {
          return (
            <Todo
              onDelete={handleDelete}
              onUpdate={handleUpdate}
              key={todo.id}
              value={todo}
            />
          )
        })}
    </div>
  )
}

export default App
