import React, { Component } from 'react';

// material components
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';

import Songlist from './Songlist.jsx';
import Playlist from './Playlist.jsx';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    padding: 10,
  },
};

class TabBody extends Component {

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({
      slideIndex: value,
    });
  };

  render() {
    return (
      <div>
        <Tabs onChange={this.handleChange} value={this.state.slideIndex} >
          <Tab label="Library" value={0} />
          <Tab label="Playlist" value={1} />
        </Tabs>
        <SwipeableViews index={this.state.slideIndex} onChangeIndex={this.handleChange} >
          <div>
            <Songlist songData = { this.props.songData } addToPlaylist = { this.props.addToPlaylist } playlist = { this.props.playlist } />
          </div>
          <div style={styles.slide}>
            <Playlist songData = { this.props.songData } playlist = { this.props.playlist } />
          </div>
        </SwipeableViews>
      </div>
    )
  }
}

export default TabBody;
