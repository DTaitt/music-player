import React, { Component } from 'react';
import songData from '../songData.js';

// console.log(songData);

class Song extends Component {
  render() {
    return (
      <section className='song'>
        <h1>{ this.props.title }</h1>
        <h1>{ this.props.album }</h1>
        <audio controls>
          <source src={ this.props.audio } type="audio/mp3"/>
        </audio>
      </section>
    )
  }
}

export default Song;
