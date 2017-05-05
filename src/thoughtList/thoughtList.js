import React from 'react';
import { ThoughtCard } from '../thoughtCard/thoughtCard.js'

export const ThoughtList = ({ thoughtList }) => {
  let ideas = thoughtList.map(thought => {
      return <ThoughtCard thought={thought} key={thought.id}/>
  })
  return (
    <div className='thoughtList'>
      ThoughtList
      {ideas}
    </div>
  );
}
