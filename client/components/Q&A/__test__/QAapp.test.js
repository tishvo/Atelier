import React from 'react';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import {mount} from 'enzyme';
import QandA_app from '../QandA_app';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

describe('Component Rendering', () => {
  it('renders without crashing', () => {
    shallow(<QandA_app currentItem={{id: 19089}}/>);
  });
});

describe('dummy test', () => {
  it('should add', () => {
    expect(1+2).toBe(3);
  })
})