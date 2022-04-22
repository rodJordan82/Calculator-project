


const handleInput = (input)  => {
  
  switch (input) {
    case "0":
      inputNumber(input); //inputNumber(parseInt(parseFloat(Number(input))));
      break;
    case "1":
      inputNumber(input); //inputNumber(parseInt(parseFloat(Number(input))));
      break;
    case "2":
      inputNumber(input); //inputNumber(parseInt(parseFloat(Number(input))));
      break;
    case "3":
      inputNumber(input); //inputNumber(parseInt(parseFloat(Number(input))));
      break;
    case "4":
      inputNumber(input); //inputNumber(parseInt(parseFloat(Number(input))));
      break;
    case "5":
      inputNumber(input); //inputNumber(parseInt(parseFloat(Number(input))));
      break;
    case "6":
      inputNumber(input); //inputNumber(parseInt(parseFloat(Number(input))));
      break;
    case "7":
      inputNumber(input); //inputNumber(parseInt(parseFloat(Number(input))));
      break;
    case "8":
      inputNumber(input); //inputNumber(parseInt(parseFloat(Number(input))));
      break;
    case "9":
      inputNumber(input); //inputNumber(parseInt(parseFloat(Number(input))));
      break;
    case '+':
      operatorDecision(input);
      break;
    case '-':
      operatorDecision(input);
      break;
    case '*':
      operatorDecision(input);
      break;
    case '/':
      operatorDecision(input);
      break;
    case '=':
      operatorDecision(input);
      break;
    case '.':
      inputDecimal(input);
      break;
    case 'clear':
      wipeOut();
      break;
    default:
      //something very wrong if I'm in here
      //console.log(input, "inside input switch");
       break;
  }
  updateDisplay();
};


const calcObj = {
  firstNumber: null,
  hasSecondNumber: false,
  operator: null,
  screenOutput: '0',
};

wipeOut = () => {
  calcObj.firstNumber = null;
  calcObj.hasSecondNumber = false;
  calcObj.operator = null;
  calcObj.screenOutput = '0';
};

inputNumber = (num) => {
  if (calcObj.hasSecondNumber === true) {
    calcObj.screenOutput = num;
    calcObj.hasSecondNumber = false;
  } else {
    if(calcObj.screenOutput === '0' ){
      calcObj.screenOutput = num;    
    }else{
      calcObj.screenOutput = calcObj.screenOutput + num;
    }
  
  }
};

inputDecimal = (decimalPoint) => {
  if (calcObj.hasSecondNumber === true) {
  	calcObj.screenOutput = "0."
    calcObj.hasSecondNumber = false;
    return;
  }

  if (!calcObj.screenOutput.toString().match(/[.]/)) {
    calcObj.screenOutput += decimalPoint;
  }
};

operatorDecision = (nextOperator) => {
 
 let storedNumber = parseFloat(calcObj.screenOutput);
  
  if (calcObj.hasSecondNumber && calcObj.operator)  {
    calcObj.operator = nextOperator;
    return;
  }


  if (calcObj.firstNumber == null && !isNaN(storedNumber)) {
    calcObj.firstNumber = storedNumber;
  } else if (calcObj.operator) {
    let result = calcTime(calcObj.firstNumber, storedNumber, calcObj.operator);
      // trying to fix number issues....
    calcObj.screenOutput = `${parseFloat(result.toFixed(7))}`;
    calcObj.firstNumber = result;
  }

  calcObj.hasSecondNumber = true;
  calcObj.operator = nextOperator;
};

calcTime = (firstNumber, secondNumber, operator) => {
  if (operator === '+') {
    return firstNumber + secondNumber;
  } else if (operator === '-') {
    return firstNumber - secondNumber;
  } else if (operator === '*') {
    return firstNumber * secondNumber;
  } else if (operator === '/') {
    return firstNumber / secondNumber;
  }

  return secondNumber;
};



updateDisplay = () => {
  
  
  document.getElementById("display").innerHTML = calcObj.screenOutput;
 }

updateDisplay();

