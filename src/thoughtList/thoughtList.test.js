import React from 'react';
import { shallow, mount } from 'enzyme';

import { ThoughtList } from './thoughtList.js';

describe('ThoughtList', () => {

  it('has a thoughtList class field', () => {
    const wrapper = shallow(<ThoughtList/>)
    const findClass = wrapper.find('.thoughtList')

    expect(findClass.length).toEqual(1)
  })

  it('has multiple ThoughtCard class fields', () => {

  })

});
