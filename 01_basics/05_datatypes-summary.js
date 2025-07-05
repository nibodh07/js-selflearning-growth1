//primitives

// 7 types - string , Number , Boolean , null , undefined , symbol, Bigint

const score = 100
const scorevalue = 100.23

const isloggedin = false 
const outsidetemp = null
let useremail;


const id = Symbol ('169')
const anotherid = Symbol('169')

console.log(id === anotherid);

const bignumber = 2303091993n

const heros = ["batman","superman","spiderman"];
let myobj = {
    name: "NicKY"
    ,age: 22,
}

const myfunction = function(){
    console.log("hello hope you are doing well");   
}

console.log(typeof myfunction);

// stack is primitive whereas Heap is Non primitve.

let mylearning = "I am still learning"
let anotherlearning = "i will do it"

anotherlearning="karke toh dikhayuga"


let user1 = {
    email: "nibodhshinde998@gmail.com"
    ,upi: "apnakaamkaro@gmail.com"
}

let user2 = user1

user2.email= "jhakas69@gmail.com"

console.log(user1.email);
console.log(user2.email);









//reference type/non primitive
// array
//objects
//functions