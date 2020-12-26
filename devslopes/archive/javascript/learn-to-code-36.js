
var myAccountBalance = 300;
var nikeSBShoes = 799.23;
var coupon = 500.0;
//  == equal to only checks value. not type. 
//  <= less than or equal to
// >= greater than or equal to.
//  === in javascript you'll see this. this is preferred way. 
// This is checking to see if value AND type is the same. 


// if this turns out to be true, then execute what's inside.
// if (nikeSBShoes <= myAccountBalance)
// {
//     myAccountBalance = myAccountBalance - nikeSBShoes;
//     console.log("We just bought some dope shoes!");
//     console.log("Account Balance: " + myAccountBalance);
// }
// else if (nikeSBShoes - coupon <= myAccountBalance)
// {
//     console.log("We just bought some dope shoes with a coupon!");
//     myAccountBalance = myAccountBalance - nikeSBShoes + coupon;
//     console.log("Account Balance: " + myAccountBalance);
// }
// else
// {
//     console.log("You too broke fo shoes bra!");
// }

// val 1 is floating point number, 
// val2 is string 
var val1 = 23;
var val2 = "23";
// this is a problem, we wouldn't want to do this. 
// never ever EVER want to use double equal sign.
if(val1 === val2)
{
    console.log("These are the same");
}
else
{
    console.log("One of these is not like the other...")
}
// in reality, you always want to make sure the values really ARE the same.
