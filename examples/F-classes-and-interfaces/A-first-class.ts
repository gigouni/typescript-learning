class Department {
  // name: string = 'DEFAULT'
  name: string;

  // constructor is a JavaScript reserved keyword
  constructor(n: string) {
    this.name = n;
  }
}

const ITDepartment = new Department("IT");
const marketingDepartment = new Department("Marketing");

console.log(ITDepartment);
