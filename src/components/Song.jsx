import React, { Component } from 'react';
import songData from '../songData.js';

import Paper from 'material-ui/Paper';
// import Paper from 'react-md/lib/Papers';
import RaisedButton from 'material-ui/RaisedButton';
// import Button from 'react-md/lib/Buttons/Button';

// console.log(songData);

const style = {
  // height: 100,
  // width: 100,
  // margin: 20,
  // textAlign: 'center',
  // display: 'inline-block',
};

class Song extends Component {
  render() {
    return (
      <li>
        <Paper style={style} zDepth={3} rounded={false} className='song'>
          <h1>{ this.props.title }</h1>
          <h1>{ this.props.album }</h1>
          <audio controls>
            <source src={ this.props.audio } type="audio/mp3"/>
          </audio>
          <div className="btn-example">
            <RaisedButton primary label="Like"></RaisedButton>
            <RaisedButton secondary label="Dislike"></RaisedButton>
          </div>
        </Paper>
      </li>
    )
  }
}

export default Song;
