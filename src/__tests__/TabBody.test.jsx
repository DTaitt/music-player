import React from 'react';
import { shallow } from 'enzyme';

//import components
import TabBodyClass from './../components/TabBody';


const setup = (propOverrides) => {
  const props = Object.assign({
    handleSlideChange: jest.fn(),
  }, propOverrides)

  const TabBody = shallow(<TabBodyClass {...props} />, { lifecycleExperimental: true })

  return {
    props,
    TabBody,
    slideIndex: TabBody.state('slideIndex'),
    Tabs: TabBody.find('Tabs'),
    Tab: TabBody.find('Tab'),
    SwipeableViews: TabBody.find('SwipeableViews'),
    Songlist: TabBody.find('Songlist'),
    Playlist: TabBody.find('Playlist'),
  }
}

const { props } = setup();
const { TabBody } = setup();
const { slideIndex } = setup();
const { Tabs } = setup();
const { Tab } = setup();
const { SwipeableViews } = setup();
const { Songlist } = setup();
const { Playlist } = setup();

describe('TabBody.js', () => {
  describe('renders', () => {
    test('TabBody component', () => {
      expect(TabBody.exists()).toBe(true);
    })
    test('Tabs component', () => {
      expect(Tabs.exists()).toBe(true);
    })
    test('Tab component', () => {
      expect(Tab.exists()).toBe(true);
    })
    test('SwipeableViews component', () => {
      expect(SwipeableViews.exists()).toBe(true);
    })
    test('Songlist component', () => {
      expect(Songlist.exists()).toBe(true);
    })
    test('Playlist component', () => {
      expect(Playlist.exists()).toBe(true);
    })
  })
  // describe('calls', () => {
  //   test('fetchSongData', () => {
  //     expect(songData).not.toBeNull();
  //   })
  // })
})
