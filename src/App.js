import React, { Component } from 'react';
import firebase from 'firebase';
import { View } from 'react-native';
import { Header } from './components/comon/';
import LoginForm from './components/LoginForm'

class App extends Component {

  componentWillMount() {
    firebase.initializeApp(
      {
      apiKey: 'AIzaSyAsE5w0armzsYQufGXUk4rDkpnGLBSg_ZU',
      authDomain: 'diary-cdp.firebaseapp.com',
      databaseURL: 'https://diary-cdp.firebaseio.com',
      projectId: 'diary-cdp',
      storageBucket: 'diary-cdp.appspot.com',
      messagingSenderId: '16123074122'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Zaloguj" />
      <LoginForm />
    </View>
    );
  }
}

export default App;
