import React, { useEffect, useState } from "react"

import Filters from "./components/Filters/Filters"
import Todo from "./components/Todo/Todo"
import { Todo as TodosData, Todos } from "../../types"
import { getTodos } from "./api"

const App = () => {
  const [todos, setTodos] = useState<Todos>({})

  useEffect(() => {
    getTodos().then(setTodos)
  }, [])

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
        />
        <button type="button" className="btn btn__primary btn__lg">
          Add
        </button>
      </form>
      <Filters />
      {Object.values(todos).map((todo) => {
        return <Todo key={todo.id} value={todo} />
      })}
    </div>
  )
}

export default App
