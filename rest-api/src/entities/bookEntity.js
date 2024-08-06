import { randomUUID } from "node:crypto";

export class BookEntity {
  constructor({ name, author }) {
    this.name = name;
    this.author = author;
  }

  get id() {
    return randomUUID();
  }
}
