import React from 'react';
import uuid from 'uuid';
import {compose} from 'redux';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import connect from '../libs/connect';
import Lanes from './Lanes';
import LaneActions from '../actions/LaneActions';
import '../main.css'

const App = ({LaneActions, lanes}) => {
  const addLane = () => {
    LaneActions.create({
      id: uuid.v4(),
      name: 'New lane'
    });
  };

  return (
    <div>
      <h1 className="header">Miguello</h1>
      <h2 className="sub-header">A basic <a className="trello">Trello</a> Clone built with React and Flux</h2>
      <button className="add-lane" onClick={addLane}>+</button>
      <Lanes lanes={lanes} />
    </div>
  );
};

export default compose(
  DragDropContext(HTML5Backend),
  connect(
    ({lanes}) => ({lanes}),
    {LaneActions}
  )
)(App)




//To prepare for the future I added an extra line in form
//of e.stopPropagation(). The idea of this is to tell the DOM to stop
//bubbling events. In short, we'll avoid triggering possible
//other events elsewhere in the structure if we delete a note.
