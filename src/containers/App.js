import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Auxiliary from '../hoc/Auxiliary';
import AuthContext from '../context/auth-context';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }
  
  state = {
    numbers: [
      { id:'1', name: 'judie', number: 18},
      { id:'fdfd', name: 'judies', number: 28},
      { id:'dfsgsdg', name: 'judiesh', number: 88 }
    ],
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
  }

static getDerivedStateFromProps(props, state) {
  console.log('[App.js] getDerivedStateFromProps', props)
  return state;
}
componentDidMount() {
  console.log('[App.js] componentDidMount');
}

shouldComponentUpdate(nextProps, nextState) {
  console.log('[App.js] shouldComponentUpdate');
  return true;
}

componentDidUpdate() {
  console.log('[App.js] componentdidupdate');
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
  
  this.setState((prevState, props) => {
    return {
      numbers: persons,
      changeCounter: prevState.changeCounter +1
    };
  });
};

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

loginHandler = () => {
  this.setState({authenticated: true});
};

render() {
  console.log('[App.js] render')
  let persons = null;
  if (this.state.showPersons) {
    persons = <Persons
        persons={this.state.numbers}
        clicked={this.deletePersonHandler}
        changed={this.inputChangeHandler}
        isAuthenticated={this.state.authenticated}
    />;
}

return (
  <Auxiliary>
  <button onClick={() => {this.setState({showCockpit: false})}} >Remove cockpit</button>
  <AuthContext.Provider value={ {
    authenticated: this.state.authenticated,
    login: this.loginHandler
  } } >
{this.state.showCockpit ? ( 
    <Cockpit
    title={this.props.appTitle}
    showPersons={this.state.showPersons}
    personsLength={this.state.numbers.length}
    clicked={this.togglePersonHandler}
    />
  ) : null }
    {persons}
  </AuthContext.Provider>
  </Auxiliary >
);
//return React.createElement('div', {className: 'App'}, React.createElement('h1', 'null', 'hi hello all!!'));
}
}

export default withClass(App, classes.App);
