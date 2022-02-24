import './App.css';
import { Fragment, useEffect, useState } from 'react';

function App(props) {
  const [data, setData] = useState(null);
  const [image, setImage] = useState('');
  useEffect(() => {
    async function fetchData() {
      try {
        const dataFromServer = await fetch('http://localhost:4000/home');
        const json = await dataFromServer.json();
        setData(json.message);
        setImage(json.image);
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
      <img src={image} alt='hero' height={'400px'} />
    </Fragment>
  );
}

export default App;
