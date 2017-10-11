import React from 'react';
import Note from './Note';

export default ({notes, onDelete=() => {}}) => (
  <ul>{notes.map(({id, task}) =>
    <li key={id}>
      <Note
        onDelete={onDelete.bind(null, id)}
        task={task} />
    </li>
  )}</ul>
)

//bind allows us to set the function context (first parameter)
//and arguments (following parameters). This gives us a technique
//known as partial application.

//To keep our code from crashing if onDelete is not provided, I
//defined a dummy callback for it. Another good way to handle this
//would have been to go through propTypes
