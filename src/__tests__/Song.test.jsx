import React from 'react';
import { shallow } from 'enzyme';

//import components
import SongClass from './../components/Song';


const setup = (propOverrides) => {
  // const props = Object.assign({
  //   Song: [0, 1, 2, 3],
  // }, propOverrides)

  const Song = shallow(<SongClass /*{...props} *//>, { lifecycleExperimental: true })

  return {
    // props,
    Song,
    SongLi: Song.find('li.song'),
    Paper: Song.find('Paper'),
    SongInfo: Song.find('.song-info'),
    AudioPlayerDiv: Song.find('div.audio-player'),
    AudioPlayer: Song.find('.audio-player-component'),
    InteractionIcons: Song.find('.interaction-icons'),
  }
}


const { props } = setup();
const { Song } = setup();
const { slideIndex } = setup();
const { SongLi } = setup();
const { Paper } = setup();
const { SongInfo } = setup();
const { AudioPlayerDiv } = setup();
const { AudioPlayer } = setup();
const { InteractionIcons } = setup();

function renderTester(name, component) {
  test(`${name} component`, () => {
      expect(component.exists()).toBe(true);
    })
}

describe('Song.js', () => {
  describe('renders', () => {
    renderTester('Song', Song)
    renderTester('SongLi', SongLi)
    renderTester('Paper', Paper)
    renderTester('SongInfo', SongInfo)
    renderTester('AudioPlayerDiv', AudioPlayerDiv)
    renderTester('AudioPlayer', AudioPlayer)
    renderTester('InteractionIcons', InteractionIcons)
  })
})
