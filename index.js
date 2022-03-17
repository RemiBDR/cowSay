const userInfo = require("./information");
console.log(`I'm ${userInfo.name} from ${userInfo.campus}.`);

var cowsay = require("cowsay");

console.log(cowsay.say({
    text : `I'm ${userInfo.name} from ${userInfo.campus}.` ,
    e : "oO",
    T : "U "
}));