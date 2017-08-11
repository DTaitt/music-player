import React from 'react';
import { shallow } from 'enzyme';

//import components
import HeaderClass from './../components/Header';


const setup = (propOverrides) => {
  // const props = Object.assign({
  //   songData: [0, 1, 2, 3],
  // }, propOverrides)

  const Header = shallow(<HeaderClass />, { lifecycleExperimental: true })

  return {
    // props,
    Header,
    header: Header.find('header'),
  }
}

// const { props } = setup();
const { Header } = setup();
const { header } = setup();

function renderTester(name, component) {
  test(`${name} component`, () => {
      expect(component.exists()).toBe(true);
    })
}

describe('Header.js', () => {
  describe('renders', () => {
    renderTester('Header', Header)
    renderTester('header', header)
  })
})
