import React, { useState, KeyboardEvent } from "react"
import { Todo as TodoStruct } from "../../../../types"

export type Props = {
  value: TodoStruct
  onUpdate: (todo: TodoStruct) => void
  onDelete: (id: TodoStruct["id"]) => void
}

const Todo = ({ value, onUpdate, onDelete }: Props) => {
  const [text, setText] = useState(value.text)
  const [editMode, setEditMode] = useState(false)

  const handleEnter = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onUpdate({ ...value, text })
      setEditMode(false)
    }
  }

  return (
    <>
      <ul
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        <li className="todo stack-small">
          <div className="c-cb">
            <input
              id="todo-0"
              type="checkbox"
              checked={value.selected}
              onChange={() => onUpdate({ ...value, selected: !value.selected })}
            />
            {editMode ? (
              <input
                type="text"
                className="input"
                name="text"
                autoComplete="off"
                autoFocus
                value={text}
                onKeyDown={handleEnter}
                onBlur={() => setEditMode(false)}
                onChange={(event) => setText(event.currentTarget.value)}
                placeholder="Edit text"
              />
            ) : (
              <label className="todo-label" htmlFor="todo-0">
                {value.text}
              </label>
            )}
          </div>
          <div className="btn-group">
            <button
              onClick={() => setEditMode(!editMode)}
              type="button"
              className="btn"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(value.id)}
              type="button"
              className="btn btn__danger"
            >
              Delete
            </button>
          </div>
        </li>
      </ul>
    </>
  )
}

export default Todo
