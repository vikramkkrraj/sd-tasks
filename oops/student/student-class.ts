class Student {
  name: string;
  age: number;
  rollNo: number;

  constructor(name: string, age: number, rollNo: number) {
    this.name = name;
    this.age = age;
    this.rollNo = rollNo;
  }

  displayDetails(): void {
    console.log(`Student: ${this.name}, Age: ${this.age}, Roll No: ${this.rollNo}`);
  }
}

// Create two instances
const student1 = new Student("Riya", 17, 101);
const student2 = new Student("Aman", 18, 102);

// Call displayDetails method
student1.displayDetails();  // Output: Student: Riya, Age: 17, Roll No: 101
student2.displayDetails();  // Output: Student: Aman, Age: 18, Roll No: 102
