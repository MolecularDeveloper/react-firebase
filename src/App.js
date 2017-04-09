import React, { Component } from 'react';
import ThreadDisplay from './ThreadDisplay/components/ThreadDisplay';
import './App.css';
import firebase from 'firebase/app';
import 'firebase/database';

class App extends Component {
  constructor(props) {
    super(props);
      // Initialize Firebase
    const config = {
    apiKey: "AIzaSyCRBcGPiRHa78AGex4Uyk7u4zAygRp7ZR0",
    authDomain: "react-firebase-d3d74.firebaseapp.com",
    databaseURL: "https://react-firebase-d3d74.firebaseio.com",
    projectId: "react-firebase-d3d74",
    storageBucket: "react-firebase-d3d74.appspot.com",
    messagingSenderId: "845142633072"
    };

    this.app = firebase.initializeApp(config);
    this.database = this.app.database();
  }
  render() {
    return (
      <ThreadDisplay database={this.database} />
    );
  }
}

export default App;
