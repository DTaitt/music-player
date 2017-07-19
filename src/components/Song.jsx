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
      isLiked: null,
    }
  }

  likeSong(likeStatus) {
    if (likeStatus === null) {
      this.setState({
        isLiked: true,
      })
    } else if (likeStatus === true) {
      this.setState({
        isLiked: null,
      })
    }
  }

  dislikeSong(likeStatus) {
    if (likeStatus === null) {
      this.setState({
        isLiked: false,
      })
    } else if (likeStatus === false) {
      this.setState({
        isLiked: null,
      })
    }
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
              onClick={ () => this.likeSong(this.state.isLiked) }
              color={
                this.state.isLiked
                ? red500
                : ""
              }
            >thumb_up</FontIcon>
            <FontIcon
              className="material-icons"
              onClick={ () => this.dislikeSong(this.state.isLiked) }
              color={
                this.state.isLiked === false
                ? red500
                : ""
              }
            >thumb_down</FontIcon>
            <FontIcon
              className="material-icons playlist-btn"
              onClick = { () => this.props.addToPlaylist(this.props.songObject) }
            >playlist_add</FontIcon>
          </div>
          <RaisedButton primary fullWidth = {true } className="material-icons playlist-btn" onClick = { () => this.props.addToPlaylist(this.props.songObject) } label="Add To Playlist"></RaisedButton>
        </Paper>
      </li>
    )
  }
}

export default Song;
