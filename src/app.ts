// const names: Array<string> = []

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('this is done')
//   }, 2000)
// })

// promise.then(data => {
//   data.split(' ')
// })

function merge<T extends object, U extends object> (objA: T, objB: U) {
  return Object.assign(objA, objB)
}

const mergedObj = merge({ name: 'Max' }, { age: 30 })
console.log(mergedObj)

interface Lengthy {
  length: number
}

function countAndDescribe<T extends Lengthy> (element: T): [T, string] {
  let descriptionText = 'Got No value'
  if (element.length > 0) {
    descriptionText = 'Got ' + element.length + 'elements'
  }
  return [element, descriptionText]
}

console.log(countAndDescribe(['Sports', 'Cooking']))
