import React, { Component } from 'react';
import './App.css';

//import song data
import songData from './songData.js';

//import material components
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

//import components
import Header from './components/Header.jsx';
import TabBody from './components/TabBody.jsx';

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
      this.setState(prevState => ({
        playlist: prevState.playlist.concat(songObject),
      }));
    } else {
      this.setState(prevState => ({
        playlist: prevState.playlist.filter(song => {
          return song !== songObject;
        })
      }))
    }
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Header />
          <main>
            <TabBody songData = { this.state.songData } addToPlaylist = { this.addToPlaylist } playlist = { this.state.playlist } />
          </main>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
