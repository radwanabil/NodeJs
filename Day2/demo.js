var myEvent = require('events');
class myClass extends myEvent{

}
var e1 = new myClass();
e1.once("abc", () => { console.log("event fired") });
e1.emit("abc");