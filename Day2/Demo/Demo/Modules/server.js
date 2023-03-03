var myMod = require("./module")
// console.log(myMod);// {AddItem, GetTotalPrice}
// myMod.AddItem("LapTop", 20000);
// myMod.AddItem("Smart Watch", 3500);
// myMod.AddItem("HeadPhone", 1500);

// console.log(myMod.GetTotalPrice());

// var myMod2 = require("./module")


// myMod2.AddItem("LapTop", 20000);
// myMod2.AddItem("Smart Watch", 3500);
// myMod2.AddItem("HeadPhone", 1500);
// console.log(myMod2.GetTotalPrice());



console.log(myMod);// {myClass: ....}
let myClass = myMod.myClass;

let user1 = new myClass();
user1.AddItem("LapTop", 20000);
user1.AddItem("Smart Watch", 3500);
user1.AddItem("HeadPhone", 1500);

console.log(user1.GetTotalPrice());


let user2 = new myClass();
user2.AddItem("LapTop", 20000);
user2.AddItem("Smart Watch", 3500);
user2.AddItem("HeadPhone", 1500);

console.log(user2.GetTotalPrice());


user1.AddItem("Car",500);
console.log(user1.GetTotalPrice());
