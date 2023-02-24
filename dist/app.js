const __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
  const c = arguments.length; let r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc; let d
  if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function') r = Reflect.decorate(decorators, target, key, desc)
  else for (let i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r
  return c > 3 && r && Object.defineProperty(target, key, r), r
}
const __param = (this && this.__param) || function (paramIndex, decorator) {
  return function (target, key) { decorator(target, key, paramIndex) }
}
function Logger (logString) {
  console.log('Logger factory')
  return function (constructor) {
    console.log(logString)
    console.log(constructor)
  }
}
function WithTemplate (template, hookId) {
  console.log('Template factory')
  return function (originalConstructor) {
    return class extends originalConstructor {
      constructor (..._) {
        super()
        console.log('Rendering template')
        const hookEl = document.getElementById(hookId)
        if (hookEl != null) {
          hookEl.innerHTML = template
          hookEl.querySelector('h1').textContent = this.name
        }
      }
    }
  }
}
let Person = class Person {
  name = 'Max'
  constructor () {
    console.log('Creating person object...')
  }
}
Person = __decorate([
  Logger('LOGGING - PERSON'),
  WithTemplate('<h1>My Person</h1>', 'app')
], Person)
// const pers = new Person()
// console.log(pers)
// --
function Log (target, propertyName) {
  console.log('Property Decorator')
  console.log(target, propertyName)
}
function Log2 (target, name, descriptor) {
  console.log('Accessor decorator')
  console.log(target)
  console.log(name)
  console.log(descriptor)
}
function Log3 (target, name, descriptor) {
  console.log('Method decorator')
  console.log(target)
  console.log(name)
  console.log(descriptor)
}
function Log4 (target, name, position) {
  console.log('Parameter decorator')
  console.log(target)
  console.log(name)
  console.log(position)
}
class Product {
  title
  _price
  set price (val) {
    if (val > 0) {
      this._price = val
    } else {
      throw new Error('Invalid price - should be positive')
    }
  }

  get price () {
    return this._price
  }

  constructor (t, p) {
    this.title = t
    this._price = p
  }

  getPriceWithTax (tax) {
    return this.price * (1 + tax)
  }
}
__decorate([
  Log
], Product.prototype, 'title', void 0)
__decorate([
  Log2
], Product.prototype, 'price', null)
__decorate([
  Log3,
  __param(0, Log4)
], Product.prototype, 'getPriceWithTax', null)
