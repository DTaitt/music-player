import React, { Component } from 'react';
import songData from '../songData.js';
import Song from './Song.jsx';

// console.log(songData);

class Songlist extends Component {

  constructor() {
    super()
    this.state = {
      songData: songData,
    }

    console.log(songData);
  }

  render() {
    return (
      <ul className="songlist">
        { true
          ?
          this.state.songData.map((info, index) => {
            return <Song title={ info.title } album={ info.album } audio={ info.audio } key = { index } />
          })
          :
          console.log('welp') }

      </ul>
    )
  }
}

export default Songlist;
