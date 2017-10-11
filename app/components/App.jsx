import React from 'react';
import uuid from 'uuid';
import Notes from './Notes';


export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [
        {
          id: uuid.v4(),
          task: 'Learn React'
        },
        {
          id: uuid.v4(),
          task: 'Do laundry'
        }
      ]
    };
  }
  render() {
    const {notes} = this.state;

    return (
      <div>
        <button onClick={() => console.log('add note')}>+</button>
        <Notes notes={notes} />
      </div>
    );
  }
}

//After this change App owns the state even though the application
//still should look the same as before. We can begin to use React's API
//to modify the state.

//We're passing props to super by convention. If you don't pass
//it, this.props won't get set! Calling super invokes the same method
//of the parent class
