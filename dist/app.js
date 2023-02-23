// const names: Array<string> = []
// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('this is done')
//   }, 2000)
// })
// promise.then(data => {
//   data.split(' ')
// })
function merge (objA, objB) {
  return Object.assign(objA, objB)
}
const mergedObj = merge({ name: 'Max' }, { age: 30 })
console.log(mergedObj)
function countAndDescribe (element) {
  let descriptionText = 'Got No value'
  if (element.length > 0) {
    descriptionText = 'Got ' + String(element.length) + 'elements'
  }
  return [element, descriptionText]
}
console.log(countAndDescribe(['Sports', 'Cooking']))
function extractAndConvert (obj, key) {
  return obj[key]
}
extractAndConvert({ name: 'Lol' }, 'name')
class DataStorage {
  data = []
  addItem (item) {
    this.data.push(item)
  }

  removeItem (item) {
    this.data.splice(this.data.indexOf(item), 1)
  }

  getItems () {
    return [...this.data]
  }
}
const textStorage = new DataStorage()
textStorage.addItem('Doll')
textStorage.addItem('King')
textStorage.removeItem('Doll')
console.log(textStorage)
const numberStorage = new DataStorage()
