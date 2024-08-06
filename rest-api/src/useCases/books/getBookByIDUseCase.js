export class GetBookByIDUseCase {
  constructor(booksService) {
    this.booksService = booksService;
  }

  execute(id) {
    return this.booksService.getByID(id);
  }
}
