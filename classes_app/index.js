const Book = require('./book'); // call the Book class

// ---------------------------->start
const book = new Book('gardening');
console.log('Book:', book);
console.log('title:', book.title);

const secondBook = new Book('cooking');
console.log('Second Book:', secondBook);
console.log('Second title:', secondBook.title);

book.logTitle();
book.logTitleAfter(2);
// -------------------------------->end

// const book = new Book('gardening');
// book.logTitle();
// book.logTitleAfter(2);

console.log(Book.favorites());
