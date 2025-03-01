const buttsInt = Array.from(document.getElementsByClassName('butt-int'));
const buttsMath = Array.from(document.getElementsByClassName('butt-math'));
const expressionEl = document.getElementById("expression");
const doc = document.body;

//definition const for btn math name
const PLUS = 'plus';
const MINUS = 'minus';
const MULTI = 'multi';
const DIVIDE = 'divide';
const PERCENT = 'percent';
const EQUAL = 'equal';
const ENTER = "Enter";
const CLEAR = 'clear';
const DELETE = 'Backspace';
const ABSOLUTE = 'absolute';
const DOT = "dot";

//definition const for btn math symbol
const PLUS_SYMBOL = '+';
const MINUS_SYMBOL = "-";
const MULTI_SYMBOL_SHOW = "x";
const MULTI_SYMBOL = "*";
const DIVIDE_SYMBOL = "/";
const PERCENT_SYMBOL = "%";
const EQUAL_SYMBOL = "=";
const DOT_SYMBOL = ".";
const WhITE_SPACE = ' ';


let expression = '';

//add events click btns number pad:
if (buttsInt.length > 0 && buttsInt.length <= 10) {
	buttsInt.forEach(btn => {
		btn.addEventListener('click', events => {
			onClickBtnNumbersPad(events, btn);
		});
	});
} else console.warn('Please check number pad!!');

//add events keydown number pad ...
doc.addEventListener("keydown", e => {
    const number = +e.key;
    if(number === NaN) return;
    buttsInt.find(item => {
        if(+item.getAttribute("value") === number) {
            item.classList.add("active");
            onClickBtnNumbersPad(e, item);
        }
    }
    )
})


// add event keyup number
doc.addEventListener("keyup", e => {
    const number = +e.key;
    if(number === NaN) return;
    buttsInt.find(item => {
        if(+item.getAttribute("value") === number) {
            item.classList.remove("active");
        }
    });
})


// add event click number
function onClickBtnNumbersPad(eventArgs, button) {
    if (!button) return;
    const number = button.getAttribute('value');
    expression += number;
    updateExpressionElement();
}

//add events click for btns Math
buttsMath.forEach(btn => {
	btn.addEventListener('click', eventArgs => {
		onClickBtnMath(eventArgs, btn);
	});
});

//add events keydown maths...
doc.addEventListener("keydown", e => {
    const math = e.key;
    switch(math) {
        case PLUS_SYMBOL: 
            buttsMath.find(item => {
                if(item.getAttribute("value") === PLUS) {
                    item.classList.add("active");
                    onClickBtnMath(e, item);
                }
            })
            break;
        case MINUS_SYMBOL:
            buttsMath.find(item => {
                if(item.getAttribute("value") === MINUS) {
                    item.classList.add("active");
                    onClickBtnMath(e, item);
                }
            })
            break;
        case DIVIDE_SYMBOL:
            buttsMath.find(item => {
                if(item.getAttribute("value") === DIVIDE) {
                    item.classList.add("active");
                    onClickBtnMath(e, item);
                }
            })
            break;
        case MULTI_SYMBOL:
            buttsMath.find(item => {
                if(item.getAttribute("value") === MULTI) {
                    item.classList.add("active");
                    onClickBtnMath(e, item);
                }
            })
            break;
        case PERCENT_SYMBOL:
            buttsMath.find(item => {
                if(item.getAttribute("value") === PERCENT) {
                    item.classList.add("active");
                    onClickBtnMath(e, item);
                }
            })
            break;
        case DOT_SYMBOL:
            buttsMath.find(item => {
                if(item.getAttribute("value") === DOT) {
                    item.classList.add("active");
                    onClickBtnMath(e, item);
                }
            })
            break;
        case EQUAL_SYMBOL:
            buttsMath.find(item => {
                if(item.getAttribute("value") === EQUAL) {
                    item.classList.add("active");
                    onClickBtnMath(e, item);
                }
            })
            break;
        case ENTER: 
            buttsMath.find(item => {
                if(item.getAttribute("value") === EQUAL) {
                    item.classList.add("active");
                    onClickBtnMath(e, item);
                }
            })
            break;
        case DELETE:
            buttsMath.find(item => {
                if (item.getAttribute("value") === DELETE) {
                    item.classList.add("active");
                    onClickBtnMath(e, item);
                }
            })
        default:
            break;
    }
})

