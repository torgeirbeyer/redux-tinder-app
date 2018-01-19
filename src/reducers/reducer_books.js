export default function() {
  return [
    {title: 'Javascript - the good parts', pages: 666},
    {title: 'Harry Potter', pages: 66},
    {title: 'Gautes drømmedag', pages: 89},
    {title: 'Skogtur', pages: 69}
  ];
}

//the books reducer always return an array of books
//each book is an object with key/value pairs
//we need to import this reducer to the index.js in the reducer folder
//like this
// books: BooksReducer (name we gave on import)