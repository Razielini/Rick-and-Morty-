const somethingWillHappend = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve('Promise Resolved!!')
    } else {
      reject('Whoooops! Promise Rejected!!')
    }
  })
}

console.time('somethingWillHappend')
somethingWillHappend()
  .then(response =>  console.log(`response :: ${response}`))
  .catch(err => console.error(err))
  .finally(() => {
    console.timeEnd('somethingWillHappend')
  })

const somethingWillHappend2 = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve(`somethingWillHappend2 :: True`)
      }, 2000)
    } else {
      const error = new Error('Whoopss!!')
      reject(error)
    }
  })
}

console.time('somethingWillHappend2')
somethingWillHappend2()
  .then(response => console.log(`response :: ${response}`))
  .catch(err => console.error(err))
  .finally(() => {
    console.timeEnd('somethingWillHappend2')
  })

console.time('Promise All')
Promise.all([somethingWillHappend(), somethingWillHappend2()])
  .then(response => {
    console.log('Array of Results ::', response)
  })
  .catch(err => {
    console.error(err)
  })
  .finally(() => {
    console.timeEnd('Promise All')
  })