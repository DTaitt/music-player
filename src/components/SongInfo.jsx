import React, { Component } from 'react';

class Songlist extends Component {

  render() {
    return (
      <div className="song-info" tabIndex="0">
        <h2 className="artist" tabIndex="0">Artist: { this.props.artist }</h2>
        <h2 className="song-title" tabIndex="0">Song: { this.props.title }</h2>
        <h3 className="album-title" tabIndex="0">Album: { this.props.album }</h3>
      </div>
    )
  }
}

export default Songlist;
