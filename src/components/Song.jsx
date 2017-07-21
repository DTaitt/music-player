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
      <li>
        <Paper zDepth={3} rounded={false} className='song'>
          <SongInfo artist={ this.props.artist } title={ this.props.title } album={ this.props.album } />
          <div className="audio-player">
            {/*<audio className={ this.props.audio } controls>
              <source src={ this.props.audio } type={ `audio/${ this.props.filetype }` }/>
            </audio>*/}
            {/*<FontIcon className="material-icons play-btn" onTouchTap={ () => this.props.audio.play() }>play_circle_filled</FontIcon>
            <FontIcon className="material-icons play-btn">pause_circle_filled</FontIcon>*/}
            <AudioPlayer
              src={ this.props.audio }
            />
          </div>
          <InteractionIcons
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
