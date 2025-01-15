let a=[1, 93, 5, 6, 88]
for (let index = 0; index < a.length; index++) {
    // const element = a[index];
    console.log(a[index])
    
}


a.forEach((value, index, arr) =>{
    console.log(value, index, arr)
})
//1 0 [ 1, 93, 5, 6, 88 ]
// 93 1 [ 1, 93, 5, 6, 88 ]
// 5 2 [ 1, 93, 5, 6, 88 ]
// 6 3 [ 1, 93, 5, 6, 88 ]
// 88 4 [ 1, 93, 5, 6, 88 ]


let obj={
    a:1,
    b:2,
    c:3
}


//for in 
for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key,element)
    }}
// a 1
// b 2
// c 3


//for of

for (const iterator of a) {
    console.log(iterator)
    
}

// 1
// 93
// 5
// 6
// 88