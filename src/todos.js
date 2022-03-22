import React, { useState } from 'react';

const Todos = ({ todos, handleChange, handleDelete, setUpdate }) => {
  console.log('check todos number', todos);
  const [editing, setEditing] = useState(false);
  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setEditing(!editing);
    }
  };

  const handleEdit = () => {
    setEditing(!editing);
    console.log('You double clicked me');
  };

  let viewMode = {};
  let editMode = {};

  editing ? (viewMode.display = 'none') : (editMode.display = 'none');

  return (
    <ul>
      {console.log(todos, 'check again')}
      {todos.map((todo) => (
        <li key={todo.id}>
          <div onDoubleClick={handleEdit} style={viewMode}>
            <input
              type='checkbox'
              checked={todo.completed}
              onChange={() => handleChange(todo.id)}
            />
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
            <span style={todo.completed ? completedStyle : null}>
              {todo.title}
            </span>
          </div>
          <input
            type='text'
            className='textInput'
            style={editMode}
            value={todo.title}
            onChange={(e) => setUpdate(e.target.value, todo.id)}
            onKeyDown={handleUpdatedDone}
          />
        </li>
      ))}
    </ul>
  );
};

export default Todos;
