import React from 'react';
import { shallow } from 'enzyme';

//import components
import SongInfoClass from './../components/SongInfo';


const setup = (propOverrides) => {
  // const props = Object.assign({
  //   songData: [0, 1, 2, 3],
  // }, propOverrides)

  const SongInfo = shallow(<SongInfoClass />, { lifecycleExperimental: true })

  return {
    // props,
    SongInfo,
    SongInfoDiv: SongInfo.find('div.song-info'),
  }
}

// const { props } = setup();
const { SongInfo } = setup();
const { SongInfoDiv } = setup();

function renderTester(name, component) {
  test(`${name} component`, () => {
      expect(component.exists()).toBe(true);
    })
}

describe('SongInfo.js', () => {
  describe('renders', () => {
    renderTester('SongInfo', SongInfo)
    renderTester('SongInfoDiv', SongInfoDiv)
  })
})
