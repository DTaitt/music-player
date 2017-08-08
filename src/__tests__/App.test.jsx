import React from 'react';
import {shallow} from 'enzyme';

//import components
import AppClass from './../App';

const App = shallow(<AppClass />, { lifecycleExperimental: true });

describe('App.js', () => {
  describe('rendering', () => {
    test('App component', () => {
      expect(App.exists()).toBe(true);
    })
    test('MuiThemeProvider component', () => {
      expect(App.find('MuiThemeProvider').exists()).toBe(true);
    })
    test('Header component', () => {
      expect(App.find('Header').exists()).toBe(true);
    })
    test('TabBody component', () => {
      expect(App.find('TabBody').exists()).toBe(true);
    })
  })
})
