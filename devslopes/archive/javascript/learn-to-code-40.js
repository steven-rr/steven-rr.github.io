
// functions will make things more organized.

// suppose we want to calc area of rectangle!

var length1 = 15;
var width1 = 10;
var area1 = length1*width1;
var length2 = 12;
var width2 = 14;
var area2 = length2*width2;


console.log(area1);
console.log(area2);

// lets create fx:
function area(length, width)
{
    return length * width;
}

var rectangleAreas = [];
rectangleAreas.push(area(10,15));
rectangleAreas.push(area(14,2));
rectangleAreas.push(area(4,5));

console.log(rectangleAreas);

var bankBalance = 500;

// don't need return statement here, optional
// it can access bankBalance since it's global variable. makeTransaction
// has access to it.  
function makeTransaction(priceOfSale)
{
    if(priceOfSale <= bankBalance)
    {
        bankBalance -= priceOfSale;
        console.log("Purchase Succesful");
    }
    else
    {
        console.log("Insufficient Funds");
    }
}
console.log(bankBalance);
makeTransaction(79.00);
console.log(bankBalance);
makeTransaction(2.32);
console.log(bankBalance);
makeTransaction(10.45);
console.log(bankBalance);
makeTransaction(450.00);
console.log(bankBalance);

// we just give it a variable name now, dont need to name the function.
var transaction = function(priceOfSale)
{
    if(priceOfSale <= bankBalance)
    {
        bankBalance -= priceOfSale;
        console.log("Purchase Succesful");
    }
    else
    {
        console.log("Insufficient Funds");
    }
}

transaction(10);
console.log(bankBalance);
// This is a HUGE difference.. you can store the function
// in a variable . 
var printCustomerName= function(first,last)
{
    console.log("First Name: " + first + " Last Name: " + last);
}
var applyForCreditCard = function(creditScore, soul)
{
    //call some functions to process application. 
}

var bankOperations= [];
bankOperations.push(transaction);
bankOperations.push(printCustomerName);
bankOperations.push(applyForCreditCard);

// now we can store functions in an array... for later use. 