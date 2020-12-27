

// great resource for date documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

let val;


const today = new Date();
let birthday = new Date("9-10-1981 11:25:00");
birthday = new Date("September 10 1981");
birthday = new Date("9/10/1981");

val = today.getMonth(); //returns month num, (jan = 0)
val = today.getDate();  //returns day num;
val = today.getDay();   //returns day name as a string. 
val = today.getFullYear(); // returns year as string.
val = today.getHours();     // returns hour as a string.
val = today.getMinutes();   // returns minute as a string.
val = today.getSeconds();   // returns seconds as a string
val = today.getMilliseconds();  //returns milliseconds as a string.
val = today.getTime(); //amount of seconds that have passed since jan 1 1970

// can manipulate dates more. 
birthday.setMonth(2); // can change month num to any month we want.
birthday.setDate(12);
birthday.setFullYear(1985);
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(25);


val = birthday;

console.log(val);
