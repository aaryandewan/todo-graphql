import React from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

function App() {
  return (
    <div className="App">
      <header>
        <h1>My Todo App</h1>
      </header>
      
      <AddTodo />
      
      <TodoList />
    </div>
  );
}

export default App;