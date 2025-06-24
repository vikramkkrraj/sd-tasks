class User {
  public name: string;
  private orgCode: string = "DuckCorp";
  protected role: string;

  constructor(name: string, role: string) {
    this.name = name;
    this.role = role;
  }

  introduce(): void {
    console.log(`I am ${this.name} from ${this.orgCode}`);
  }
}

export class Manager extends User {
  getRole(): void {
    console.log(this.role);
  }
}

// Testing
const user = new User("Daffy", "Employee");
user.introduce();
// console.log(user.orgCode); // This will cause a compile-time error

const manager = new Manager("Donald", "Manager");
manager.introduce();
manager.getRole();
