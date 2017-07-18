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
      playlist: [],
    }

    this.addToPlaylist = this.addToPlaylist.bind(this);
  }

  addToPlaylist(songObject) {
    this.setState({
      playlist: this.state.playlist.concat(songObject),
    })
  }

  render() {
    console.log(this.state);
    return (
      <MuiThemeProvider>
        <div className="App">
          <Header />
          <Songlist songData = { this.state.songData } addToPlaylist = { this.addToPlaylist } playlist = { this.state.playlist } />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
