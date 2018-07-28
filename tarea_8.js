let a= [2, 2, 3]
let b= [5, 4, 1]

function cuboids(a, b) {
    let one = (a[0] * a[1] * a[2]);
    let two = (b[0] * b[1] * b[2]);
    if (one - two > 0) {
    return one - two;
    }
    else {
    return two - one;
    }
    }
    console.log(cuboids(a, b))
