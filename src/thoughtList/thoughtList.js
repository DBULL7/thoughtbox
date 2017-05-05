import React from 'react';
import { ThoughtCard } from '../thoughtCard/thoughtCard.js'

export const ThoughtList = ({ thoughtList }) => {
  let ideas = thoughtList.map(thought => {
    if(thought.length == 0) {
      return <div></div>
    } else {
      return <ThoughtCard thought={thought}/>
    }
  })
  // console.log(ideas)
  return (
    <div className='thoughtList'>
      ThoughtList
      {ideas}
    </div>
  );
}
