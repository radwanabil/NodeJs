/** 
 * events 
 * class extends event
 * create obj from class
 * 
 * */

var myEvent = require("events");

class myClass extends myEvent{

}
var e1 = new myClass();

e1.once("abc", ()=>{console.log("Event Fired")});/// mongoose

/** fire ===> emit("event name") */
e1.emit("abc");
e1.emit("abc");

