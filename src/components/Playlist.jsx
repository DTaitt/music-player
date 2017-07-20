import React, { Component } from 'react';
import Song from './Song.jsx';

class Playlist extends Component {

  render() {
    return (
      <section className="playlist">
        <ul className="playlist">
        {
          this.props.playlist.map((info) => {
            return <Song songObject = { info } artist={ info.artist } title={ info.title } album={ info.album } audio={ info.audio } key = { info.id } filetype = { info.filetype } addToPlaylist = { this.props.addToPlaylist } playlist = { this.props.playlist } />
          })
        }
        </ul>
      </section>
    )
  }
}

export default Playlist;
