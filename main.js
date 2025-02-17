const buttsInt = Array.from(document.getElementsByClassName('butt-int'));
const buttsMath = Array.from(document.getElementsByClassName('butt-math'));
const expressionEl = document.getElementById('expression');

//definition const for btn math name
const PLUS = 'plus';
const MINUS = 'minus';
const MULTI = 'multi';
const DIVIDE = 'divide';
const EQUAL = 'equal';
const CLEAR = 'clear';
const DELETE = 'delete';
const ABSOLUTE = 'absolute';

//definition const for btn math symbol
const PLUS_SYMBOL = '+';
const MINUS_SYMBOL = "-";
const MULTI_SYMBOL = "*";
const DIVIDE_SYMBOL = "/";
const EQUAL_SYMBOL = "=";
const WhITE_SPACE = ' ';


let expression = '';

//add events click btns number pad:
if (buttsInt.length > 0 && buttsInt.length <= 10) {
	buttsInt.forEach(btn => {
		btn.addEventListener('click', events => {
            console.log(btn);
			onClickBtnNumbersPad(events, btn);
		});
	});
} else console.warn('Please check number pad!!');




//add events keydown number pad ...



function onClickBtnNumbersPad(eventArgs, button) {
    if (!button) return;
    const number = button.getAttribute('value');
    expression += number;
    updateExpressionElement();
}




//add events click for btns Math
buttsMath.forEach(btn => {
	btn.addEventListener('click', eventArgs => {
        console.log(btn);
		onClickBtnMath(eventArgs, btn);
	});
});

//add events keydown maths...


function onClickBtnMath(eventArgs, button) {
	if (!button) return;
	const math = button.getAttribute('value');
    const isValid = validateNextMath(math);
	switch (math) {
        case PLUS:
			if (!isValid) break;
			expression = expression.trim(); // always remove leading spaces and terminate space in expression when add math symbol
			expression += WhITE_SPACE;
			expression += PLUS_SYMBOL;
			expression += WhITE_SPACE;
			break;
		case MINUS:
            if (!isValid) break;
			expression = expression.trim();
			expression += WhITE_SPACE;
			expression += MINUS_SYMBOL;
			expression += WhITE_SPACE;
			break;
        case MULTI:
            if (!isValid) break;
            expression = expression.trim();
            expression += WhITE_SPACE;
            expression += MULTI_SYMBOL;
            expression += WhITE_SPACE;
            break;
        case DIVIDE:
            if (!isValid) break;
            expression = expression.trim();
            expression += WhITE_SPACE;
            expression += DIVIDE_SYMBOL;
            expression += WhITE_SPACE;
            break;
		case DELETE:
            expression = expression.trimEnd();
            expression = expression.slice(0, -1);
            break;
        case CLEAR:
			expression = '';
			break;
        case EQUAL:
            if(!expression)return;
            expression = String(eval(expression));
            break;
		default:
			break;
	}
	updateExpressionElement();
}

function validateNextMath(pSymbol) {
    //check something
	let isValid = false;
    let temp = expression.trim();
    const lastCharacter = temp[temp.length - 1];
	switch (pSymbol) {
		case PLUS:
			isValid = lastCharacter !== PLUS_SYMBOL;
			break;
        case MINUS:
            isValid = lastCharacter !== MINUS_SYMBOL;
            break;
        case DIVIDE:
            isValid = lastCharacter !== DIVIDE_SYMBOL;
            break;
        case MULTI:
            isValid = lastCharacter !== MULTI_SYMBOL;
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
