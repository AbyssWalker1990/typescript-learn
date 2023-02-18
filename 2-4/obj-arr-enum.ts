// const person: {
//   name: string;
//   age: number;
// } = {
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: 'Vova',
//   age: 30,
//   hobbies: ['Sports', 'Cooking'],
//   role: [2, 'author']
// }

enum Role { ADMIN = 5, READ_ONLY, AUTHOR };

const person ={
  name: 'Vova',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN
}

// person.role.push('admin')
// person.role[1] = 10



let favoutiteActivities: string[]
favoutiteActivities = ['Sports']
  
console.log(person.name)

for (const hobby of person.hobbies) {
  console.log(hobby)
}

if (person.role === Role.AUTHOR) {
  console.log('Is author')
}