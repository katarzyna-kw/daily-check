import React, { useState } from 'react';
import Header from './components/Header.js';
import Survey from './components/Survey.js';
import Footer from './components/Footer.js';
import './App.css';

function App() {
  const [date, setDate] = useState('');
  const [mood, setMood] = useState('');


  return (
    <div className="App">
      <Header />
      <Survey />
      <Footer />
    </div>
  );
}

export default App;