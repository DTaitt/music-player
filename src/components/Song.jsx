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
            <source src={ this.props.audio } type={ `audio/${ this.props.filetype }` }/>
          </audio>
          <div className="like_icon">
            <FontIcon
              className="material-icons"
              onClick={ () => this.toggleLike() }
              color={
                this.state.isLiked
                ? red500
                : ""
              }
            >thumb_up</FontIcon>
          </div>
          <RaisedButton primary fullWidth = {true } className="playlist_btn" onClick = { () => this.props.addToPlaylist(this.props.songObject) } label="Add To Playlist"></RaisedButton>
        </Paper>
      </li>
    )
  }
}

export default Song;
