import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = () => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Yas', age: 44 },
      { name: 'Gabriel', age: 33 },
      { name: 'Ali', age: 20 }
    ],
    someOtherState: 'OtherValue'
  });

  const switchNameHandler = () => {
    // console.log('Was Clicked.');
    setPersonsState({
      persons: [
        { name: 'Fabian', age: 13 },
        { name: 'Gabriel', age: 33 },
        { name: 'Stephanie', age: 24 }
      ]
    });
  };

  return (
    <div className="App">
      <h1>Hello React</h1>
      <p>This is really Working!</p>
      <button onClick={switchNameHandler}>Switch Me</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      >
        Hi i'm the Child!
      </Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );
};

export default App;
