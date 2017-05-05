import React from 'react';
import { shallow } from 'enzyme';

import { ThoughtCard } from './thoughtCard.js';

describe('ThoughtCard', () => {

  it('has a thoughtCard class field', () => {
    const fakeObj = {title: 'Devon', body: 'Bull'}
    const wrapper = shallow(<ThoughtCard thought={fakeObj}/>)
    const findClass = wrapper.find('.thoughtCard')
    expect(findClass.length).toEqual(1)
  });

  it('has a title and body', () => {
    const fakeObj = {title: 'Devon', body: 'Bull'}
    const wrapper = shallow(<ThoughtCard thought={fakeObj}/>)
    let findTitle = wrapper.find('.title')
    let findBody = wrapper.find('.body')
    expect(findTitle.text()).toEqual('Devon')
    expect(findBody.text()).toEqual('Bull')
  });

});
