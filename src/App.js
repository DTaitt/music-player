import React, { Component } from 'react';
import './App.css';
// import songData from '../songData.js';
// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Header from './components/Header.jsx';
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
        <MuiThemeProvider>
          <Header />
          <Songlist />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
