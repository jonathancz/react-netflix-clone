import React from 'react'
import './App.css'
import Row from './row'


function App() {
  return (
    <div className="App">
      <h1>Hey! Let's build a Netflix clone 🚀</h1>
      <Row title="Netflix Originals"/> 
      <Row title="Trending Now"/> 
    </div>
  );
}

export default App;
