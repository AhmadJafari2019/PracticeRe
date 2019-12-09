import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Yas', age: 44 },
      { name: 'Gabriel', age: 33 },
      { name: 'Ali', age: 20 }
    ],
    someOtherState: 'OtherValue'
  };

  switchNameHandler = newName => {
    // console.log('Was Clicked.');
    this.setState({
      persons: [
        { name: newName, age: 13 },
        { name: 'Gabriel', age: 33 },
        { name: 'Stephanie', age: 24 }
      ]
    });
  };
  render() {
    return (
      <div className="App">
        <h1>Hello React</h1>
        <p>This is really Working!</p>
        <button onClick={() => this.switchNameHandler('Mortez')}>
          Switch Me
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'FaFa')}
        >
          Hi i'm the Child!
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
