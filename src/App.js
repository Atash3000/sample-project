import './App.css';
import { Fragment, useEffect, useState } from 'react';

function App(props) {
  const [data, setData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
        const dataFromServer = await fetch('http://localhost:4000/home');
        const json = await dataFromServer.json();
        setData(json.message);
      } catch (err) {
        console.log('err', err);
      }
    }

    fetchData();
  }, []);

  return (
    <Fragment>
      <h1>Hello React updated-2</h1>
      <h2>data:{data}</h2>
      <h3>imaga:</h3>
    </Fragment>
  );
}

export default App;
