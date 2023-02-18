type Combinable = number | string
type ConversionDescription = 'as-number' | 'as-text'

function combine(
  input1: Combinable, 
  input2: Combinable, 
  resultConversion: ConversionDescription
) {
  let result
  if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
    result = +input1 + +input2
  } else {
    result = input1.toString() + input2.toString()
  }
  // if (resultConversion === 'as-number') {
  //   return parseFloat(result)
  // } else {
  //   return result.toString()
  // }
}

const combineAges = combine(30, 36, 'as-number')
console.log(combineAges)

const combineStringAges = combine('30', '36', 'as-number')
console.log(combineStringAges)

const combineNames = combine('Max', 'Vova', 'as-text')
console.log(combineNames)