import React, { useState } from 'react';

const InputField = ({ addTodoItem }) => {
  const [inputText, setInputText] = useState({
    title: '',
  });

  const handleChangeInput = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
    console.log(inputText, 'overide');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.title.trim()) {
      addTodoItem(inputText.title);
      setInputText({
        title: '',
      });
    } else {
      alert('Please write item');
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Add your todo...'
        value={inputText.title}
        name='title'
        required
        onChange={(e) => handleChangeInput(e)}
      />
      <input type='submit' value='Add todo' />
    </form>
  );
};

export default InputField;
