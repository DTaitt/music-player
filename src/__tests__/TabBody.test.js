import React from 'react';
import {shallow} from 'enzyme';
import TabBodyClass from '../components/TabBody.jsx';

test('Slide Index changes on click of tab', () => {
  // Renders tabs in document
  const TabBody = shallow(
    <TabBodyClass />
  );

  console.log(`The initial index is ${TabBody.state('slideIndex')}`);
  expect(TabBody.state('slideIndex')).toBe(0);

  console.log(TabBody.find('Tabs').props());
  TabBody.find('Tabs').simulate('change', 1);

  expect(TabBody.state('slideIndex')).toBe(1);
  console.log(`The final index is ${TabBody.state('slideIndex')}`);

});
