import React, { Component } from 'react';
import SongInfo from './SongInfo.jsx';
import InteractionIcons from './InteractionIcons.jsx';
import AudioPlayer from 'react-h5-audio-player';


//import material components
import Paper from 'material-ui/Paper';

class Song extends Component {

  constructor() {
    super();
    this.state = {
      isLiked: null,
      isInPlaylist: false,
    }

    this.likeSong = this.likeSong.bind(this);
    this.dislikeSong = this.dislikeSong.bind(this);
    this.changePlaylistState = this.changePlaylistState.bind(this);
  }

  likeSong(likeStatus) {
    likeStatus === true
    ? this.setState({
        isLiked: null,
      })
    : this.setState({
        isLiked: true,
      })
  }

  dislikeSong(likeStatus) {
    likeStatus === false
    ? this.setState({
        isLiked: null,
      })
    : this.setState({
        isLiked: false,
      })
  }

  changePlaylistState() {
    this.setState(prevState => ({
      isInPlaylist: !prevState.isInPlaylist,
    }));
  };

  render() {
    return (
      <li className="song">
        <Paper zDepth={3} rounded={false} className='song'>
          <SongInfo className="song-info" artist={ this.props.artist } title={ this.props.title } album={ this.props.album } />
          <div className="audio-player">
            <AudioPlayer className="audio-player-component" src={ this.props.audio } />
          </div>
          <InteractionIcons
            className="interaction-icons"
            likeSong={ this.likeSong }
            dislikeSong={ this.dislikeSong }
            changePlaylistState={ this.changePlaylistState }
            isLiked={ this.state.isLiked }
            isInPlaylist={ this.state.isInPlaylist }
            addToPlaylist={ this.props.addToPlaylist }
            playlist={ this.props.playlist }
            songObject={ this.props.songObject } />
        </Paper>
      </li>
    )
  }
}

export default Song;
