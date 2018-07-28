let one= 'locosporelritmo'

function uniqueInOrder(it) {
    let result = []
    let last
    
    for (let i = 0; i < it.length; i++) {
      if (it[i] !== last) {
        result.push(last = it[i])
      }
    }
    return result
    
  }
console.log(uniqueInOrder(one));