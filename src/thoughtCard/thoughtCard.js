import React from 'react';

export const ThoughtCard = ({thought}) => {
  return (
    <div className='thoughtCard'>
      <p>{thought.title}</p>
      <p>{thought.body}</p>
    </div>
  )
}
