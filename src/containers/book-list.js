import React, { Component } from 'react';
//import to make the connection between react and redux
import { connect } from 'react-redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        //when we create lists in react we need to give every <li> a unique key
        <li key={book.title} className='list-group-item'> {book.title}</li>
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

//this function is the glue between react and redux!
function mapStateToProps(state) {
  //Whatever gets returned from here will show up as props inside of BookList
  return { 
    books: state.books
  };
}

export default connect(mapStateToProps)(BookList);