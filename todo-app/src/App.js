import './App.css';
import React from 'react'

function Todo({todo, index, completeTodo, removerTodo}) {
  return (
    <div className='todo'
      style={{textDecoration: todo.isCompleted ? 'line-through' : ''}}>
      {todo.text}
      <div>
        <button className='complet-btn' onClick={() => completeTodo(index)}>Completo</button>
        <button className='rm-btn' onClick={() => removerTodo(index)}>Remover</button>
      </div>
    </div>
  )
}

function TodoForm({addTodo}) {
    const [value, setValue] = React.useState('');

    const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      addTodo(value);
      setValue('')
    };

    return (
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          className='input'
          value={value}
          onChange={e => setValue(e.target.value)}
          />
      </form>
    )
}

function App() {
  const [todos, setTodos] = React.useState([
    {
      text: 'learn about React',
      isCompleted: false
    },
    {
      text: 'meet friend for lunch',
      isCompleted: false

    },
    {
      text: 'build really cool todo app',
      isCompleted: false
    }
  ])

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos)
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true
    setTodos(newTodos)
  }

  const removerTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div className="App">
      <div className='todo-list'>
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removerTodo={removerTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}


export default App;
