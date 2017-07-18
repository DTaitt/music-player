import React, { Component } from 'react';
import './App.css';

//import song data
import songData from './songData.js';

//import material ui theme
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

//import components
import Header from './components/Header.jsx';
import Songlist from './components/Songlist.jsx';

class App extends Component {

  constructor() {
    super()
    this.state = {
      songData: songData,
      // isLiked: null,
    }
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Header />
          <Songlist songData = { this.state.songData } />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
