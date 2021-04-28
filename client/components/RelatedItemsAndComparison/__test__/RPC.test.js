import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import RelatedItemsAndComparison from '../index.jsx';

Enzyme.configure({ adapter: new Adapter() });

const RPC = shallow(<RelatedItemsAndComparison />);

describe ('Component Rendering', () => {
  it('renders without crashing', () => {
    RPC;
  });
});