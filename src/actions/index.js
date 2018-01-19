export function selectBook(book) {
  // selectBook is an action creator, it needs to return an action
  // an object with a type property
  return {
    // Type is always uppercase and usually a string
    type: 'BOOK_SELECTED',
    //Payload is more information about the action that was taken
    payload: book
  };
}