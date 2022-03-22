import React from 'react';
import './App.css';
import Todo from './todos';
import { useState } from 'react';
import InputField from './inputField';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const getInitialTodos = () => {
    const temp = localStorage.getItem('todos');
    const savedTodos = JSON.parse(temp);
    return savedTodos || [];
  };
  const [todos, setTodos] = useState(getInitialTodos());
  const [title, setTitle] = useState('');

  console.log('localStore', getInitialTodos());
  const handleChange = (id) => {
    setTodos((state) =>
      state.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
    console.log('checking');
  };

  const removeToLocalStorage = (id) => {
    const todo = getInitialTodos();
    const filtered = todo.filter((item) => item.id !== id);
    localStorage.setItem('todos', JSON.stringify(filtered));
  };

  const addToLocalStorage = (items) => {
    const todo = localStorage.setItem('todos', JSON.stringify(items));
    return todo;
  };
  const handleDelete = (id) => {
    setTodos((prevState) => [...prevState.filter((todo) => todo.id !== id)]);
    removeToLocalStorage(id);
    console.log('hello world', id);
  };

  const handleChangeInput = (e) => {
    setTodos((prevState) => ({
      ...prevState,
      [prevState[1].name]: e.target.value,
    }));
  };

  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    addToLocalStorage([...todos, newTodo]);
  };

  const editTodo = (index, title) => {
    todos[index].title = title;
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  const setUpdate = (title, id) => {
    if (title) {
      const currentTodo = todos.find((todo) => todo.id === id);
      editTodo(todos.indexOf(currentTodo), title);
      setTitle(title);
      console.log('currentTodo', currentTodo);
    }
  };

  return (
    <div className='title'>
      <InputField
        addTodoItem={addTodoItem}
        handleChangeInput={handleChangeInput}
        todo={title}
      />
      <Todo
        todos={todos}
        handleChange={handleChange}
        handleDelete={handleDelete}
        setUpdate={setUpdate}
      />
    </div>
  );
}

export default App;
