import React from 'react';
import { shallow, mount } from 'enzyme';

import { ThoughtList } from './thoughtList.js';

describe('ThoughtList', () => {

  it('has a thoughtList class field', () => {
    const test = [{title: 'Dev', body: 'Bull', id: 22}]
    const wrapper = shallow(<ThoughtList thoughtList={test}/>)
    const findClass = wrapper.find('.thoughtList')

    expect(findClass.length).toEqual(1)
  })

  it('has multiple ThoughtCard class fields', () => {
    const fakeData = [
      {title: 'Test', body: 'Test2', id: 1},
      {title: 'Test3', body: 'Test4', id: 2},
      {title: 'Test5', body: 'Test6', id: 3}
    ]
    const wrapper = mount(<ThoughtList thoughtList={fakeData}/>)
    const findIdeas = wrapper.find('.thoughtCard')
    expect(findIdeas.length).toEqual(3)
  })

});
