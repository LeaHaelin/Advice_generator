import React, { useState } from 'react';
import dividerMobile from './images/pattern-divider-mobile.svg';
import dividerDesktop from './images/pattern-divider-desktop.svg';
import axios from 'axios';
import dice from './images/icon-dice.svg';

import "./styles.css";

function App() {
  const [quotes, setQuotes] = useState({
    id: 117,
    advice: `It is easy to sit up and take notice, what's difficult is getting up and taking action.`
  })
  // when the button click => get data number -> get data advice
  const adviceHandler = () => {
    axios.get(`https://api.adviceslip.com/advice`).then(response => {
      setQuotes(response.data.slip)
      console.log(response.data.slip);
    })
  }
  return (
    <div className="App">
      <div className="container">
        <p className="advice__num">ADVICE #{quotes.id}</p>
        <h2 className="advice__text">"{quotes.advice}"</h2>
        <picture className="divider">
          <source media="(min-width:1400px)" srcset={dividerDesktop} />
          <img src={dividerMobile} alt="" className="divider__img" />
        </picture>
        <div className="button" onClick={adviceHandler} >
          <img src={dice} alt="dice" className="button__dice" />
        </div>
      </div>
    </div>
  );
}

export default App;
