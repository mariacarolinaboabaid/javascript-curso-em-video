const objectOne = {name: "Maria", score: 10}
const objectTwo = {name: "Carolina", grade: 9.5}
const objectThree = {...objectOne, ...objectTwo}

console.log(objectThree)