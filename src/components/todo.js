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

  const deleteTodo = function (id) {
    const filtered = todoList.filter((el) => el.id !== id);
    setTodolist(filtered);
  };

  const editHandler = function (id) {
    const task = todoList.find((el) => el.id === id);
    if (!task) {
      return;
    }
  };
  return (
    <div style={styled} className='container'>
      <input value={enteredText} onChange={onChangeHandler} type='text' />
      <button onClick={handleClick}>add</button>
      <ul>
        {todoList.map((el) => (
          <li onDoubleClick={editHandler.bind(this, el.id)} key={el.id}>
            {el.title}
            <span
              onClick={deleteTodo.bind(this, el.id)}
              style={{ color: 'red', marginLeft: '10px' }}
            >
              delete
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
