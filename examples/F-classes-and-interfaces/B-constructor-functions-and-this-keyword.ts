class Department {
  name: string;

  // constructor is a JavaScript reserved keyword
  constructor(n: string) {
    this.name = n;
  }

  // Dummy type inference to prevent issue
  describe(this: Department) {
    console.log("Department: " + this.name);
  }
}

const ITDepartment = new Department("IT");
const marketingDepartment = new Department("Marketing");

ITDepartment.describe();

const ITDepartmentCopy = { describe: ITDepartment.describe };
const ITDepartmentAnotherCopy = {
  name: "Dummy",
  describe: ITDepartment.describe,
};

// Wrong, this.name does not exist in this context, this is not bound to an instance
ITDepartmentCopy.describe();

// Correct, the object follow the Department syntax and match the type inference expected by the describe method
ITDepartmentAnotherCopy.describe();
