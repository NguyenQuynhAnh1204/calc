const buttsInt = Array.from(document.getElementsByClassName('butt-int'));
const buttsMath = Array.from(document.getElementsByClassName('butt-math'));
const expressionEl = document.getElementById('expression');

//definition const for btn math name
const PLUS = 'plus';
const ABSOLUTE = 'absolute';
const MINUS = 'minus';
const CLEAR = 'clear';

//definition const for btn math symbol
const PLUS_SYMBOL = '+';
const WhITE_SPACE = ' ';

//
let expression = '';

//add events click btns number pad:
if (buttsInt.length > 0 && buttsInt.length <= 10) {
	buttsInt.forEach(item => {
		item.addEventListener('click', events => {
			onClickBtnNumbersPad(events, item);
		});
	});
} else console.warn('Please check number pad!!');

//add events keydown number pad ...

//add events click for btns Math

buttsMath.forEach(btn => {
	btn.addEventListener('click', eventArgs => {
		onClickBtnMath(eventArgs, btn);
	});
});

//add events keydown maths...

function onClickBtnNumbersPad(eventArgs, button) {
	if (!button) return;
	const number = button.getAttribute('value');
	expression += number;
	updateExpressionElement();
}

function onClickBtnMath(eventArgs, button) {
	if (!button) return;
	const math = button.getAttribute('value');

	switch (math) {
		case PLUS:
			const isValid = validateNextMath(math);
			if (!isValid) break;
			expression = expression.trim(); // always remove leading spaces and terminate space in expression when add math symbol
			expression += WhITE_SPACE;
			expression += PLUS_SYMBOL;
			expression += WhITE_SPACE;
			break;
		case MINUS:
			validateNextMath();
			break;

		case CLEAR:
			expression = '';
			break;
		default:
			break;
	}
	updateExpressionElement();
}

function validateNextMath(pSymbol) {
	//check something
	let isValid = false;
	switch (pSymbol) {
		case PLUS:
			let temp = expression.trimEnd();
			const lastCharacter = temp[temp.length - 1];
			isValid = lastCharacter !== PLUS_SYMBOL;
			break;
		default:
			break;
	}

	return isValid;
}

function updateExpressionElement() {
	if (!expressionEl) return;
	expressionEl.innerText = expression;
}
