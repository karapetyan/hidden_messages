import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HiddenMessages from './components/HiddenMessages/HiddenMessages';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HiddenMessages />
      </div>
    );
  }
}

export default App;
