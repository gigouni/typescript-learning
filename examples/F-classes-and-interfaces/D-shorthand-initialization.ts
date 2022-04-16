class Department {
  // We do not add the employees in the constructor to prevent init it with the same value each time
  // When creating an instance, its this.employees will be an empty string array
  private employees: string[] = [];

  constructor(private id: string, private name: string) {
    this.id = id;
    this.name = name;
  }

  describe(this: Department) {
    console.log(`Department ${this.id}: ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department("ACC", "Accounting");

accounting.describe();
accounting.addEmployee("Max");
accounting.addEmployee("Tom");

accounting.printEmployeeInformation();
