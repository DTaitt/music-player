import React from 'react';
import { shallow } from 'enzyme';

//import components
import TabBodyClass from './../components/TabBody';


const setup = (propOverrides) => {
  const props = Object.assign({
    onChange: jest.fn(),
  }, propOverrides)

  const TabBody = shallow(<TabBodyClass {...props} />, { lifecycleExperimental: true })

  return {
    props,
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

const { props } = setup();
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
})
