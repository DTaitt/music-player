import React, { Component } from 'react';

//import material components
import Paper from 'material-ui/Paper';
import FontIcon from 'material-ui/FontIcon';
import { red500 } from 'material-ui/styles/colors';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class Song extends Component {

  constructor() {
    super();
    this.state = {
      isLiked: null,
      isInPlaylist: false,
    }

    this.changePlaylistState = this.changePlaylistState.bind(this);
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

  changePlaylistState() {
    if (this.props.playlist.indexOf(this.props.songObject) === -1) {
      this.setState({
        isInPlaylist: true,
      })
    }
  };

  render() {
    return (
      <li>
        <Paper zDepth={3} rounded={false} className='song'>
          <div className="song-info" tabIndex="0">
            <h2 className="artist" tabIndex="0">Artist: { this.props.artist }</h2>
            <h2 className="song-title" tabIndex="0">Song: { this.props.title }</h2>
            <p className="album-title" tabIndex="0">Album: { this.props.album }</p>
          </div>
          <div className="audio-player">
            <audio id={ this.props.audio } controls>
              <source src={ this.props.audio } type={ `audio/${ this.props.filetype }` }/>
            </audio>
            {/*<FontIcon className="material-icons play-btn" onTouchTap={ () => this.props.audio.play() }>play_circle_filled</FontIcon>
            <FontIcon className="material-icons play-btn">pause_circle_filled</FontIcon>*/}
          </div>
          <div className="interaction-icons">
            {/*like button*/}
            <FontIcon
              className="material-icons like-btn"
              tabIndex="0"
              onTouchTap={ () => this.likeSong(this.state.isLiked) }
              color={
                this.state.isLiked
                ? red500
                : ""
              }
            >thumb_up</FontIcon>
            {/*dislike button*/}
            <FontIcon
              className="material-icons dislike-btn"
              tabIndex="0"
              onTouchTap={ () => this.dislikeSong(this.state.isLiked) }
              color={
                this.state.isLiked === false
                ? red500
                : ""
              }
            >thumb_down</FontIcon>
            {/*add to playlist button*/}
            <FontIcon
              className="material-icons playlist-btn"
              tabIndex="0"
              onTouchTap = { () => {
                this.props.addToPlaylist(this.props.songObject);
                this.changePlaylistState();
              } }
              color={
                this.state.isInPlaylist === true
                ? red500
                : ""
              }
            >playlist_add</FontIcon>
          </div>
        </Paper>

      </li>
    )
  }
}

export default Song;
