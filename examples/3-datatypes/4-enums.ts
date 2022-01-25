// Role is starting by an uppercase by convention
// By default, the first enum value will starts from the index 0
// It can start from another one using enum Role { ADMIN = 5, READ_ONLY, AUTHOR } and Role.READ_ONLY == 6 and Role.AUTHOR == 7
// enum Role { ADMIN = 5, READ_ONLY = 100, AUTHOR = 200 } is also possible
// enum Role { ADMIN = 'admin', READ_ONLY = 100, AUTHOR = 200 } is even possible (mixed datatypes!)
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}
const person = {
  name: "Nicolas",
  age: 27,
  hobbies: ["Sports", "Cooking"], // hobbies: string[]
  role: Role.ADMIN,
};

console.log(person);

person.role = Role.READ_ONLY;

console.log(person);
