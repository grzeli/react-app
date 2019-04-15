import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state = {
    numbers: [
      { id:'1', name: 'judie', number:'18'},
      { id:'fdfd', name: 'judies', number: '28'},
      { id:'dfsgsdg', name: 'judiesh', number: '38'}
    ],
    showPersons: false
  }

inputChangeHandler = ( event, id ) => {
  const personIndex = this.state.numbers.findIndex(p => {
    return p.id === id;
  });
  const person = {
    ...this.state.numbers[personIndex]
  };
  person.name = event.target.value;
  const persons = [...this.state.numbers];
  persons[personIndex] = person;  
  this.setState( {numbers: persons} )
}

deletePersonHandler = (personIndex) => {
  //const persons = this.state.numbers;
  const persons = [...this.state.numbers];
  persons.splice(personIndex, 1);
  this.setState({numbers: persons})
}

togglePersonHandler = () => {
  const doesShow = this.state.showPersons;
  this.setState({showPersons: !doesShow});
}

render() {
  const style = {
    backgroundColor: 'green',
    font: 'inherit',
    border: '1px solid blue',
    padding: '5px 10px',
    cursor: 'pointer',
    color:'white',
  };

  let persons = null;

  if (this.state.showPersons) {
    persons = (
      <div>
      {this.state.numbers.map((person, index) => {
       return <Person 
       click={() => this.deletePersonHandler(index)}
      name={person.name}
      number={person.number}
      key={person.id}
      changed={(event) => this.inputChangeHandler(event, person.id)} />
})}
  </div> 
);
style.backgroundColor = 'red';
style[':hover'] = {
  backgroundColor: 'salmon',
  color:'black'
  }
}

const classes = [];
if(this.state.numbers.length <= 2) {
  classes.push('active');
}
if (this.state.numbers.length <= 1) {
  classes.push('bold');
}

return (
  <div className="App">
  <h1>Hello world!</h1>
  <p className={classes.join(' ')}>dzin dobry</p>
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
