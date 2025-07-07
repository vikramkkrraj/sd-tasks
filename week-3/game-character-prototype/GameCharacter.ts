export class GameCharacter {
  constructor(
    public name: string,
    public level: number,
    public weapon: string
  ) {}

  public clone(): GameCharacter {
    return new GameCharacter(this.name, this.level, this.weapon);
  }

  public describe(): string {
    return `Character: ${this.name}, Level: ${this.level}, Weapon: ${this.weapon}`;
  }
}