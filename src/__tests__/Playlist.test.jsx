import React from 'react';
import { shallow } from 'enzyme';

//import components
import PlaylistClass from './../components/Playlist';


const setup = (propOverrides) => {
  const props = Object.assign({
    playlist: [0, 1, 2, 3],
  }, propOverrides)

  const Playlist = shallow(<PlaylistClass {...props} />, { lifecycleExperimental: true })

  return {
    props,
    Playlist,
    PlaylistSection: Playlist.find('section.playlist'),
    PlaylistUl: Playlist.find('ul.playlist'),
    Song: Playlist.find('Song'),
  }
}

const { props } = setup();
const { Playlist } = setup();
const { slideIndex } = setup();
const { PlaylistSection } = setup();
const { PlaylistUl } = setup();
const { Song } = setup();

function renderTester(name, component) {
  test(`${name} component`, () => {
      expect(component.exists()).toBe(true);
    })
}

describe('Playlist.js', () => {
  describe('renders', () => {
    renderTester('Playlist', Playlist)
    renderTester('PlaylistSection', PlaylistSection)
    renderTester('PlaylistUl', PlaylistUl)
    renderTester('Song', Song)
  })
})
