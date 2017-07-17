import React, { Component } from 'react';
import './App.css';
// import songData from '../songData.js';

import Songlist from './components/Songlist.jsx';

class App extends Component {

  // constructor() {
  //   this.state = {
  //     songData: songData,
  //   }
  // }

  render() {
    return (
      <div className="App">
        <Songlist />
      </div>
    );
  }
}

export default App;
