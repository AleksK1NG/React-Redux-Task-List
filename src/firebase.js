import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCrH7ePUzHwSQ-impM4hFs1zCb05bkwtgE",
  authDomain: "react-redux-tasklist.firebaseapp.com",
  databaseURL: "https://react-redux-tasklist.firebaseio.com",
  projectId: "react-redux-tasklist",
  storageBucket: "react-redux-tasklist.appspot.com",
  messagingSenderId: "58843249316"
};

export const firebaseApp = firebase.initializeApp(config);
export const taskRef = firebase.database().ref('tasks');
export const completeTaskRef = firebase.database().ref('completeTasks');