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

function renderTester(name, component) {
  test(`${name} component`, () => {
      expect(component.exists()).toBe(true);
    })
}

describe('App.js', () => {
  describe('renders', () => {
    renderTester('App', App)
    renderTester('MuiThemeProvider', MuiThemeProvider)
    renderTester('appDiv', appDiv)
    renderTester('Header', Header)
    renderTester('TabBody', TabBody)
  })
  describe('calls', () => {
    test('fetchSongData', () => {
      expect(songData).not.toBeNull();
    })
  })
})
