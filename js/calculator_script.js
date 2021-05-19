class Calculator {

  constructor() {
    this.operand1 = 0;
    this.operand2 = 0;
    this.operation;
    this.result = 0;
  }

  setOperand1(_operand1) {
    this.operand1 = _operand1
  }

  setOperand2(_operand2) {
    this.operand2 = _operand2
  }

  setOperation(_operation) {
    this.operation = _operation
  }

  setResult() {

    if (this.operation == '/' && this.operand2 == 0) {
      return "error"
    } else {
      switch (this.operation) {
        case '/':
          this.result = this.operand1 / this.operand2;
          break;
        case '*':
          this.result = this.operand1 * this.operand2;
          break;
        case '+':
          this.result = this.operand1 + this.operand2;
          break;
        case '-':
          this.result = this.operand1 - this.operand2;
          break;
      }
    }
  }

  getResult() {
    return this.result;
  }

  clearCalculator() {
    this.operand1 = 0;
    this.operand2 = 0;
    this.operation = '';
    this.result = 0;
    return true;
  }
}

const calcular = new Calculator();
let buttonOn = 0; 

// -------- EVITEI CRIAR VARIÁVEIS ------//

//------------------------ SHOW VALUES -------------------------//

function numbers(_numbersOperand) {
  if (buttonOn % 2 == 0) {
    document.getElementById('accountResult').innerHTML += "";
  } else {
    document.getElementById('accountResult').innerHTML += _numbersOperand;
  }
}
//-----------------------------------------------------------------//


//------------------------ SET OPERATION AND NUMBER -------------------------//

function operation(_operation) {
  calcular.setOperand1(Number(document.getElementById('accountResult').textContent));
  calcular.setOperation(_operation);
  if (buttonOn % 2 == 0) {
    document.getElementById('accountResult').innerHTML += "";
  } else {
    document.getElementById('accountResult').innerHTML = _operation;
    setTimeout(function () { document.getElementById('accountResult').innerHTML = "" }, 300)
  }
}
//-----------------------------------------------------------------//


//------------------------ CLEAN CALCULATOR ---------------------------//
function cleanResult() {
  calcular.clearCalculator()
  document.getElementById('accountResult').innerHTML = "";
}
//-----------------------------------------------------------------//


//------------------------- DELETE NUMBERS -------------------------//
function deleteResult() {
  let numberClickResult = document.getElementById('accountResult').textContent;
  document.getElementById('accountResult').innerHTML = numberClickResult.substring(0, numberClickResult.length - 1);
}
//-----------------------------------------------------------------//


//------------------------- GET RESULT -----------------------------//

function calculateResult() {
  calcular.setOperand2(Number(document.getElementById('accountResult').textContent))
  calcular.setResult()
  if (buttonOn % 2 == 0) {
    document.getElementById('accountResult').innerHTML += "";
  } else {
    document.getElementById('accountResult').innerHTML = calcular.getResult();
  }
}
//-----------------------------------------------------------------//

//----------------------------ON/OFF------------------------------//
function onOff() {
  buttonOn++
  console.log(buttonOn)
  if ((buttonOn % 2) == 0) {
    document.getElementById('accountResult').innerHTML = "Goodbye";
    setTimeout(function () { document.getElementById('accountResult').innerHTML = "" }, 700)
  } else {
    document.getElementById('accountResult').innerHTML = "Welcome";
    setTimeout(function () { document.getElementById('accountResult').innerHTML = "" }, 700)
  }
}
//-----------------------------------------------------------------//