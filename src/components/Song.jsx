import React, { Component } from 'react';

//import material components
import Paper from 'material-ui/Paper';
import FontIcon from 'material-ui/FontIcon';
import { red500, blue500 } from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class Song extends Component {

  constructor() {
    super();
    this.state = {
      isLiked: false,
      isDisliked: false,
    }
  }

  toggleLike() {
    this.setState({
      isLiked: !this.state.isLiked,
    })
  }

  render() {
    return (
      <li>
        <Paper zDepth={3} rounded={false} className='song'>
          <h2 className="song_title">{ this.props.title }</h2>
          <p className="album_title">{ this.props.album }</p>
          <audio controls>
            <source src={ this.props.audio } type="audio/mp3"/>
          </audio>
          <div className="like_icons">
            <FontIcon className="material-icons" hoverColor={red500} >thumb_up</FontIcon>
            <FontIcon className="material-icons" hoverColor={blue500}>thumb_down</FontIcon>
          </div>
          <div className="like_or_not">
            <RaisedButton primary fullWidth = {true } label="Like"></RaisedButton>
            <RaisedButton secondary fullWidth = { true } label="Dislike"></RaisedButton>
          </div>
        </Paper>
      </li>
    )
  }
}

export default Song;
