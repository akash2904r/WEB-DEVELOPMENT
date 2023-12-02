/* 
    Create a faulty calculator using JavaScript

    This calculator does the following:
    1. It takes two numbers as input from the user
    2. It performs wrong operations as follows:
        
        + ---> -
        * ---> +
        - ---> /
        / ---> **

    The probability of it performing wrong operations is 10%
*/

let num1 = Number(prompt("Enter the value of first number: "))
let num2 = Number(prompt("Enter the value of second number: "))
let op = prompt("Enter the operation to be performed: ")

let fault = Math.random() <= 0.1

if(fault && !(op == "%" || op == "**")) 
{
    console.log("There is an fault in the calculator")

    if(op == "+") 
        console.log("The answer for your query is", (num1 - num2))
    else if(op == "*") 
        console.log("The answer for your query is", (num1 + num2))
    else if(op == "-") 
        console.log("The answer for your query is", (num1 / num2))
    else if(op == "/") 
        console.log("The answer for your query is", (num1 ** num2))
}
else 
{
    if(op == "+") 
        console.log("The answer for your query is", (num1 + num2))
    else if(op == "-") 
        console.log("The answer for your query is", (num1 - num2))
    else if(op == "*") 
        console.log("The answer for your query is", (num1 * num2))
    else if(op == "/") 
        console.log("The answer for your query is", (num1 / num2))
    else if(op == "%") 
        console.log("The answer for your query is", (num1 % num2))
    else if(op == "**") 
        console.log("The answer for your query is", (num1 ** num2))
}