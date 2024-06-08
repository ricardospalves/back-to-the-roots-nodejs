export class CreateBookUseCase {
  constructor(booksService) {
    this.booksService = booksService;
  }

  execute({ id, name, author }) {
    return this.booksService.registerBook({ id, name, author });
  }
}
