import React from 'react';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import {mount} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import ReviewsAndRatings from '../ReviewsAndRatings.jsx';

Enzyme.configure({ adapter: new Adapter() });

const RnR = shallow(<ReviewsAndRatings />);



describe ('Component Rendering', () => {
  it('renders without crashing', () => {
    RnR;
  });
});


