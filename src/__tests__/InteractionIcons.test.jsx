import React from 'react';
import { shallow } from 'enzyme';

//import components
import InteractionIconsClass from './../components/InteractionIcons';


const setup = (propOverrides) => {
  const InteractionIcons = shallow(<InteractionIconsClass />, { lifecycleExperimental: true })

  return {
    InteractionIcons,
    InteractionIconsDiv: InteractionIcons.find('div.interaction-icons'),
    LikeBtn: InteractionIcons.find('FontIcon.like-btn'),
    DislikeBtn: InteractionIcons.find('FontIcon.dislike-btn'),
    PlaylistBtn: InteractionIcons.find('FontIcon.playlist-btn'),
  }
}

const { InteractionIcons } = setup();
const { InteractionIconsDiv } = setup();
const { LikeBtn } = setup();
const { DislikeBtn } = setup();
const { PlaylistBtn } = setup();


function renderTester(name, component) {
  test(`${name} component`, () => {
      expect(component.exists()).toBe(true);
    })
}

describe('InteractionIcons.js', () => {
  describe('renders', () => {
    renderTester('InteractionIcons', InteractionIcons)
    renderTester('InteractionIconsDiv', InteractionIconsDiv)
    renderTester('LikeBtn', LikeBtn)
    renderTester('DislikeBtn', DislikeBtn)
    renderTester('PlaylistBtn', PlaylistBtn)
  })
})
