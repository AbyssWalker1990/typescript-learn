// const names: Array<string> = []

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('this is done')
//   }, 2000)
// })

// promise.then(data => {
//   data.split(' ')
// })

function merge<T extends object, U extends object> (objA: T, objB: U): object {
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
    descriptionText = 'Got ' + String(element.length) + 'elements'
  }
  return [element, descriptionText]
}

console.log(countAndDescribe(['Sports', 'Cooking']))

function extractAndConvert<T extends object, U extends keyof T> (obj: T, key: U): T[U] {
  return obj[key]
}

extractAndConvert({ name: 'Lol' }, 'name')

class DataStorage<T extends string | number | boolean> {
  private readonly data: T[] = []

  addItem (item: T): void {
    this.data.push(item)
  }

  removeItem (item: T): void {
    this.data.splice(this.data.indexOf(item), 1)
  }

  getItems (): T[] {
    return [...this.data]
  }
}

const textStorage = new DataStorage<string>()
textStorage.addItem('Doll')
textStorage.addItem('King')
textStorage.removeItem('Doll')
console.log(textStorage)

const numberStorage = new DataStorage<number>()
numberStorage.addItem(1)

interface CourseGoal {
  title: string
  description: string
  completeUntil: Date
}

function createCourseGoal (title: string, description: string, date: Date): CourseGoal {
  const courseGoal: Partial<CourseGoal> = {}
  courseGoal.title = title
  courseGoal.description = description
  courseGoal.completeUntil = date
  return courseGoal as CourseGoal
}

const names: Readonly<string[]> = ['Max', 'Anna']
names.push('Manu')
