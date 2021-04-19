import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Overview from '../Overview.jsx';

Enzyme.configure({ adapter: new Adapter() });

const Ov = shallow(< Overview currentItem={{id: 10}} />);

describe('Component Rendering', () => {
  it('renders without crashing', () => {
    Ov;
  });
});

describe('dummy test', () => {
  it('should add', () => {
    expect(1 + 2).toBe(3);
  })
})

