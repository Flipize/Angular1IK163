export class Movie {

  constructor(private name?: string, private year?: number, private director?: string) {
  }

  get Name(): string {
    return this.name;
  }

  set Name(value: string) {
    this.name = value;
  }

  get Year(): number {
    return this.year;
  }

  set Year(value: number) {
    this.year = value;
  }

  get Director(): string {
    return this.director;
  }

  set Director(value: string) {
    this.director = value;
  }
}
