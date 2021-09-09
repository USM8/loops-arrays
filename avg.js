

const num = [80, 90, 100, 70]

function avgArray(myAarray){
let sum = 0
for (let i = 0; i < num.length; i++) {
    sum = sum + num[i]
    
    }
    return sum/num.length
}

const res = avgArray(num)
    console.log (res)
