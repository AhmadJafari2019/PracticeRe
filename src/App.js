import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import './Person/Person.css';
import Person from './Person/Person';
const StyledButton = styled.button`
  border: 2px solid blue;
  background-color: green;
  color: #fff;

  &:hover {
    background-color: violet;
    color: black;
  }
`;
class App extends Component {
  state = {
    persons: [
      { id: 'firstId', name: 'Gabriel', age: 33 },
      { id: 'secondId', name: 'Yas', age: 44 },
      { id: 'thirdId', name: 'Ali', age: 20 }
    ],
    someOtherState: 'OtherValue',
    showPersons: false
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
  };

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={event => this.nameChangeHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // };
    }

    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>Hello React</h1>
        <p className={classes.join(' ')}>This is really Working!</p>
        <StyledButton onClick={this.togglePersonHandler}>
          Switch Me
        </StyledButton>

        {persons}
      </div>
    );
  }
}

export default App;
