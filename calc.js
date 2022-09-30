
function add(numOne, numTwo)
{
    
   return numOne + numTwo;
}

function subtract(numOne, numTwo)
{
    
   return numOne - numTwo;
}

function multiply(numOne, numTwo)
{
    
   return numOne * numTwo;
}

function divide(numOne, numTwo)
{
    
   return numOne / numTwo;
}




function getNumTwo(display, position){
let num;
let screen;
let secondScreen;
let operator;
let secondOperator;

if(numOperators(display) > 1){


screen = display.substring(position);
operator = findOperater(screen);
//secondScreen = screen.slice(screen.indexOf(operator)+1);
//console.log(secondScreen);
//secondOperator = findOperater(secondScreen);
}else{
    screen = display.substring(position);
}
console.log(screen);
//console.log(screen);

//console.log(operator);
if(numOperators(screen) > 1){
num = screen.substring(screen.indexOf(operator) + 1);
screen = num;
//console.log(screen);
screen = screen.substring(0, screen.indexOf(findOperater(screen)));
//console.log(screen);
num = screen;
}else{

num = screen.slice(screen.indexOf(findOperater(screen)) + 1);


}

console.log(num);


return num;
}




function findNums(display)
{
    display.split('');

    for(let  i =0; i < display.length; i++)
    {
        if(display[i].includes('1'))
        {
        
        return true;
        }
        else if(display[i].includes('2'))
        {
         
         return true;
        }
        else if(display[i].includes('3'))
        {
          
        return true;
        }
        else if(display[i].includes('4'))
        {
           
          return true; 
        }
        else if(display[i].includes('5'))
        {
           
          return true; 
        }
        else if(display[i].includes('6'))
        {
           return true;
           
        }
        else if(display[i].includes('7'))
        {
          return true;
           
        }
        else if(display[i].includes('8'))
        {
           return true;
           
        }
        else if(display[i].includes('9'))
        {
           
           return true;
        }
        else if(display[i].includes('0'))
        {
           return true;
           
        }
    }

    return "false";
}


function numOperators(display)
{

    let count = 0;

   display = display.toString();

    display.split('');

    for(let  i =0; i < display.length; i++)
    {
        if(display[i].includes('+'))
        {
        count++;
        }
        else if(display[i].includes('-'))
        {
         count++;  
        }
        else if(display[i].includes('*'))
        {
          count++;
        }
        else if(display[i].includes('/'))
        {
           count++;
        }
        
    }

    return count;
}

function findOperater(display){
    let operator;
    display = display.toString();

    display.split('');

    for(let  i =0; i < display.length; i++)
    {
        if(display[i].includes('+'))
        {
        operator = '+';
        return operator;
        }
        else if(display[i].includes('-'))
        {
         operator = '-';  
         return operator;
        }
        else if(display[i].includes('*'))
        {
          operator = '*';
          return operator;
        }
        else if(display[i].includes('/'))
        {
           operator = '/';
           return operator;
        }
        
    }

    return "No valid operators";

}

function operate(operator, numOne, numTwo){

    if(operator == '+'){
     return add(numOne, numTwo);
    }else if(operator == '-')
    {
       return subtract(numOne, numTwo);
    }else if(operator == '*')
    {
        return multiply(numOne, numTwo);
    }else if(operator == '/')
    {
        return divide(numOne, numTwo);
    }else{
        return "Please enter a valid operator and/or number";
    }

}

const numberButton = document.querySelectorAll('.number');
const operationButton = document.querySelectorAll('.operation');
let display = document.querySelector(".display");

const equalsButton = document.querySelector(".equal");
const clearButton = document.querySelector(".clear");




numberButton.forEach(button => {
    button.addEventListener('click', () => {
       display.textContent += button.textContent.toString();

    });
});

operationButton.forEach(button => {
    button.addEventListener('click', () => {
       
       display.textContent += button.textContent;
    });
});

equalsButton.addEventListener('click', button => {
if(findNums(display.textContent) == 'false')
{
    display.textContent = "Please enter numbers to calculate!";
    return null;
}
if(findNums(display.textContent.slice(display.textContent.indexOf(findOperater(display.textContent)))) == 'false')
    {
        display.textContent = "Please enter a second number!";
        return null;
    }
    if(findNums(display.textContent.substring(0, display.textContent.indexOf(findOperater(display.textContent)))) == 'false')
        {
            display.textContent = "Please enter an initial number!";
            return null;
        }
    let numOne;
    let numTwo;
    let operator;
    let operatorIndex;
    let result = 0;
    let count = 0;
//numOperands works!!!
    let numOperands = numOperators(display.textContent);
    //console.log(numOperands);
    if(numOperands > 1){
    while (count < numOperands){
        
    operator = findOperater(display.textContent);
    
    //console.log(operator);
    operatorIndex = display.textContent.indexOf(operator);

    
    //console.log(operatorIndex);
    numTwo = getNumTwo(display.textContent, operatorIndex);
    //display.textContent = display.textContent.slice(numTwo + 1);
   // console.log(display.textContent);
    //console.log(operatorIndex);
    //console.log(numTwo);
    if(count == 0){
    numOne = display.textContent.slice(0, operatorIndex);
    }
    console.log(numOne);
    console.log(numTwo);
    numTwo = parseFloat(numTwo);
    numOne = parseFloat(numOne);
    
    
    
    if( operator == '/' && numTwo == 0)
    {
        result = 0;
        display.textContent = "Cannot divide by zero";
        return null;
    }else{

        result = operate(operator, numOne, numTwo);
    
   
       
    }
    newDisplay = display.textContent.slice(display.textContent.indexOf(findOperater(display.textContent)) + 1);
    
    display.textContent = newDisplay;
    display.textContent = display.textContent.slice(display.textContent.indexOf(findOperater(display.textContent))); 
    if(findNums(display.textContent) == 'false')
    {
        display.textContent = "Cannot end an expression with an operator!";
        return null;
    }
    console.log(display.textContent);
    numOne = result;
    count ++;
    console.log(result);
    
    }
    
    

    
    }
    else{
        operator = findOperater(display.textContent);
        
    console.log(operator);
    operatorIndex = display.textContent.indexOf(operator);
    console.log(operatorIndex);
    numTwo = getNumTwo(display.textContent, operatorIndex);
    
    numOne = display.textContent.slice(0, operatorIndex);

    numTwo = parseFloat(numTwo);
    numOne = parseFloat(numOne);
    console.log(numOne);
    console.log(numTwo);
    
    
    display.textContent = '';

    if( operator == '/' && numTwo == 0)
    {
        result = 0;
        display.textContent = "Cannot divide by zero";
        return null;
    }else{

    result += operate(operator, numOne, numTwo);
    
    }
    }

    

    
    display.textContent = result.toString();

});

clearButton.addEventListener('click', button => {
    display.textContent = '';
});

