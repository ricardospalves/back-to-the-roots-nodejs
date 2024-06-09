export class UpdateByIDUseCase {
  constructor(booksService) {
    this.booksService = booksService;
  }

  execute(id, { name, author }) {
    return this.booksService.updateByID(id, { name, author });
  }
}
