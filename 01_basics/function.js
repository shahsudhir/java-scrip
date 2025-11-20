// console.log("s");
// console.log("u");
// console.log("d");

// function sayMyName(){
//     console.log("s");
// console.log("u");
// console.log("d");
// }
// sayMyName()

// function AddTwoNumber(number1,number2){
    
//     return number1+number2

// }

// AddTwoNumber(3,"4")
// AddTwoNumber(5,4)

// function loginUserMessage(useName){
//       return `${useName} just loggedin`

// }
// console.log(loginUserMessage("sudhir"))

// function JustLoggedIn(UserLoggedIn){
//     if(UserLoggedIn===undefined)
//         console.log("plsease logged in ")
//         return
//     return `${UserLoggedIn} He has just logged in`
// }
// console.log(JustLoggedIn())
function CalculateCartPrice(...num1){
    return num1

}
// console.log(CalculateCartPrice(200,300,4000, 500, 6000))
const usr={
    userName:"sudhir",
    price:2000
}
function handleObject(anyobject){
    console.log(`user name is ${anyobject.userName} and the price is ${anyobject.price}`)


}
handleObject(usr)

const MyArray=[200,400,500,600]
function MySecondArray(getArray){
    return getArray[1]

}
console.log(MySecondArray(MyArray))
