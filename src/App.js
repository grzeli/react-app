import React, { Component } from 'react';
import classes from './App.css';
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
  let persons = null;
  let btnClass = '';
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
btnClass = classes.Red;
}

const assignedClasses = [];
if(this.state.numbers.length <= 2) {
  assignedClasses.push(classes.active);
}
if (this.state.numbers.length <= 1) {
  assignedClasses.push(classes.bold);
}

return (
  <div className={classes.App}>
  <h1>Hello world!</h1>
  <p className={assignedClasses.join(' ')}>dzin dobry</p>
  <button 
  className={btnClass}
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
