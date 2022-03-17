const name = "bottle";
const color = "red";
const liquid = "wine";
const grapes = ["cabernet", "sauvignon" , "merlot"];

function displaygrapes(){
    console.log(`the grapes are :`);
    for(let i = 0; i < grapes.length; i += 1){
        console.log(`- ${grapes[i]}`);
    }
}

module.exports = {
    name: name,
    color: color,
    liquid: liquid,
    displaygrapes: displaygrapes,
};

