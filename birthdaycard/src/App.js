import React from 'react';
import logo from './logo.svg';
import bme from './bme.jpg';
import './App.css';

function App() {

const myAlert = () => {
  alert("Happy Birthday Momma! Love you lots !! Hope that you have a wonderful exciting day today!! Love Jordan :).....ps: Thanks for cooking all the time , it tastes good everytime <33")
}


  return (
    <div className="App">
      <div className= 'ctx'>
      <h1><span>💝</span>HAPPY BIRTHDAY MOM<span>💝</span></h1>
      </div>
      <img src={bme} alt="bme" className = 'imger'></img>
      <div>
        <button onClick ={() => myAlert()}>Click Me</button>
      </div>
    </div>
  );
}

export default App;