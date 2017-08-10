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

function renderTester(name, component) {
  test(`${name} component`, () => {
      expect(component.exists()).toBe(true);
    })
}

describe('Songlist.js', () => {
  describe('renders', () => {
    renderTester('Songlist', Songlist)
    renderTester('SonglistSection', SonglistSection)
    renderTester('SonglistUl', SonglistUl)
    renderTester('Song', Song)
  })
})
