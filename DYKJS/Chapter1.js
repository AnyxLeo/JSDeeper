const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.9;

var bankAccount = 302.13;

const totalAmount = CalculateFinalPrice()
formatAmount(totalAmount);
 var i = 0;

while( bankAccount >= totalAmount){
    if(bankAccount >= totalAmount){
        bankAccount -= totalAmount;
    }
    if(bankAccount >= ACCESSORY_PRICE){
        bankAccount -= ACCESSORY_PRICE
    }
}

function CalculateFinalPrice(){
    return PHONE_PRICE + (PHONE_PRICE * TAX_RATE);
};

function formatAmount(){
    console.log("$" + totalAmount.toFixed(2));
}

