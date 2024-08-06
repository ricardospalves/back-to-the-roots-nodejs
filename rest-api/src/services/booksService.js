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

  updateByID(id, { name, author }) {
    const bookID = this.repository.updateByID(id, { name, author });

    return bookID;
  }

  deleteByID(id) {
    const bookID = this.repository.deleteByID(id);

    return bookID;
  }

  getByID(id) {
    const book = this.repository.getByID(id);

    return book;
  }
}
