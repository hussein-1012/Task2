import { useState } from 'react';
import './App.css';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState('');

  const addTodo = () => {
    if (newTodo.trim() === '') return;
    setTodos([...todos, newTodo]);
    setNewTodo('');
  };

  const deleteTodo = (index) => 
  {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const updateTodo = () => {
    if (editText.trim() === '') return;
    const updatedTodos = todos.map((todo, index) => (index === editIndex ? editText : todo));
    setTodos(updatedTodos);
    setEditIndex(null);
    setEditText('');
  };

  return (
    <div className="App">
      <div className="list">
       <h1><u>Todo List</u></h1>
      </div>
      <div className="Container">
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              <div className="item">
                {todo}
                <button onClick={() => setEditIndex(index)}>Edit</button>
                <button onClick={() => deleteTodo(index)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={addTodo}>Add</button>

      {editIndex !== null && (
        <div>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            placeholder="Update task"
          />
          <button onClick={updateTodo}>Update</button>
        </div>
      )}
    </div>
  );
}

export default TodoList;
