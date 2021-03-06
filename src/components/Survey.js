import React, { useState } from 'react';
import axios from 'axios'
import '../App.css';

function Survey() {
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
        alert("Thank you for checking in today!");
      });
  };


  return (
    <div className="container-survey">
      <div className="wrapper-survey">
          <form className="form">
            <label className="label">
              Date
            </label>
            <input 
              className="input" 
              type="date" 
              onChange={(e) => setDate(e.target.value)}
            />
            <label className="label">
              Mood
            </label>
            <input 
              className="input" 
              type="text"
              onChange={(e) => setMood(e.target.value)}
            />
            <div className="buttonWrapper">
              <button onClick={handleClick}>submit</button>
            </div>
          </form>
      </div>
    </div>
  );
}

export default Survey;