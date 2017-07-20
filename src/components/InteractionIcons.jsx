import React, { Component } from 'react';

import FontIcon from 'material-ui/FontIcon';
import { red500 } from 'material-ui/styles/colors';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class Songlist extends Component {

  render() {
    return (
      <div className="interaction-icons">
        {/*like button*/}
        <FontIcon
          className="material-icons like-btn"
          tabIndex="0"
          onTouchTap={ () => this.props.likeSong(this.props.isLiked) }
          color={
            this.props.isLiked
            ? red500
            : ""
          }
        >thumb_up</FontIcon>
        {/*dislike button*/}
        <FontIcon
          className="material-icons dislike-btn"
          tabIndex="0"
          onTouchTap={ () => this.props.dislikeSong(this.props.isLiked) }
          color={
            this.props.isLiked === false
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
            this.props.changePlaylistState();
          } }
          color={
            this.props.isInPlaylist === true
            ? red500
            : ""
          }
        >playlist_add</FontIcon>
      </div>
    )
  }
}

export default Songlist;
