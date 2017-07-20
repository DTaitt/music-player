import React, { Component } from 'react';

// material components
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import FontIcon from 'material-ui/FontIcon';

import Songlist from './Songlist.jsx';
import Playlist from './Playlist.jsx';

class TabBody extends Component {

  constructor() {
    super();
    this.state = {
      slideIndex: 0,
    };

    this.handleSlideChange = this.handleSlideChange.bind(this);
  }

  handleSlideChange(value) {
    this.setState({
      slideIndex: value,
    });
  };

  render() {
    return (
      <div className="tab-container">
        <Tabs onChange={this.handleSlideChange} value={this.state.slideIndex} >
          <Tab icon={<FontIcon className="material-icons">library_music</FontIcon>} label="Library" value={0} className="library-tab" />
          <Tab icon={<FontIcon className="material-icons">queue_music</FontIcon>} label="Playlist" value={1} className="playlist-tab" />
        </Tabs>
        <SwipeableViews index={this.state.slideIndex} onChangeIndex={this.handleSlideChange} >
          <div>
            <Songlist songData = { this.props.songData } addToPlaylist = { this.props.addToPlaylist } playlist = { this.props.playlist } />
          </div>
          <div>
            <Playlist songData = { this.props.songData } playlist = { this.props.playlist } />
          </div>
        </SwipeableViews>
      </div>
    )
  }
}

export default TabBody;
