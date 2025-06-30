enum Role{
    Admin = "Admin",
    Editor = "Editor",
    Viewer = "Viewer"
}

interface IUser {
    name : string,
    email : string,
    role : string,
    describe() : string
}

class User implements IUser {
    constructor(
        public name : string,
        public email : string,
        public role : Role
    ){}

    describe(): string {
        return `Name: ${this.name} | Email: ${this.email} | Role : ${this.role}`
    }
}

class PremiumUser extends User {
    activatePrimium() : string {
        return "Premium features activated";
    }
}

const user1 = new PremiumUser("John", "john@example.com", Role.Admin);
console.log(user1.describe());
console.log(user1.activatePrimium());