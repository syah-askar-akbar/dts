const calculatorScreen = document.querySelector('.calculator-screen');
const updateScreen = (number) => {
	calculatorScreen.value = number;
}

const numbers = document.querySelectorAll(".number");
//console.log(numbers);

let prevNumber = '';
let calculationOperator = '';
let currentNumber = '0';

const inputNumber = (number) => {
	if (currentNumber === '0') {
		currentNumber = number;
	} else {
		currentNumber += number;
	}
}

numbers.forEach((number) => {
	number.addEventListener("click", (event) => {
		//console.log(event.target.value);
		inputNumber(event.target.value);
		updateScreen(currentNumber);
	});
});

const operators = document.querySelectorAll('.operator');

operators.forEach((operator) => {
	operator.addEventListener('click', (event) => {
		//console.log(event.target.value);
		inputOperator(event.target.value);
	});
});

const inputOperator = (operator) => {
	if (calculationOperator === '') {
		prevNumber = currentNumber;
	}
	
	calculationOperator = operator;
	currentNumber = '0';
}

const equalSign = document.querySelector('.equal-sign');

equalSign.addEventListener('click', () => {
	//console.log('tombol sama dengan ditekan');
	calculate();
	updateScreen(currentNumber);
});

const calculate = () => {
	let result = '';
	switch(calculationOperator) {
		case '+':
			result = parseFloat(prevNumber) + parseFloat(currentNumber);
			break;
		case '-':
			result = parseFloat(prevNumber) - parseFloat(currentNumber);
			break;
		case '*':
			result = parseFloat(prevNumber) * parseFloat(currentNumber);
			break;
		case '/':
			result = parseFloat(prevNumber) / parseFloat(currentNumber);
			break;
		default:
			return;
	}
	currentNumber = result;
	calculationOperator = '';
}

const clearButton = document.querySelector('.all-clear');

clearButton.addEventListener('click', () => {
	//console.log('tombol AC ditekan');
	clearAll();
	updateScreen(currentNumber);
});

const clearAll = () => {
	prevNumber = '';
	calculationOperator = '';
	currentNumber = '0';
}

const decimal = document.querySelector('.decimal');

decimal.addEventListener('click', (event) => {
	//console.log(event.target.value);
	inputDecimal(event.target.value);
	updateScreen(currentNumber);
});

inputDecimal = (dot) => {
	currentNumber += dot;
}