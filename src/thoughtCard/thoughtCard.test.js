import React from 'react';
import { shallow } from 'enzyme';

import { ThoughtCard } from './thoughtCard.js';

describe('ThoughtCard', () => {

  it('has a thoughtCard class field', () => {
    const wrapper = shallow(<ThoughtCard/>)
    const findClass = wrapper.find('.thoughtCard')
    expect(findClass.length).toEqual(1)
  });

  it('has a title and body', () => {
  });

});
