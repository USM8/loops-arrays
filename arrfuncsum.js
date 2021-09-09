



const num = [1, 2, 3, 5, 7, 11, 13, 17, 19]

function sumArray(myAarray){
let sum = 0
for (let i = 0; i < num.length; i++) {
    sum = sum + num[i]
    
    }
    return sum
}

const res = sumArray(num)
    console.log (res)
