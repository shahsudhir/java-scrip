// // //singleton

// // //object literals
// // const mysum=Symbol(key1)
// const JsUser={
//     name:"sudhir",
//     email:"shahsudhir721@gmail.com",
//     age:27,
//     isLoggedIn:false,
//     LastLoggedIn:['monday', 'friday']

// }

// JsUser.greetings=function(){
//     console.log("Hello world its me becoming the world no 1 devlopers")
// }
// JsUser.greetings2=function(){
//     console.log(`Hello ${this.name} its me ${this.email} becoming the world no 1 devlopers`)
// // }
// // console.log(JsUser.greetings2());
// // // }
// // // // console.log(JsUser.email)
// // // // console.log(JsUser["email","age"])

// // // console.log(JsUser[mysum]);

// const tinder={}
// tinder.id="123abc"
// tinder.name="danny"
// tinder.isLoggedIn=false

// console.log(tinder);
// const newUser={
//     email:"shahsudhir721@gmail.com",
//     fullName:{
//         useName:{
//             fristName:"Sudhir",
//             lastName:"shah"
//         }

//     }
// }
// console.log(newUser.fullName)

const obj1={1:"a",2:"b"}
const obj2={3:"aa",4:"add"}
//const obj3=Object.assign(obj1,obj2)
// console.log(obj3)
const obj3={...obj1,...obj2}
console.log(obj3)

console.log(Object.keys(obj1))
console.log(Object.values(obj2))
console.log(Object.entries(obj2))
