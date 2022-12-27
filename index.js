const actionAdd = 'add';
const actionSub = 'sub';
const actionMult = 'mult';
const actionDiv = 'div';

let userAction = prompt(`What kind of action you'd like to do? (only: ${actionAdd}, ${actionSub}, ${actionMult}, ${actionDiv})`);

while (!(userAction === actionAdd || userAction === actionSub || userAction === actionMult || userAction === actionDiv)) {
    userAction = prompt(`What kind of action you'd like to do? (only: ${actionAdd}, ${actionSub}, ${actionMult}, ${actionDiv})`);
}

let firstNumber = Number(prompt("Kindly enter the first number: "));

while (!(Number(firstNumber))) {
    firstNumber = Number(prompt("Kindly enter the first number: "));
}

let secondNumber = Number(prompt("Kindly enter the second number: "));

while (!(Number(secondNumber))) {
    secondNumber = Number(prompt("Kindly enter the second number: "));
}


switch (userAction) {
    case "add":
        result = firstNumber + secondNumber;
        break;
    case "sub":
        result = firstNumber - secondNumber;
        break;
    case "mult":
        result = firstNumber * secondNumber;
        break;
    case "div":
        result = firstNumber / secondNumber;
        break;
}

alert(`The result of ${userAction}: ${firstNumber} and ${secondNumber} = `+ result);