// add event keyup btn math
doc.addEventListener("keyup", (e) => {
    const math = e.key;
    switch(math) {
        case PLUS_SYMBOL: 
            buttsMath.find(item => {
                if(item.getAttribute("value") === PLUS) {
                    item.classList.remove("active");
                }
            })
            break;
        case MINUS_SYMBOL:
            buttsMath.find(item => {
                if(item.getAttribute("value") === MINUS) {
                    item.classList.remove("active");
                }
            })
            break;
        case DIVIDE_SYMBOL:
            buttsMath.find(item => {
                if(item.getAttribute("value") === DIVIDE) {
                    item.classList.remove("active");
                }
            })
            break;
        case MULTI_SYMBOL:
            buttsMath.find(item => {
                if(item.getAttribute("value") === MULTI) {
                    item.classList.remove("active");
                }
            })
            break;
        case PERCENT_SYMBOL:
            buttsMath.find(item => {
                if(item.getAttribute("value") === PERCENT) {
                    item.classList.remove("active");
                }
            })
            break;
        case DOT_SYMBOL:
            buttsMath.find(item => {
                if(item.getAttribute("value") === DOT) {
                    item.classList.remove("active");
                }
            })
            break;
        case EQUAL_SYMBOL:
            buttsMath.find(item => {
                if(item.getAttribute("value") === EQUAL) {
                    item.classList.remove("active");
                }
            })
            break;
        case ENTER: 
            buttsMath.find(item => {
                if(item.getAttribute("value") === EQUAL) {
                    item.classList.remove("active");
                    onClickBtnMath(e, item);
                }
            })
            break;
        case DELETE:
            buttsMath.find(item => {
                if(item.getAttribute("value") === DELETE) {
                    item.classList.remove("active");
                }
            })
            break;
        default:
            break;
    }
})



function onClickBtnMath(eventArgs, button) {
	if (!button) return;
	const math = button.getAttribute('value');
    const isValidLastChar = validateNextMath(math);
	switch (math) {
        case PLUS:
			// if (!isValidLastChar) break;
			expression = expression.trim(); // always remove leading spaces and terminate space in expression when add math symbol
			expression += WhITE_SPACE;
			expression += PLUS_SYMBOL;
			expression += WhITE_SPACE;
			break;
		case MINUS:
            // if (!isValidLastChar) break;
			expression = expression.trim();
			expression += WhITE_SPACE;
			expression += MINUS_SYMBOL;
			expression += WhITE_SPACE;
			break;
        case MULTI:
            if (!isValidLastChar) break;
            if(isEmpty(expression)) break;
            expression = expression.trim();
            expression += WhITE_SPACE;
            expression += MULTI_SYMBOL_SHOW;
            expression += WhITE_SPACE;
            break;
        case DIVIDE:
            if (!isValidLastChar) break;
            if(isEmpty(expression)) break;
            expression = expression.trim();
            expression += WhITE_SPACE;
            expression += DIVIDE_SYMBOL;
            expression += WhITE_SPACE;
            break;
        case PERCENT:
            if(!isValidLastChar) break;
            if(isEmpty(expression)) break;
            expression = expression.trim();
            expression += PERCENT_SYMBOL;
            expression += WhITE_SPACE;
            break;
        case DOT:
            if(!isValidLastChar) break;
            if(isEmpty(expression)) break;
            expression = expression.trimEnd();
            expression += DOT_SYMBOL;
            break;
		case DELETE:
            if(isEmpty(expression)) break;
            expression = expression.trimEnd();
            expression = expression.slice(0, -1);
            expression = expression.trimEnd();
            const lastCharacter = expression[expression.length - 1];
            if (lastCharacter == PLUS_SYMBOL || lastCharacter == MINUS_SYMBOL || lastCharacter == DIVIDE_SYMBOL || lastCharacter == MULTI_SYMBOL_SHOW) {
                expression += WhITE_SPACE;
            }
            break;
        case CLEAR:
			expression = '';
			break;
        case EQUAL:
            if(isEmpty(expression)) break;
            expression = expression.replace(MULTI_SYMBOL_SHOW, MULTI_SYMBOL);
            expression = expression.replace(PERCENT_SYMBOL, " / 100");
            expression = String(eval(expression));
            break;
		default:
			break;
	}
	updateExpressionElement();
}


function isEmpty(express) {
    return express === "";
}

function validateNextMath(pSymbol) {
    //check something
	let isValidLastChar = false;
    let temp = expression.trim();
    const lastCharacter = temp[temp.length - 1];
	switch (pSymbol) {
		// case PLUS:
		// 	isValidLastChar = (lastCharacter !== PLUS_SYMBOL);
		// 	break;
        // case MINUS:
        //     isValidLastChar = lastCharacter !== MINUS_SYMBOL;
        //     break;
        case DIVIDE:
            isValidLastChar = lastCharacter !== DIVIDE_SYMBOL;
            break;
        case MULTI:
            isValidLastChar = lastCharacter !== MULTI_SYMBOL_SHOW;
            break;
        case DOT:
            isValidLastChar = lastCharacter !== DOT_SYMBOL;
            break;
        case PERCENT:
            isValidLastChar = lastCharacter !== PERCENT_SYMBOL;
            break;
		default:
			break;
	}
	return isValidLastChar;
}

function validateQuantityMath() {
    const temp = expression;
    console.log(typeof temp.slice(-2, -1));

}

function updateExpressionElement() {
	if (!expressionEl) return;
    if(expression.length >= 30) {
        expressionEl.classList.add("s-text");
    }
    if(expression.length >= 40) {
        expressionEl.classList.add("mini-text");
    }
	expressionEl.innerText = expression;
}

doc.addEventListener("keydown", (e) => {
    if(e.key === "F") {
        doc.classList.toggle("dark")
    }
    return;
})


