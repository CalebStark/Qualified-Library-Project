function findAuthorById(authors, id) {
  // Goal is to find author with the matching ID that is provided
  let matchingAuthor = authors.find((author) => author.id === id);
  return matchingAuthor;
  // YOUR SOLUTION HERE
}

function findBookById(books, id) {
  // Goal is to find the book with the matching ID that is provided
  let matchingBook = books.find((book) => book.id === id);
  return matchingBook;
  // YOUR SOLUTION HERE
}

// NOTE: YOU DON'T HAVE TO EDIT THE FUNCTIONS BELOW
function partitionBooksByBorrowedStatus(books) {
  return books.reduce(
    (acc, book) => {
      const [borrowed, returned] = acc;
      const recent = book.borrows[0];
      if (recent.returned) {
        returned.push(book);
      } else {
        borrowed.push(book);
      }

      return acc;
    },
    [[], []]
  );
}

function getBorrowersForBook(book, accounts) {
  const accountsById = accounts.reduce((acc, account) => {
    acc[account.id] = account;
    return acc;
  }, {});

  return book.borrows
    .map(({ id, returned }) => ({
      ...accountsById[id],
      returned,
    }))
    .slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
