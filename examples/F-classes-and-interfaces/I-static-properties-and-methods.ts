class Department {
  // We do not add the employees in the constructor to prevent init it with the same value each time
  // When creating an instance, its this.employees will be an empty string array
  // If it's <private>, it won't be accessible from any other classes, EVEN inheriting ones
  // If it's <protected>, it won't be accessible from any other classes, EXCEPT inheriting ones
  protected employees: string[] = [];

  static fiscalYear = 2020;

  constructor(private readonly id: string, private name: string) {
    this.id = id;
    this.name = name;
  }

  static createEmployee(name: string) {
    return { name };
  }

  describe(this: Department) {
    console.log(`Department ${this.id}: ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    // super has to be before any <this.> reference
    super(id, "IT");
    this.admins = admins;
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

// ===========================================================
// Static properties and methods
// ===========================================================
const employee1 = Department.createEmployee("Max");
console.log(employee1, Department.fiscalYear);

const accounting = new Department("id1", "Accounting");
// Wrong, fiscalYear is a static property, it is not bound to an instance so not to a this neither
// console.log(accounting.fiscalYear)
