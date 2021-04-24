import React from 'react';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import {mount} from 'enzyme';
import QandA_app from '../QandA_app';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });


describe('Q&A testing', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(
    <QandA_app
      currentItem={{id: 19089}}
      click={jest.fn()}
      />
  ));
  it('should render the Q&A widget correctly', () => expect(wrapper).toMatchSnapshot());
  it('should render a div', () => {
    expect(wrapper.find('div.questionsandanswers').length).toEqual(1);
  });
  it('should render the qa search div', () => {
    expect(wrapper.find('div.qasearch').length).toEqual(1);
  });
  it('should render the qa list div', () => {
    expect(wrapper.find('div.qalist').length).toEqual(1);
  });
  it('should render the addqmodal div', () => {
    expect(wrapper.find('div.addqmodal').length).toEqual(1);
  });
  it('should render state appropriately', () => {
    expect(wrapper.state('addQ')).toEqual(false);
  });
})





