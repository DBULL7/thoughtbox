import React from 'react';

export const ThoughtCard = ({thought}) => {
  return (
    <div className='thoughtCard'>
      <p className="title">{thought.title}</p>
      <br/>
      <p className='body'>{thought.body}</p>
    </div>
  )
}
