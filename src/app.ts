//  const userName = 'Max'
//  let age = 30
//  age = 20

//  const add = (a: number, b: number = 1) =>  a +b

//  const printOutput: (a: number | string) => void = output => console.log(output)

//  const button = document.querySelector('button')
//  if (button) {
//   button.addEventListener('click', event => console.log(event))
//  }
//  printOutput(add(5))

 const hobbies = ['Sports', 'Cookies']
 const activeHobbies = ['Hiking']
activeHobbies.push(...hobbies)

const person = {
  firstName: 'Vova',
  age: 30
}

const anotherPerson = {...person}

const add = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue
  }, 0)
}

const addedNumbers = add(5, 10, 7, 7)
console.log(addedNumbers)

const [hobbie1, hobbie2] = hobbies
const { firstName: userName, age } = person
console.log(userName, age)