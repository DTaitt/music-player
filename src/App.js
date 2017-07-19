import React, { Component } from 'react';
import './App.css';

//import song data
import songData from './songData.js';

//import material components
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

//import components
import Header from './components/Header.jsx';
import TabBody from './components/TabBody.jsx';
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
    // check to see if song is already in playlist
    if (this.state.playlist.indexOf(songObject) === -1) {
      this.setState({
        playlist: this.state.playlist.concat(songObject),
      })
    }
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Header />
          <TabBody songData = { this.state.songData } addToPlaylist = { this.addToPlaylist } playlist = { this.state.playlist } />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
