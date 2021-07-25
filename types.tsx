export type Todo = {
  id: string
  text: string
  date: number
  selected: boolean
}

export type Todos = Record<Todo["id"], Todo>
