import { randomUUID } from "node:crypto";

class BooksRepository {
  #books = [
    this.#create({
      author: "George Orwell",
      name: "1984",
    }),
    this.#create({
      author: "Antoine de Saint-Exupéry",
      name: "O Pequeno Príncipe",
    }),
    this.#create({
      author: "Homero",
      name: "Ilíada",
    }),
  ];

  #create({ name, author }) {
    return {
      id: randomUUID(),
      name,
      author,
    };
  }

  getBooks() {
    return this.#books;
  }

  pushBook({ id, name, author }) {
    this.#books.push({ id, name, author });
  }
}

const booksRepository = new BooksRepository();

export { booksRepository };
