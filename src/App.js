import React, { Component } from 'react';
import './App.css';
import List from './List.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h3>노래 리스트</h3>
        </header>
        <List/>
      </div>
    );
  }
}

export default App;