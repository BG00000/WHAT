import { useState } from "react"
import "./style.css"
import { NewTodoForm } from "./newTodoForm"

export default function App() {


  const [todos, setTodos] = useState([])

  function addTodo(title) {
    return [
      ...currentTodos, 
      { id: crypto.randomUUID(), title, completed: false},
    ]
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
          if(todo.id === id) {
            return { ...todo, completed }
          }
          return todo
        })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <>
    <NewTodoForm onSubmit={addTodo}/>

  <h1 className="header">todo</h1>
  <ul className="list">
    {todos.length === 0 && "No todos"}
    {todos.map(todo => {
      return (
        <li key={todo.id}>
          <label>
            <input type="checkbox" 
                   checked={todo.completed}
                   onChange={e => toggleTodo(todo.id, e.target.checked)} />
            {todo.title}
          </label>
          <button onClick={() => {deleteTodo(todo.id)}} className="btn btn-danger">delete</button>
        </li>
      )
    })}
  </ul>
    </>
  )
}