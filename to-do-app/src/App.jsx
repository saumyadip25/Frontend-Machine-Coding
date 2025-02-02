import { useState, useEffect } from 'react'
import './App.css'

function App() {
  // Load todos from localStorage on initial render
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos')
    return savedTodos ? JSON.parse(savedTodos) : []
  })
  const [newTodo, setNewTodo] = useState('')
  const [filter, setFilter] = useState('all') // 'all', 'active', 'completed'

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodo = (e) => {
    e.preventDefault()
    if (newTodo.trim() === '') return
    setTodos([
      { id: Date.now(), text: newTodo.trim(), completed: false },
      ...todos // Add new todos at the top
    ])
    setNewTodo('')
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const deleteTodo = (id) => {
    if (window.confirm('Are you sure you want to delete this todo?')) {
      setTodos(todos.filter(todo => todo.id !== id))
    }
  }

  const clearCompleted = () => {
    if (window.confirm('Are you sure you want to clear all completed todos?')) {
      setTodos(todos.filter(todo => !todo.completed))
    }
  }

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed
    if (filter === 'completed') return todo.completed
    return true
  })

  const remainingTodos = todos.filter(todo => !todo.completed).length

  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="What needs to be done?"
          className="todo-input"
        />
        <button type="submit" className="add-button">Add</button>
      </form>

      <div className="filters">
        <button 
          className={filter === 'all' ? 'active' : ''} 
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button 
          className={filter === 'active' ? 'active' : ''} 
          onClick={() => setFilter('active')}
        >
          Active
        </button>
        <button 
          className={filter === 'completed' ? 'active' : ''} 
          onClick={() => setFilter('completed')}
        >
          Completed
        </button>
      </div>

      <ul className="todo-list">
        {filteredTodos.map(todo => (
          <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            <div className="todo-item">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
              />
              <span>{todo.text}</span>
              <button 
                onClick={() => deleteTodo(todo.id)}
                className="delete-button"
                title="Delete todo"
              >
                ×
              </button>
            </div>
          </li>
        ))}
      </ul>

      {todos.length > 0 && (
        <div className="todo-footer">
          <span>{remainingTodos} items left</span>
          {todos.some(todo => todo.completed) && (
            <button onClick={clearCompleted} className="clear-completed">
              Clear completed
            </button>
          )}
        </div>
      )}
    </div>
  )
}

export default App