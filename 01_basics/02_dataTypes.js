// "use Strict"//treat all js code as newer version
// //alert(3+3)// we are using node.js not the  brwoser 

// console.log(3+3)
// console.log("sudhir")
// //code readability should be high
// //number=> 2 to power 53
// //bigint
// //string=> ""
// //boolean => true/false
// //null=> standalone value
// //undefined=>
//     //symbol=> unique
// console.log(typeof undefined);
// console.log(typeof null);

// //there are two types of data 1. primitive data types and another is non primitive data types 
// //its all about how data is stored and how to accesss that data thats set 
// //primitive data types
// //1. String 2. 3.Number, 4.Boolean, 5.null, 6. undefined7. symbol

// const id=Symbol('123');
// const anotherId=Symbol('123')
// console.log(id===anotherId);
// const bigNumber=1234567778n
// console.log( typeof bigNumber)

//stack (primitive), Heap(Non-primitive)

//stack
let myYoutubename="sudhirshahcom"
let anotherChanelName=myYoutubename
console.log(anotherChanelName);

//the real variebles are not change becose its gives to another chelname as a copy of myyoutubename not the original

//heap
let user={
    email:"shahsudhir721@gmail.com",
    phone:"9869028756",
    age:26


}

const newUser=user;
newUser.email="shahdannydolpa@gmail.com"
newUser.age=10

console.log(newUser);
console.log(user);

//this is a heap memory its not take as copy as in stack memory its take 
// the original data and when its update its real value also change  

