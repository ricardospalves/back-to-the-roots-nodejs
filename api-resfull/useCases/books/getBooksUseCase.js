export class GetBooksUseCase {
  constructor(booksService) {
    this.booksService = booksService;
  }

  execute() {
    return this.booksService.getBooks();
  }
}
