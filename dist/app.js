const e1 = {
  name: 'Vova',
  privileges: ['create-server'],
  startDate: new Date()
}
function add (a, b) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString()
  }
  return a + b
}
const result = add('lol', 'max')
result.split(' ')
const fetchUserData = {
  id: 'u1',
  name: 'Max',
  job: { title: 'CEO', description: 'My Own Company' }
}
console.log(fetchUserData?.job?.title)
// type UnknownEmployee = Employee | Admin
// function printEmployeeinfo(emp: UnknownEmployee) {
//   console.log('Name: ' + emp.name)
//   if ('privileges' in emp) {
//     console.log('Privileges: ' + emp.privileges)
//   }
//   if ('startDate' in emp) {
//     console.log('startDate: ' + emp.startDate)
//   }
// }
// printEmployeeinfo(e1)
// class Car  {
//   drive() {
//     console.log('Driving')
//   }
// }
// class Truck {
//   drive() {
//     console.log('Driving a truck')
//   }
//   loadCargo(amount: number) {
//     console.log('Loading cargo...' + amount)
//   }
// }
// type Vehicle = Car | Truck
// const v1 = new Car()
// const v2 = new Truck()
// function useVehicle(vehicle: Vehicle) {
//   vehicle.drive()
//   if (vehicle instanceof Truck) {
//     vehicle.loadCargo(1000)
//   }
// }
// useVehicle(v1)
// useVehicle(v2)
// interface Bird {
//   type: 'bird'
//   flyingSpeed: number
// }
// interface Horse {
//   type: 'horse'
//   groundSpeed: number
// }
// type Animal = Bird | Horse
// function moveAnimal(animal: Animal) {
//   let speed
//   switch (animal.type) {
//     case 'bird':
//       speed = animal.flyingSpeed
//       break
//     case 'horse':
//       speed = animal.groundSpeed
//       break
//   }
//   console.log('Moving with speed: ' + speed)
// }
// // const userInputElement = <HTMLInputElement>document.getElementById('user-input')
// const userInputElement = document.getElementById('user-input')
// if (userInputElement) {
//   (userInputElement as HTMLInputElement).value = 'Hi'
// }
// interface ErrorContainer { // { email: 'Not a valid email', username: 'Must start with a character'}
//   [prop: string]: string
// }
// const errorBag: ErrorContainer = {
//   email: 'Not a valid email',
//   user: 'Not a valid username'
// }
