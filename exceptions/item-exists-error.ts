export class ItemExistsException extends Error {
  constructor(message: string) {
    super(message);

    this.name = ItemExistsException.name;
  }
}
