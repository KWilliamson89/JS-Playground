let x = Number(prompt("x: "));
let y = Number(prompt("y: "));
let operator;

console.log(calculator(x, y, operator));

let array = [];

for (let i = 0; i < 10; i++) {
    let value1 = i * 5;
    let value2 = i * i;
    let calc = calculator(value1, value2, "+");
    array.push(calc);
}


function calculator(x, y, operator){
    if (operator === "-"){
        return x - y;
    } else {
        return x + y;
    }
}

console.log(array);