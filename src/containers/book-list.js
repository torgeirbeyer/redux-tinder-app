import React, { Component } from 'react';
//import to make the connection between react and redux
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
//built in function in redux
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        //when we create lists in react we need to give every <li> a unique key/id
        <li 
          key={book.title} 
          onClick={() => this.props.selectBook(book)}
          className='list-group-item'>
          {book.title}
        </li>
      )
    })
  }

  render() {
    return (
      <ul className='list-group col-md-4'>
        {this.renderList()}
      </ul>
    )
  }
}

// this function is the glue between react and redux!
function mapStateToProps(state) {
  // Whatever gets returned from here will show up as props inside of BookList
  return { 
    books: state.books
  };
}

// Anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
  //whenever selectBook is called the result should be passed to 
  //all of our reducers
  return bindActionCreators({ selectBook: selectBook}, dispatch);
}

// Promote BookList from a componenet to a container
// It need to know about this new dispatch method, selectBook. Make it
// avaliable as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);