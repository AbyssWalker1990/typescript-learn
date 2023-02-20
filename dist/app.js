// type AddFn = (a: number, b: number) => number
let add
add = (n1, n2) => {
  return n1 + n2
}
class Person {
  name
  constructor (n) {
    if (n) {
      this.name = n
    }
  }

  greet (phrase) {
    console.log('Hi, my name is ' + phrase)
  }
}
let user1
user1 = new Person()
user1.greet('Lol')
