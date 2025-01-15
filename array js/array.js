Array --> Object


let arr =[ 1, 2,3, 4]
console.log(arr)
console.log(arr.length)

//mutable
arr[0]=78
console.log(arr)///but str --> immutable
console.log (arr, typeof arr)

//methods
console.log(arr.toString())
console.log(arr.join(" and "))  //78 and 2 and 3 and 4
console.log(arr.pop()) //[ 2, 3, 'hello' ]
arr.push("hello")
console.log(arr) //[ 78, 2, 3, 'hello' ]
arr.shift() // pops the 1st eement
console.log(arr) //[ '5', 2, 3, 'hello' ]

arr.unshift("5")// pushes into the first element 
console.log(arr)
delete arr[0]

console.log(arr) //[ <1 empty item>, 2, 3, 'hello' ]
console.log(arr[0])//undefined
console.log(arr.length)//4
// on deleting the memory allocated stays here only the elemt is deleted

let a=[1,2]
let a1=[9,0]
let a3=[7,8]
console.log(a.concat(a3,a1))// doesnt change the old arrray
// [ 1, 2, 7, 8, 9, 0 ]
console.log(a)

let no=[1,2,3,4]
console.log(no.splice(1,2)) // removes these nos //[ 2, 3 ]
console.log(no)//[ 1, 4 ]

let num=[1,2,3,4,5]
num.splice(1,3,222,444)
// remove from 1 to 4 n add 222 and 444 instead
console.log(num)

//slice-> creates an array from that position,exclusive

let noo=[1,2,3,4,5]
console.log(noo.slice(2))
[ 3, 4, 5 ]
console.log(noo)
console.log(noo.slice(1,3))
[ 2, 3 ]
console.log(noo) //start from 1 index n go till 3