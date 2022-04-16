class Department {
  // We do not add the employees in the constructor to prevent init it with the same value each time
  // When creating an instance, its this.employees will be an empty string array
  // If it's <private>, it won't be accessible from any other classes, EVEN inheriting ones
  // If it's <protected>, it won't be accessible from any other classes, EXCEPT inheriting ones
  protected employees: string[] = [];

  constructor(private readonly id: string, private name: string) {
    this.id = id;
    this.name = name;
  }

  describe(this: Department) {
    console.log(`Department ${this.id}: ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  // Getter add more complex logic around property when accessing it
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("Nop report found");
  }

  // The setter could have any name but typically reuse the getter/property name
  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass a valid value for the last report");
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    // super has to be before any <this.> reference
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReport() {
    console.log(this.reports);
  }

  addEmployee(employee: string): void {
    if (employee == "Max") {
      return;
    }

    // Could be wrong if this.employees is a private property within the Department class
    this.employees.push(employee);
  }
}

const accounting = new AccountingDepartment("id2", []);
accounting.addReport("New report");
accounting.printReport();
accounting.addEmployee("Manu");

// The getter does not require parenthesis
console.log(accounting.mostRecentReport);

// Trigger the setter
// accounting.mostRecentReport = '' // Trigger the throw statement
accounting.mostRecentReport = "Year End Report";
console.log(accounting.mostRecentReport);
accounting.printReport();
