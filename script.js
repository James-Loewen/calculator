const displayText = document.querySelector('#display-text');
let expression = {
  firstNumber: displayText.textContent,
  operator: '',
  secondNumber: '',
  sum: ''
};

function getNumber(e) {
  let num = e.target.value;
  displayText.textContent += num;
  if (!expression.operator) {
    expression.firstNumber += num;
  } else {
    expression.secondNumber += num;
  }
  console.log(num);
}

function getOperator(e) {
  let sign = e.target.textContent;
  if (expression.firstNumber && !expression.secondNumber && !expression.operator) {
    expression.operator = sign;
    displayText.textContent += sign;
  }
  console.log(sign);
}

function add(a, b) {
  return parseInt(a) + parseInt(b);
}

function subtract(a, b) {
  return parseInt(a) - parseInt(b);
}

function multiply(a, b) {
  return parseInt(a) * parseInt(b);
}

function divide(a, b) {
  if (b !== '0') {
    return parseInt(a) / parseInt(b);
  } else {
    return "You a whole bitch."
  }
}

// function whichOperation(expression) {
//   switch (expression.operator) {
//     case '+':
//       console.log('add, dummy');
//       break
//     case '-':
//       console.log('subtract, fool');
//       break
//     case '×':
//       console.log('multiplay, coward');
//       break
//     case '÷':
//       console.log('divide, you fucking idiot');
//   }
// }

function operate() {
  if (expression.firstNumber && expression.operator && expression.secondNumber) {
    let sum;
    switch (expression.operator) {
      case '+':
        sum = add(expression.firstNumber, expression.secondNumber);
        displayText.textContent = sum;
        // console.log('is this thing on?');
        break
      case '-':
        sum = subtract(expression.firstNumber, expression.secondNumber);
        displayText.textContent = sum;
        // console.log('subtract, fool');
        break
      case '×':
        sum = multiply(expression.firstNumber, expression.secondNumber);
        displayText.textContent = sum;
        // console.log('multiplay, coward');
        break
      case '÷':
        sum = divide(expression.firstNumber, expression.secondNumber);
        displayText.textContent = sum;
        // console.log('divide, you fucking idiot');
        break
    }
    expression = {
      firstNumber: sum,
      operator: '',
      secondNumber: '',
      sum: ''
    };
  }
}

function clear() {
  displayText.textContent = '';
  expression = {
    firstNumber: '',
    operator: '',
    secondNumber: '',
    sum: ''
  };
}

const allClear = document.querySelector('#clear');
allClear.addEventListener('click', clear);

const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach(btn => {
  btn.addEventListener('click', getNumber);
});

const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach(btn => {
  btn.addEventListener('click', getOperator);
})

const equalsButton = document.querySelector('#equals');
equalsButton.addEventListener('click', operate);