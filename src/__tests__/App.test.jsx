import React from 'react';
import {shallow} from 'enzyme';
import AppClass from './../App';

const App = shallow(<AppClass />);

describe('App.js', () => {
  describe('rendering', () => {
    test('App component', () => {
      expect(App.exists()).toBe(true);
    })
  })
})
