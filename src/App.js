import React from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
  return (
    <div className="App">
      <h1>Hello React</h1>
      <p>This is really Working!</p>
      <Person name="Max" age="24" />
      <Person name="James" age="34">
        Hi i'm the Child
      </Person>
      <Person name="Joe" age="41" />
    </div>
  );
}

export default App;
