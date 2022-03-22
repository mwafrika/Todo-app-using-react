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
    <form
      onSubmit={handleSubmit}
      className='flex mx-auto justify-between w-4/5 rounded-full'
    >
      <input
        type='text'
        placeholder='Add your todo...'
        value={inputText.title}
        name='title'
        required
        onChange={(e) => handleChangeInput(e)}
        className='h-full bg-orange-400 w-full py-4 rounded-l-full px-4 outline-none'
      />
      <input
        type='submit'
        value='Add todo'
        className='rounded-r-full bg-green-600 px-4 cursor-pointer'
      />
    </form>
  );
};

export default InputField;
