function Prime(num) {
output = true  
for (var i=2 ; i<num ; i++) { //var i=2
    if (num%i === 0)  {
       output = false ; break
    }
}
return output
}

function PrimeMover(num) {
var count = 0
for (var i=2 ; i<10000 ; i++)  { //var i=2
    if (Prime(i) === true) {
        count = count + 1 
    }
    if (count === num) {
        return i
        break
    } 
}
} 