"use strict";
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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role[Role["READ_ONLY"] = 6] = "READ_ONLY";
    Role[Role["AUTHOR"] = 7] = "AUTHOR";
})(Role || (Role = {}));
;
const person = {
    name: 'Vova',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};
// person.role.push('admin')
// person.role[1] = 10
let favoutiteActivities;
favoutiteActivities = ['Sports'];
console.log(person.name);
for (const hobby of person.hobbies) {
    console.log(hobby);
}
if (person.role === Role.AUTHOR) {
    console.log('Is author');
}
