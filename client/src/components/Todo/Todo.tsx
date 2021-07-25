import React from "react"
import { Todo as TodoStruct } from "../../../../types"

export type Props = {
  value: TodoStruct
}

const Todo = ({ value }: Props) => {
  return (
    <>
      <h2 id="list-heading">Count Task</h2>
      <ul
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-0" type="checkbox" defaultChecked={false} />
            <label className="todo-label" htmlFor="todo-0">
              {value.text}
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
              Edit
            </button>
            <button type="button" className="btn btn__danger">
              Delete
            </button>
          </div>
        </li>
      </ul>
    </>
  )
}

export default Todo
