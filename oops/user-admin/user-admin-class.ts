
class User {
  protected username: string;

  constructor(username: string) {
    this.username = username;
  }
}

class Admin extends User {
  showUsername(): void {
    console.log("Username: " + this.username);
  }
}

// Example usage
const admin = new Admin("adminUser123");
admin.showUsername(); // Output: Username: adminUser123
