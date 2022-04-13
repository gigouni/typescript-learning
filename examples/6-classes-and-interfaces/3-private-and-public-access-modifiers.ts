class Department {
  // <name: string> is the same that <public name: string>
  name: string;
  private employees: string[] = [];

  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) {
    console.log("Department: " + this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department("Accounting");

accounting.describe();
accounting.addEmployee("Max");
accounting.addEmployee("Tom");

accounting.printEmployeeInformation();

// Nothing prevent targeting the employees if declare as "employees: string[] = []"
// console.log(accounting.employees)
// accounting.employees[2] = 'Anna'
