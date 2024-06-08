export class BooksService {
  constructor({ booksRepository }) {
    this.repository = booksRepository;
  }

  getBooks() {
    return this.repository.getBooks();
  }

  registerBook({ id, name, author }) {
    return this.repository.pushBook({ id, name, author });
  }
}
