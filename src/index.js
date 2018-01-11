import React from 'react';
import { render } from 'react-dom';
import 'normalize.css';
import App from './App';
import { firebaseApp } from './firebase';
import { store, history } from './store/configureStore';
import * as actionCreators from './constants/index';

firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    console.log('User signed in', user);
    const {email} = user;
    store.dispatch(actionCreators.signedIn(email));
    history.push('/tasks');
  } else {
    console.log('User need sign in');
    history.push('/signin');
  }
});


const rootElement = document.getElementById('root');

render(<App />, rootElement);

if (module.hot) {
  module.hot.accept('./App', () => render(<App />, rootElement));
}