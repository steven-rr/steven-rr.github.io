// != doesn't check type.
// !== does check the type.

// var val1 = 23;
// var val2 = "23";
// if(val1 !== val2)
// {
//     console.log("These are not the same");
// }
// else
// {
//     console.log("One of these IS like the other...")
// }

// you can have multiple conditionals under if statement.
//  && = AND 
//  || = OR
if(1 === 1 && 2 === 2 || "joe" === "joe")
{
    console.log("These are both true!")
}
if(true && true)
{
    console.log("These are the same!")
}

// despite 1!== 3, we still get joe = joe.
if(1 === 3 || "joe" === "joe")
{
    console.log("one of these are true.");
}

var cat1 = 5;
var cat2 = 10;
var cat3 = 1;
var cat3disabledHandicap = false;

if((cat1 > cat2 && cat1 > cat3) && !cat3disabledHandicap)
{
    console.log("cat 1 is the cutest!");
}
else if((cat2 > cat1 && cat2 > cat3) && !cat3disabledHandicap)
{
    console.log("cat2 is the cutest!");
}
else if((cat3> cat1 && cat3 > cat2) || cat3disabledHandicap)
{
    console.log("cat 3 is the cutest!");
}