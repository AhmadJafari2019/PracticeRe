import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Yas', age: 44 },
      { name: 'Gabriel', age: 33 },
      { name: 'Ali', age: 20 }
    ]
  };
  render() {
    return (
      <div className="App">
        <h1>Hello React</h1>
        <p>This is really Working!</p>
        <Person name={this.state.persons[0].name} age="24" />
        <Person name="James" age="34">
          Hi i'm the Child
        </Person>
        <Person name="Joe" age="41" />
      </div>
    );
  }
}

export default App;
