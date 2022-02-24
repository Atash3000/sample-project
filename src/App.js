import './App.css';
import { Fragment, useEffect, useState } from 'react';
import Image from './components/Image';
import mainImg from './main.jpg';

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
      <h1>Hello React</h1>
      <h2>data:{data}</h2>
      {/* <Image /> */}
      <h3>imaga:</h3>
      <div className='image-box'>
        <img src={mainImg} alt='heroimage' height='200px' />
      </div>
    </Fragment>
  );
}

export default App;
