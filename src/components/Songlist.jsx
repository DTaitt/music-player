import React, { Component } from 'react';
import Song from './Song.jsx';

class Songlist extends Component {

  render() {
    return (
      <section className="songlist">
        <h1>Songlist</h1>
        <ul className="songlist">
        {
          this.props.songData.map((info, index) => {
            return <Song title={ info.title } album={ info.album } audio={ info.audio } key = { index } />
          })
        }
        </ul>
      </section>
    )
  }
}

export default Songlist;
