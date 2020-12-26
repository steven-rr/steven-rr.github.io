// bind keyword.
//  suppose I have Alex Brown's garage.
this.car = "Honda Civic w/ Ugly Spoiler";

var marksGarage =
{
    car: "Aston Martin",
    getCar: function()
    {
        return this.car;
    }
}
console.log(marksGarage.getCar());

// storing function as variable.
var storeGetCarForLater = marksGarage.getCar;

// now work is over and mark wants his car. 
// well, now this is referring to outerloop, we lost scope in which 
// we wanted to work with. especially if we're working with promises... 
// or when we're working with the dynamic enviornment of the web.
console.log(storeGetCarForLater());

// what we're saying here is, we're going to bind the function to marks garage.
// var theRealGetCarFunction  = storeGetCarForLater.bind(marksGarage);
// we're storing the function, but also saying that the function scope
// should stay and use marksGarage scope, not the outer scope.
var theRealGetCarFunction  = marksGarage.getCar.bind(marksGarage);
// very important to remember that the bind function can alleviate errors
// with scopes. sometimes you want to use a certain scope over another, etc.

console.log(theRealGetCarFunction());