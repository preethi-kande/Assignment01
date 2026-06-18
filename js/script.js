//STEP 1 - Declaring variables with camelCase naming convention
let someMonth
function theMonth() {}
let currentMonth
let summerMonth
let myLibraryFunction


//STEP 2 - Examples of literal expressions
let numericLiteral = 66;
let stringLiteral = "JS, Assignment 1";
let booleanLiteral = true;
let nullLiteral = null;


//STEP 3 - Examples of variable or complex expressions
let num = 23;
let variableExpression = ((num + 6) * 5);
console.log(variableExpression);
let a = 3, b = 5;
let complexExpression = Math.pow(a + b,2);
console.log(complexExpression);


//STEP 4 - Declare variables with camelCase and Hungarian naming conventions
// camelCase naming convention
let firstName;
let lastName;
let address;
let city;
let state;
let zipCode;
let yourAge;
let referralSource;
let mayWeContactYou;
// Hungarian naming convention
let strFirstName;
let strLastName;
let strAddress;
let strCity;
let strState;
let strZipCode;
let intYourAge;
let strReferralSource;
let boolMayWeContactYou;


//STEP 5 - Declare and Assign values to the 3 variables in 3 different ways
// Way 1: Declare and Assign in separate statements
let firstName, yourAge, mayWeContactYou;
firstName = 'Preethi';
yourAge = 30;
mayWeContactYou = 'True';

//Way 2: Declare and Assign in same statements
let firstName = 'Abhinaya';
let yourAge = 29;
let mayWeContactYou = 'False';

//Way 3: Declare and Assign 
let firstName = 'Kande' , yourAge = 31 , mayWeContactYou = 'True';


//STEP 6 - Display a coerced result with string and number in console window
let startdate = 'June 03'
console.log('I have started learning javascript from ' + startdate + ' and it is very interesting to learn.'); //output - I have started learning javascript from June 03 and it is very interesting to learn.
console.log(`I have started learning javascript from ${startdate} and it is very interesting to learn.`); //output - I have started learning javascript from June 03 and it is very interesting to learn.


//STEP 7 - Display a coerced result with string and boolean and Display a coerced result with Boolean and number 
// Display a coerced result with string and boolean by creating a variable
let value = 'true';
console.log(value + ' is a Boolean value'); //output - true is a Boolean Value

//Display a coerced result with number and boolean by creating a variable
let number = 5;
console.log(number + false); //output - 5
console.log(number + true);  //output - 6


//STEP 8 - Fix string literal
let someString = `Who once said, "Only two things are infinite, the universe and human stupidity, and I'm not sure about the former."`
console.log(someString); //output - Who once said, "Only two things are infinite, the universe and human stupidity, and I'm not sure about the former."


//STEP 9 - Create variables which produces null and undefined in console window
//Create variables which produces null in console window
let currentYear = 2026;
let strCurrentMonth = 'null';
currentYear = null;
console.log(strCurrentMonth, currentYear); //output - null null

//Create variables which produces undefined in console window
let myName;
console.log(myName); //output - undefined


//STEP .0 - Perform Unary typeof operator on various literals to return string, number, Boolean, object, undefined
console.log(typeof 'Welcome to Javascript - Assignment 01'); //output - string
console.log(typeof 236); //output - number
console.log(typeof true); //output - boolean
console.log(typeof {course : 'Javascript', ide : 'Visual Studio Code'}); //output - object
console.log(typeof id); // output - undefined


//STEP .1 - Use the concatenation operator (+) to display text in the alert box 
alert('Hello' + ' Preethi Abhinaya Kande' + ', welcome to the JavaScript class!'); //output - Hello Preethi Abhinaya Kande, welcome to the JavaScript class!


//STEP .2 - Declare and Assign value to a variable called name and substitue name in previous alert string using variable
let name = 'Preethi Abhinaya Kande';
alert('Hello ' + name + ', welcome to the JavaScript class!'); // output - Hello Preethi Abhinaya Kande, welcome to the JavaScript class!
alert(`Hello ${name}, welcome to the JavaScript class!`); // output - Hello Preethi Abhinaya Kande, welcome to the JavaScript class!


//STEP .3 - Declare and Assign value to a variable called course and substitue course in previous alert string using variable
let course = 'JavaScript';
alert('Hello Preethi Abhinaya Kande, welcome to the ' + course + ' class'); // output - Hello Preethi Abhinaya Kande, welcome to the JavaScript class!


//STEP .4 - Add line break right before the word “Welcome” in the above string
alert('Hello Preethi Abhinaya Kande.\nWelcome to the JavaScript class!'); 
/* output - Hello Preethi Abhinaya Kande.
            Welcome to the JavaScript class! */


//STEP .5 - Ask user to enter name and save the response in name variable 
let name = prompt('Please enter your name'); // output - prompt window pops up to enter name
console.log(name); // output - captures the entered name and prints on the console


//STEP .6 - Ask user to enter course and save the response in course variable 
let className = prompt('Please enter the course name that you are taking'); // output - prompt window pops up to enter class name
console.log(className); // output - captures the entered course name and prints on the console


//STEP .7 - Print Sum of two numbers on console
let x = 10;
let y = 20;
console.log(x+y); // output - 30 


//STEP .8 - Declare and Assign value to variable and add a fixed number and print the sum of the variable and fixed number on console
let x = 20;
console.log(x + 20); // output - 40


//STEP .9 - Declare and Assign value to variable and multiply a fixed number and print the output on console
let x = 20;
console.log(x * 5); // output - 100


//STEP .10 - Display the ouput of multiple functions
let x = (20 % 3); // output - x = 2 
x = (x / 1) ; // output - x = 2/1 => x = 2
console.log(x); // output - 2