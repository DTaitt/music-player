import React, { Component } from 'react';
import Song from './Song.jsx';

class Songlist extends Component {

  render() {
    return (
      <section className="songlist">
        <ul className="songlist">
        {
          this.props.songData.map((info) => {
            return <Song songObject = { info } title={ info.title } album={ info.album } audio={ info.audio } key = { info.id } filetype = { info.filetype } addToPlaylist = { this.props.addToPlaylist } playlist = { this.props.playlist } />
          })
        }
        </ul>
      </section>
    )
  }
}

export default Songlist;
