import './App.css';
import { Fragment } from 'react';
import Todo from './components/todo';
import { useGetData } from './hooks/useGetdata';
// const name
function App(props) {
  const { state: dataState } = useGetData('api/v1/home');
  const { isLoading, error: isError, image, data } = dataState;

  return (
    <Fragment>
      {isLoading ? (
        <h1>...loading</h1>
      ) : isError ? (
        <h2 style={{ color: 'red' }}>{isError}</h2>
      ) : (
        <>
          <h1>Hello React updated-2</h1>
          <h2>data:{data}</h2>
          <h3>imaga:</h3>
          <img src={image} alt='hero' height={'400px'} />
        </>
      )}
      <Todo />
    </Fragment>
  );
}

export default App;
