import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state = {
    numbers: [
      { name: 'judie', number:'18'},
      { name: 'judies', number: '28'},
      { name: 'judiesh', number: '38'}
    ],
    showPersons: false
  }

clickHandler = (newName) => {
  this.setState({
    numbers: [
      { name: newName, number:'18'},
      { name: 'judies', number: '28'},
      { name: 'judiesh', number: '18'},
    ] 
  })
}

inputChangeHandler = (event) => {
  this.setState ({
    numbers: [
      { name: 'judie', number:'18'},
      { name: event.target.value, number: '28'},
      { name: 'judiesh', number: '38'}
    ]
  })
}

togglePersonHandler = () => {
  const doesShow = this.state.showPersons;
  this.setState({showPersons: !doesShow});
}

render() {
  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '5px 10px',
    cursor: 'pointer'
  };

  let persons = null;

  if (this.state.showPersons) {
    persons = (
      <div>
      <Person 
      name={this.state.numbers[0].name} 
      number={this.state.numbers[0].number} />
      <Person
      name={this.state.numbers[1].name} 
      number={this.state.numbers[1].number}
      click={this.clickHandler.bind(this, 'mudiess')}
  changed={this.inputChangeHandler} >
    Ferari
  </Person>
  <Person
  name={this.state.numbers[2].name} 
  number={this.state.numbers[2].number}/>
    </div> 
  )
}
return (
  <div className="App">
  <h1>Hello world!</h1>
  <button 
  style={style}
  onClick={this.togglePersonHandler}>
  Switch me!
  </button>
  {persons}
  </div>
);
//return React.createElement('div', {className: 'App'}, React.createElement('h1', 'null', 'hi hello all!!'));
}
}

export default App;
