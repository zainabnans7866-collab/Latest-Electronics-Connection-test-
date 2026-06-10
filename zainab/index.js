function multiply(x,y){
    return x*y
}
console.log(multiply(5,5))



let namelog="jay"
console.log(`hello ${namelog}`)

function greet(r){
    console.log("result:"+r)
}
greet("jay")


//function expression
const add1= function (x,y){
    return x+y
}
console.log(add1 (3,6))
// arrow function
const add2= (x,y)=>{
    return x+y
}
console.log(add2 (3,6))

console.log("start")
setTimeout(() => console.log("middle"),3000)
console.log("end")

let arr=[5,6,3,2]
arr.map(i=>console.log(i*2));


export function add(x,y){
    return add(x,y)
}
 

export function sub(x,y){
    return sub(x,y)
}