import React from 'react';
import './App.css';
import Demo1 from './components/Demo1';
import Demo2 from './components/Demo2';
import Demo3 from './components/Demo3';

function App() {
  return (
    <div className="App">
      <header>learn react</header>
      <Demo1 name='anshul' />
      <Demo2 />
      <Demo3 />
    </div>
  );
}

export default App;
