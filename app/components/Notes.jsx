import React from 'react';
import Note from './Note';

import Editable from './Editable';

export default ({
  notes,
  onNoteClick=() => {}, onEdit=() => {}, onDelete=() => {}
}) => (

  <ul className="notes">{notes.map(({id, editing, task}) =>
      <li key={id}>
        <Note className="note" onClick={onNoteClick.bind(null, id)}>
          <Editable
             editing={editing}
             value={task}
             onEdit={onEdit.bind(null, id)} />
          <button
            className="delete"
            onClick={onDelete.bind(null, id)}>x</button>
        </Note>
      </li>
    )}</ul>
  )

//bind allows us to set the function context (first parameter)
//and arguments (following parameters). This gives us a technique
//known as partial application.

//To keep our code from crashing if onDelete is not provided, I
//defined a dummy callback for it. Another good way to handle this
//would have been to go through propTypes
