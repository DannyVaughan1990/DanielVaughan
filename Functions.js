//Function decalration
function sayHello(name) {
  console.log("Hello there " + name + "!");
}

sayHello(str);

//Function decalration
function capitalize(str){
  return str.charAt(0).toUpperCase() + str.slice(1);
}
//Function expression
var city = "manila"; //"manila"
var capital = capitalize(city); //"Manila"


function test(x, y) {
  return (y - x);
}

test(10, 40);

function test2(x) {
  return x*2;
  /* The two lines of below don't run because
  once a function is returned it is completed and stops running*/
  console.log(x);
  return x/2;
}

test2(40);

// This function returns even numbers from 0 to 333.
function isEven(num) {
  return num % 2 === 0;
}
// This function finds the factorial of any number the user inputs.
function factorial(num) {
  //define a result variable
   var result = 1;
   //calculate factorial and store value in result
   for(var i = 2; i <= num; i++) {
     result *= i;
   }
   return result;
}
factorial(10)

//This function replaces the "-"'s' to "_"'s' (kebab case to snake case)
function kebabToSnake(str) {
 var newStr = str.replace(/-/g , "_");
 return newStr;
}
