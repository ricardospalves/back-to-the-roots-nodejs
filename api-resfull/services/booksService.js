export class BooksService {
  constructor({ booksRepository }) {
    this.repository = booksRepository;
  }

  getBooks() {
    return this.repository.getBooks();
  }
}
