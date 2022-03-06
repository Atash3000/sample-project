import { useState } from 'react';

function Todo() {
  const styled = {
    position: 'absolute',
    top: '20%',
    left: '40%',
  };

  const [todoList, setTodolist] = useState([]);
  const [enteredText, setEnteredText] = useState('');

  const onChangeHandler = function (event) {
    setEnteredText(event.target.value);
  };
  const handleClick = function () {
    const id = Math.floor(Math.random() * 100);
    const newTodo = {
      id: id,
      title: enteredText,
    };

    setTodolist((prevState) => {
      return [...prevState, newTodo];
    });
    setEnteredText('');
  };
  console.log(todoList);
  return (
    <div style={styled} className='container'>
      <input value={enteredText} onChange={onChangeHandler} type='text' />
      <button onClick={handleClick}>add</button>
      <ul>
        {todoList.map((el) => (
          <li key={el.id}>{el.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
