import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28},
      { name: 'ZP', age: 30},
      { name: 'Zolika', age: 24}
    ]
  }

  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: 'Maximilian', age: 28},
        { name: 'Zepe', age: 30},
        { name: 'Zolika', age: 23}
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name="ZP" age="30">My hobbies: Racing</Person>
        <Person name="Zolika" age="24" />
      </div>
    );
    //return React.createElement('div', null, 'h1', 'Hi, I\'m a React App!!!');
  }
}

export default App;
