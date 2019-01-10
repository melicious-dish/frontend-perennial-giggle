// plain js object that tells the reducer how to change data.

// must have a TYPE property that is a string
  // this will the reducer a specific command

// also specify which type/string we want to change by passing it a PAYLOAD property (the thing we want to work on)

// next update the reducer to tell it how to handle this action

export const selectedLibrary = (libraryId) => {
  return {
    type: 'select_library',
    payload: libraryId
  };
};
//
// export const selectTaskTypeAction = (plantId) => {
//   return {
//     type: 'SELECT_TASK_TYPE_ACTION',
//   }
// }
