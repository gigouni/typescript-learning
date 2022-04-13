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
