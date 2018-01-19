import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

// This is a reducer function and it returns a piece of the application state
//We can have many different reducers
const rootReducer = combineReducers({
  books: BooksReducer
});

export default rootReducer;
