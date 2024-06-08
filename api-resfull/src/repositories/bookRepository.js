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

  async create({ id, name, author }) {
    const file = await this.#fileContent();

    file.push({ id, name, author });

    await writeFile(this.filePath, JSON.stringify(file));

    return id;
  }
}
