let arr = [1,12,5 ,7 ,11];
let newarr= []

for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    newarr.push(element**2)
    
}
console.log(newarr)
//[ 1, 144, 25, 49, 121 ]

//instead of the above tedious rocess we cud use map


let newArr = arr.map((e)=>{
    return e**2

})
//[ 1, 144, 25, 49, 121 ]


let newar = arr.map((e, index, array)=>{
    return e**2

}) 
console.log(newar)

// filter
const greaterThanSeven =(e)=>{
    if(e>7){
        return true;
    }
    return false
}
console.log(arr.filter(greaterThanSeven))
//[ 12, 11 ]

//reduce
let arr2=[1,2,3.4,5]

const red = (a,b)=>{
    return a*b
}
console.log(arr2.reduce(red))//34
// can make funs run on the whole arr

console.log(
    Array.from("Harry"))

//[ 'H', 'a', 'r', 'r', 'y' ] 