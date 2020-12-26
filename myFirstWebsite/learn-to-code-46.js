
function isDigit(string)
{
    if(string && string*0 == 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}
var numField1 = document.getElementById("numField1");
var numField2 = document.getElementById("numField2");
var resultField= document.getElementById("resultField");
var form = document.getElementById("xIsWhatPercentOfY");
form.addEventListener("submit",function(event)
{
    var x = numField1.value;
    var y = numField2.value;
    if (!numField1.value || !numField2.value)
    {
        alert("Please enter values in the fields.");
    }
    else if(isDigit(numField1.value) && isDigit(numField2.value))
    {
        
        var x = parseFloat(numField1.value);
        var y= parseFloat(numField2.value);
        var result = x / y;
        var percent = result * 100;
        // alert and console.log() turns your numbers into a string automatically, but when we 
        // retrieve, we have to make sure we parse. 
        // alert(percent);

        resultField.innerText = "Answer: " + percent + "%";
        // whenever i do a form submit, and i do addEventListener("Submit") that is default beahvior
        // for submitting. it's not typical that you leave data on the page. we can turn the feature off.
        // so our data stays there. 

        // what we can do is pass in "event" string into addEventListener, which passes in the event as a parameter.. 
        //then, we just prevent default so we can prevent it from clearing out all the data.. 
        event.preventDefault();

    }
    else
    {
        alert("Hey! Insert valid numbers!!")
    }
})

// what did we learn:
// how to work with forms and input
// how to retrieve by using getElementByID , creating a link between js and HTML file. 
// the variable is DIRECTLY TIED to the element . 
// if we are using with headers, or paragraphs, but instead we need to use innerText to modify.
// we can also add event listener to listen for the input submit action in order to print the answer.
// what's the difference between input submit type and button submit type? we'll find a bunch of websites describing this.
// learned how to do some error handling, so we can send alert to user when not valid input.
// also learned how to parse floats so we don't get strings.
// then we also learned how to prevent the page from clearing after submitting the form.
// in subsequent exercises, we're going to build the remaining percentage calculator.


