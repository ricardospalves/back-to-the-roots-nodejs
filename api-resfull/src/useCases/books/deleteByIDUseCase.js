export class DeleteByIDUseCase {
  constructor(booksService) {
    this.booksService = booksService;
  }

  execute(id) {
    return this.booksService.deleteByID(id);
  }
}
