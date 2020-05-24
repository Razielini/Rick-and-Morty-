const doSomethingAsync = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(() => resolve('Do Something Asyn :: True'), 1000)
      : reject(new Error('Test Error'))
  })
}

const doSomething = async () => {
  const something = await doSomethingAsync()
  console.log('something :: ', something)
}

console.log('Before :: doSomething')
doSomething()
console.log('After :: doSomething')

const anotherFunction = async () => {
  try {
    const something = await doSomethingAsync()
    console.log('anotherFunction :: ', something)
  } catch (err) {
    console.error(err)
  }
}

console.log('Before :: anotherFunction')
anotherFunction()
console.log('After :: anotherFunction')