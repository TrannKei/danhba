import logo from './logo.svg';
import './App.css';
import './component/style.css';
import Input from './component/input';
import Data from './component/data';
import Find from './component/find';
import React from 'react';
import { useRef, useState } from 'react';





function App() {
  const [data, setData] = useState([
    {
      name: "Kiên",
      phone: "0392363962"
    },
    {
      name: "Thái",
      phone: "0962681305"
    },
  ])
 
  function handelSubmit(newData){
    setData([...data, {...newData}])
  }
  
  
  // { fakeData.sort((a, b) => (a.name > b.name) ? 1 : -1) }
  return (
    <div className="container">
        <Input handelSubmit={handelSubmit}/>
        <Find />
        <div className='card'>
        <Data data={data}/>
        </div>
    </div>
  );

}

export default App;
