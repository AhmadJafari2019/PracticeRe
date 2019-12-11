import React, { Component } from 'react';
import Cockpit from '../components/Cockpit/Cockpit';
import './App.css';
import '../components/Persons/Person/Person.css';
import Persons from '../components/Persons/Persons';

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
      persons = <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler}/>  
    }

    return (
      <div className="App">
        <Cockpit 
        showPersons ={this.state.showPersons} 
        persons={this.state.persons}
        clicked ={this.togglePersonHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;

// {this.state.persons.map((person, index) => {
//   return (
//     <Person
//       click={() => this.deletePersonHandler(index)}
//       name={person.name}
//       age={person.age}
//       key={person.id}
//       changed={event => this.nameChangeHandler(event, person.id)}
//     />
//   );
// })}
