function Logger (logString: string) {
  console.log('Logger factory')
  return function (constructor: Function) {
    console.log(logString)
    console.log(constructor)
  }
}

function WithTemplate (template: string, hookId: string) {
  console.log('Template factory')
  return function<T extends new(...args: any[]) => { name: string }> (originalConstructor: T) {
    return class extends originalConstructor {
      constructor (..._: any[]) {
        super()
        console.log('Rendering template')
        const hookEl = document.getElementById(hookId)
        if (hookEl != null) {
          hookEl.innerHTML = template
          hookEl.querySelector('h1')!.textContent = this.name
        }
      }
    }
  }
}

@Logger('LOGGING - PERSON')
@WithTemplate('<h1>My Person</h1>', 'app')
class Person {
  name: string = 'Max'

  constructor () {
    console.log('Creating person object...')
  }
}

// const pers = new Person()

// console.log(pers)

// --

function Log (target: any, propertyName: string | symbol): void {
  console.log('Property Decorator')
  console.log(target, propertyName)
}

function Log2 (target: any, name: string, descriptor: PropertyDescriptor): void {
  console.log('Accessor decorator')
  console.log(target)
  console.log(name)
  console.log(descriptor)
}

function Log3 (target: any, name: string | symbol, descriptor: PropertyDescriptor): void {
  console.log('Method decorator')
  console.log(target)
  console.log(name)
  console.log(descriptor)
}

function Log4 (target: any, name: string | symbol, position: number): void {
  console.log('Parameter decorator')
  console.log(target)
  console.log(name)
  console.log(position)
}

class Product {
  @Log
    title: string

  private _price: number

  @Log2
  set price (val: number) {
    if (val > 0) {
      this._price = val
    } else {
      throw new Error('Invalid price - should be positive')
    }
  }

  get price (): number {
    return this._price
  }

  constructor (t: string, p: number) {
    this.title = t
    this._price = p
  }

  @Log3
  getPriceWithTax (@Log4 tax: number): number {
    return this.price * (1 + tax)
  }
}
