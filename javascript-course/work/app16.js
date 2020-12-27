
// - use triple equal most of the time. 

const id = 100;



if (typeof id !== "undefined")
{
    console.log(`The ID is ${id}`);
}
else
{
    console.log("NO ID");

}

const name = "Steve";
const age = 19;

if(age > 0 && age < 12)
{
    console.log(`${name} is a child`);
}
else if ( age>= 13 && age <= 19)
{
    console.log(`${name} is a teenager`);
}
else if( age > 19)
{
    console.log(`${name} is an adult`);
}
else
{
    console.log(`${name} does not have valid age.`);
}

if(age < 16 || age > 65)
{
    console.log(`${name} can not run in the presidential race.`);
}
else
{
    console.log(`${name} can run in the presidential race!`)
}

// short hand, ternery operator: 
console.log ( id === 100 ? "Correct" : "Incorrect");

// in javascript, braces are optional, but they are recommended.

