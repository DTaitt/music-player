import React from 'react';
import { shallow } from 'enzyme';

//import components
import TabBodyClass from './../components/TabBody';


const setup = (propOverrides) => {
  const TabBody = shallow(<TabBodyClass />)

  return {
    TabBody,
    slideIndex: TabBody.state('slideIndex'),
    Tabs: TabBody.find('Tabs'),
    Tab: TabBody.find('Tab'),
    TabContainerDiv: TabBody.find('.tab-container'),
    SwipeableViews: TabBody.find('SwipeableViews'),
    Songlist: TabBody.find('Songlist'),
    Playlist: TabBody.find('Playlist'),
  }
}

const { TabBody } = setup();
const { slideIndex } = setup();
const { Tabs } = setup();
const { Tab } = setup();
const { TabContainerDiv } = setup();
const { SwipeableViews } = setup();
const { Songlist } = setup();
const { Playlist } = setup();

function renderTester(name, component) {
  test(`${name} component`, () => {
      expect(component.exists()).toBe(true);
    })
}

describe('TabBody.js', () => {
  describe('renders', () => {
    renderTester('TabBody', TabBody)
    renderTester('Tabs', Tabs)
    renderTester('Tab', Tab)
    renderTester('SwipeableViews', SwipeableViews)
    renderTester('Songlist', Songlist)
    renderTester('Playlist', Playlist)
  })
  describe('calls', () => {
    test('handleSlideChange', () => {
      expect(TabBody.state('slideIndex')).toBe(0);
      TabBody.find('Tabs').simulate('change', 1);
      expect(TabBody.state('slideIndex')).toBe(1);
    })
  })
})
