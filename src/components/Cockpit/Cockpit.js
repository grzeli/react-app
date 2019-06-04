import React, { useEffect, useRef, useContext } from 'react';

import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);
  
  console.log(authContext.authenticated);
  
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
   /* setTimeout(() => {
      alert('Saved data to cloud');
    }, 1000);*/
    toggleBtnRef.current.click();
    
    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect');
    };
  }, []);
  
  const assignedClasses = [];
  let btnClass = '';
  if (props.showPersons) {
    btnClass = classes.Red;
  }
  if(props.personsLngth <= 2) {
  assignedClasses.push(classes.active);
  }
  if (props.personsLength <= 1) {
  assignedClasses.push(classes.bold);
  } 
  
  return(
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>dzin dobry</p>
      <button
        ref={toggleBtnRef}
        className={btnClass}
        onClick={props.clicked}>
        Switch me!
      </button>
          {<button onClick={authContext.login}>Log in</button>}
    </div>
  );
};

export default React.memo(cockpit);