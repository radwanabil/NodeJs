var x = 10;
// global.x = x;
// console.log(exports);
// console.log(module.exports);
// exports.myProp = x;
// module.exports.myProp2 = x;

// module.exports = {
//     myProp3:x
// }

// exports = {
//     myProp:x
// }

// module.x = x;
// console.log(module);

/** Logic Functions */
/** [{item:"", price:1000}] */

/**
 * var Items = []
 * function AddItem(itemName, price){}
 * function TotalPrice(){  }
 */

// let Items = [];
// function AddItem(ItemName, ItemPrice){
//     let item = {ItemName, ItemPrice};
//     Items.push(item);
// }
// function GetTotalPrice(){
//     let sum = 0;
//     for(let i=0; i<Items.length; i++){
//         sum += parseInt(Items[i].ItemPrice);
//     }
//     return sum;
// }

// module.exports = {
//     AddItem,
//     GetTotalPrice
// }


class myClass{
    Items = [];
    AddItem(ItemName, ItemPrice){
        let item = {ItemName, ItemPrice};
        this.Items.push(item);
    }
    GetTotalPrice(){
        let sum = 0;
        for(let i=0; i<this.Items.length; i++){
            sum += parseInt(this.Items[i].ItemPrice);
        }
        return sum;
    }
}

module.exports = {
    myClass
}