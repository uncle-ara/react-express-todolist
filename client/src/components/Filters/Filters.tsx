import React from "react"
import { Filter } from "../../types"

export type Props = {
  filter: Filter
  onChange: (filter: Filter) => void
}

const Filters = ({ filter, onChange }: Props) => {
  return (
    <div className="filters btn-group stack-exception">
      <button
        onClick={() => onChange(Filter.All)}
        type="button"
        className="btn toggle-btn"
        aria-pressed={filter === Filter.All}
      >
        <span className="visually-hidden">Show </span>
        <span>all</span>
        <span className="visually-hidden"> tasks</span>
      </button>
      <button
        onClick={() => onChange(Filter.Active)}
        type="button"
        className="btn toggle-btn"
        aria-pressed={filter === Filter.Active}
      >
        <span className="visually-hidden">Show </span>
        <span>Active</span>
        <span className="visually-hidden"> tasks</span>
      </button>
      <button
        onClick={() => onChange(Filter.Completed)}
        type="button"
        className="btn toggle-btn"
        aria-pressed={filter === Filter.Completed}
      >
        <span className="visually-hidden">Show </span>
        <span>Completed</span>
        <span className="visually-hidden"> tasks</span>
      </button>
    </div>
  )
}

export default Filters
