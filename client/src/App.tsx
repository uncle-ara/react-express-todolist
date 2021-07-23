import React from "react"
import Filters from "./components/Filters/Filters"
import Todo from "./components/Todo/Todo"

const App = () => {
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
      <Todo />
    </div>
  )
}

export default App
