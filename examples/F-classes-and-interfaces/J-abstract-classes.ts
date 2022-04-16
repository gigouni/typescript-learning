abstract class Department {
  // We do not add the employees in the constructor to prevent init it with the same value each time
  // When creating an instance, its this.employees will be an empty string array
  // If it's <private>, it won't be accessible from any other classes, EVEN inheriting ones
  // If it's <protected>, it won't be accessible from any other classes, EXCEPT inheriting ones
  protected employees: string[] = [];

  static fiscalYear = 2020;

  constructor(protected readonly id: string, protected name: string) {
    this.id = id;
    this.name = name;
  }

  // The abstract keyword forces the inheriting classes to define the method
  abstract describe(this: Department): void;
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    // super has to be before any <this.> reference
    super(id, "IT");
    this.admins = admins;
  }

  describe(this: ITDepartment) {
    console.log(`IT department ${this.id}: ${this.name}`);
  }
}

class AccountingDepartment extends Department {
  constructor(id: string) {
    super(id, "Accounting");
  }

  describe(this: AccountingDepartment) {
    console.log(`Accounting department ${this.id}: ${this.name}`);
  }
}

// ===========================================================
// Abstract classes and methods
// ===========================================================

// Wrong, cannot create an abstract class instance
// const accounting = new Department('id1', 'Accounting')

const accounting = new AccountingDepartment("id1");
