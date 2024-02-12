// Credit card validation
let cardNumber = 5187-4545-7702-2007;
//test for Mastercard
const Master = /(^[51-55]\d{2}[2-6])[ -]?(\d{2}[2-6]\d{2})[ -]?(\d{4})[ -]?(\d{4}$)$/

// test for visacard
const Visa = /(^4\d{3}[2-6])[ -]?(\d{2}[2-6]\d{2})[ -]?(\d{4})[ -]?(\d{4}$)$/

// function verifyCard(cardNumber) { 
// if (Master.test(cardNumber)==true) {
// return("this card is a MasterCard Credit card")
// }
// }
// console.log(Master.test)
var final = function testcard(cardNumber){
    if (Master.test(cardNumber)== true){
        return ("This is a MasterCard Credit Card")
    }
    else if (Visa.test(cardNumber)==true) {
        return (" This is a Visa Credit Card")    
    }
    else return ( "This card is not a valid Credit Card")}
    console.log (final)
    // this is the end