class Department {
  // We do not add the employees in the constructor to prevent init it with the same value each time
  // When creating an instance, its this.employees will be an empty string array
  private employees: string[] = [];

  constructor(private readonly id: string, private name: string) {
    this.id = id;
    this.name = name;
  }

  describe(this: Department) {
    console.log(`Department ${this.id}: ${this.name}`);
  }

  addEmployee(employee: string) {
    // Wrong, id is a readonly property
    // this.id = 'azerty'

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
  constructor(id: string, private reports: string[]) {
    // super has to be before any <this.> reference
    super(id, "Accounting");
    this.reports = reports;
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReport() {
    console.log(this.reports);
  }
}

const it = new ITDepartment("id1", ["Max"]);
it.describe();

const accounting = new AccountingDepartment("id2", []);
accounting.describe();
accounting.addReport("New report");
accounting.printReport();
