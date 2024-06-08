export class BooksService {
  constructor({ booksRepository }) {
    this.repository = booksRepository;
  }

  getAll() {
    const books = this.repository.getAll();

    return books;
  }

  create({ id, name, author }) {
    const bookID = this.repository.create({ id, name, author });

    return bookID;
  }
}
