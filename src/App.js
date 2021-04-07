import React, { useState } from 'react';
import Header from './components/Header.js';
import Survey from './components/Survey.js';
import Footer from './components/Footer.js';
import './App.css';
import axios from 'axios'

function App() {
  const [date, setDate] = useState('');
  const [mood, setMood] = useState('');

  const handleClick = (e) => {
    e.preventDefault();

    const obj = { date, mood };

    axios
      .post(
        'https://sheet.best/api/sheets/5eb84415-bab5-467b-a005-8a4caa4766f3', 
        obj
      )
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <div className="App">
      <Header />
      <Survey />
      <Footer />
    </div>
  );
}

export default App;