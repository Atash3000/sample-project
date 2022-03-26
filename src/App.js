import './App.css';
import { Fragment, useEffect, useState } from 'react';
import Todo from './components/todo';
import { useGetData } from './hooks/useGetdata';

function App(props) {
  // const [data, setData] = useState(null);
  // const [image, setImage] = useState('');
  // const [isLoading, setLoading] = useState(false);
  // const [isError, setError] = useState(null);

  // useEffect(() => {
  //   async function fetchData() {
  //     setLoading(true);
  //     try {
  //       const dataFromServer = await fetch('http://localhost:4000/home');
  //       const json = await dataFromServer.json();
  //       setData(json.message);
  //       setImage(json.image);
  //       setLoading(false);
  //     } catch (err) {
  //       console.log('err', err);
  //       setLoading(false);
  //       console.log(err);
  //       setError(err.message ? err.message : err.response ? err.response : err);
  //     }
  //   }

  //   fetchData();
  // }, []);

  const { state } = useGetData('http://localhost:4000/home');
  const { isLoading, error: isError, image, data } = state;

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
