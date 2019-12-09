import React, { Component } from 'react';
import './App.css';
import './Person/Person.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Yas', age: 44 },
      { name: 'Gabriel', age: 33 },
      { name: 'Ali', age: 20 }
    ],
    someOtherState: 'OtherValue',
    showPersons: false
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

  nameChangeHandler = event => {
    this.setState({
      persons: [
        { name: 'Yas', age: 44 },
        { name: event.target.value, age: 33 },
        { name: 'Ali', age: 20 }
      ]
    });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      border: '2px solid blue'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'FaFa')}
            changed={this.nameChangeHandler}
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

    return (
      <div className="App">
        <h1>Hello React</h1>
        <p>This is really Working!</p>
        <button onClick={this.togglePersonHandler} style={style}>
          Switch Me
        </button>

        {persons}
      </div>
    );
  }
}

export default App;
