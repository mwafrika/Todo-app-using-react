import React, { useState } from 'react';

const Todos = ({ todos, handleChange, handleDelete, setUpdate }) => {
  console.log('check todos number', todos);
  const [editing, setEditing] = useState(false);
  const completedStyle = {
    fontStyle: 'italic',
    color: '#cdcdcd',
    opacity: 1,
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
    <ul className='flex w-4/5 h-full flex-col mx-auto gap-y-5'>
      {console.log(todos, 'check again')}
      {todos.map((todo) => (
        <li
          key={todo.id}
          className='h-14 even:bg-green-500 odd:bg-white  text-xl italic font-bold even:text-white odd:text-slate-400 flex rounded-lg'
        >
          <div
            onDoubleClick={handleEdit}
            style={viewMode}
            className='flex justify-between items-center w-full pl-4'
          >
            <input
              type='checkbox'
              checked={todo.completed}
              onChange={() => handleChange(todo.id)}
            />

            <span className='' style={todo.completed ? completedStyle : null}>
              {todo.title}
            </span>
            <button
              onClick={() => handleDelete(todo.id)}
              className='bg-yellow-500 h-full text-white rounded-lg px-4'
            >
              Delete
            </button>
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
