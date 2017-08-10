import React from 'react';
import { shallow } from 'enzyme';

//import components
import AppClass from './../App';


const setup = (propOverrides) => {
  const props = Object.assign({
    fetchSongData: jest.fn(),
    addToPlaylist: jest.fn(),
  }, propOverrides)

  const App = shallow(<AppClass {...props} />, { lifecycleExperimental: true })

  return {
    props,
    App,
    songData: App.state('songData'),
    playlist: App.state('playlist'),
    MuiThemeProvider: App.find('MuiThemeProvider'),
    appDiv: App.find('div.App'),
    Header: App.find('Header'),
    TabBody: App.find('TabBody'),
  }
}

const { props } = setup();
const { App } = setup();
const { songData } = setup();
const { playlist } = setup();
const { MuiThemeProvider } = setup();
const { appDiv } = setup();
const { Header } = setup();
const { TabBody } = setup();

describe('App.js', () => {
  describe('renders', () => {
    test('App component', () => {
      expect(App.exists()).toBe(true);
    })
    test('MuiThemeProvider component', () => {
      expect(MuiThemeProvider.exists()).toBe(true);
    })
    test('appDiv component', () => {
      expect(appDiv.exists()).toBe(true);
    })
    test('Header component', () => {
      expect(Header.exists()).toBe(true);
    })
    test('TabBody component', () => {
      expect(TabBody.exists()).toBe(true);
    })
  })
  describe('calls', () => {
    test('fetchSongData', () => {
      expect(songData).not.toBeNull();
    })
  })
})
