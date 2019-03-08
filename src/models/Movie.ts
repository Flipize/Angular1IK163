export class Movie {

  constructor(private Title?: string, private year?: number, private director?: string) {
  }

  get Name(): string {
    return this.Title;
  }

  set Name(value: string) {
    this.Title = value;
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
