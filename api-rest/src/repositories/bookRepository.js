import { writeFile, readFile } from "node:fs/promises";

export class BooksRepository {
  constructor({ filePath }) {
    this.filePath = filePath;
  }

  async #fileContent() {
    const file = await readFile(this.filePath);
    const json = JSON.parse(file);

    return json;
  }

  getAll() {
    return this.#fileContent();
  }

  async #save(json) {
    await writeFile(this.filePath, JSON.stringify(json));
  }

  async create({ id, name, author }) {
    const file = await this.#fileContent();

    file.push({ id, name, author });

    await this.#save(file);

    return id;
  }

  async #findBookIndexByID(id) {
    const books = await this.#fileContent();
    const bookIndex = books.findIndex((book) => book.id === id);

    return bookIndex;
  }

  async #findByID(id) {
    const books = await this.#fileContent();
    const book = books.find((item) => item.id === id);

    return book;
  }

  async updateByID(id, bookFields) {
    const books = await this.#fileContent();
    const bookIndex = await this.#findBookIndexByID(id);

    if (bookIndex === -1) {
      return null;
    }

    const book = books[bookIndex];

    for (const [key, value] of Object.entries(bookFields)) {
      if (!value && typeof value !== "string") {
        continue;
      }

      book[key] = value;
    }

    await this.#save(books);

    return books[bookIndex].id;
  }

  async deleteByID(id) {
    const books = await this.#fileContent();
    const bookIndex = await this.#findBookIndexByID(id);

    if (bookIndex === -1) {
      return null;
    }

    const deletedBook = books.splice(bookIndex, 1);

    await this.#save(books);

    return deletedBook[0].id;
  }

  async getByID(id) {
    const books = await this.#findByID(id);

    if (!books) {
      return null;
    }

    return books;
  }
}
