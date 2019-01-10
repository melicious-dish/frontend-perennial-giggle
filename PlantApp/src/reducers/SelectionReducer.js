// always called w 2 arguements : CURRENT state it has produced and action

// reducers are run repeatedly (with store.dispatch(action)) so initial state will be updated so can add if/else

// reducers recreate state. they don't mutate it

export default (state = null, action) => {
  console.log(action);

  switch (action.type) {
    case 'select_library':
      return action.payload;
    default:
      return state;
  }
};
