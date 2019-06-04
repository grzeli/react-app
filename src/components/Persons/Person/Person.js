import React, { Component } from 'react';
import PropTypes from 'prop-types';

//import Aux from '../../../hoc/Auxiliary'
import classes from './Person.css';
import withClass from '../../../hoc/withClass'
import AuthContext from '../../../context/auth-context';

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }
  
  static contextType = AuthContext;
  
  componentDidMount() {
//    this.inputElement.focus();
    this.inputElementRef.current.focus();
    console.log(this.context.authenticated);
  }
  render() {
    console.log('[Person.js] rendering...');
    return (
      <React.Fragment>
        {this.context.authenticated ? <p>Authenticated!</p> : <p>please log in</p>}
        <p onClick={this.props.click}>I'm a {this.props.name} {this.props.number} {this.props.children}</p>
        <input 
          type="text"
//          ref={(inputEl) => {this.inputElement = inputEl}}
          ref={this.inputElementRef}
          onChange={this.props.changed} 
          value={this.props.name}/>
      </React.Fragment>
    );
  }
}
Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  number: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, classes.Person);