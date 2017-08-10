import React from 'react';
import { shallow } from 'enzyme';

//import components
import SonglistClass from './../components/Songlist';


const setup = (propOverrides) => {
  const props = Object.assign({
    songData: [0, 1, 2, 3],
  }, propOverrides)

  const Songlist = shallow(<SonglistClass {...props} />, { lifecycleExperimental: true })

  return {
    props,
    Songlist,
    SonglistSection: Songlist.find('section.songlist'),
    SonglistUl: Songlist.find('ul.songlist'),
    Song: Songlist.find('Song'),
  }
}

const { props } = setup();
const { Songlist } = setup();
const { slideIndex } = setup();
const { SonglistSection } = setup();
const { SonglistUl } = setup();
const { Song } = setup();

describe('Songlist.js', () => {
  describe('renders', () => {
    test('Songlist component', () => {
      expect(Songlist.exists()).toBe(true);
    })
    test('SonglistSection component', () => {
      expect(SonglistSection.exists()).toBe(true);
    })
    test('SonglistUl component', () => {
      expect(SonglistUl.exists()).toBe(true);
    })
    test('Song component', () => {
      expect(Song.exists()).toBe(true);
    })
  })
})
