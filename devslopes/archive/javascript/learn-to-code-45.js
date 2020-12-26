
var numField1 = document.getElementById("numField1");
var numField2 = document.getElementById("numField2");
var resultField= document.getElementById("resultField");
var form = document.getElementById("xIsWhatPercentOfY");


// addEventListener listens to "submit". NEEDS to be spelled submit. 
// now, note this will only work if we're adding this to the FORM. this also won't work for the button btw.
// once we click submit, we execute the function.
form.addEventListener("submit",function()
{
    var x = numField1.value;
    var y = numField2.value;
    // need to check that the fields exist in the first place.
    // this is called form validation:
    // if either of the numFields are null. the "!" will check for null or undefined.
    if (!numField1.value || !numField2.value)
    {
        alert("Please enter values in the fields.");
    }
    else
    {
        // var x = numField1.value;
        // var y = numField2.value;
        // these will be grabbed as string values. if we add, they will concatinate like strings. need to convert to floats.
        // need to parse strings into numbers now. also note, we could use "parseInt" if we want to truncate.

        var x = parseFloat(numField1.value);
        var y= parseFloat(numField2.value);
        alert(x + y);
    }
})



// other people do it this way:
// document.getElementById('xIsWhatPercentOfY').addEventListener("submit", function()
// {
//     alert("We clicketyclacked something!")
// })