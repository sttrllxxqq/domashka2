// 5

let num1 = Number(prompt("Введіть перше число:"));
let num2 = Number(prompt("Введіть друге число:"));
let num3 = Number(prompt("Введіть третє число:"));

let average = (num1 + num2 + num3) / 3;

alert("Середнє арифметичне: " + average);




// 7

let numOrStr = prompt('input number or string');
console.log(numOrStr);

switch(true) {
  case numOrStr === null:
    console.log('ви скасували');
    break;
  case numOrStr.trim() === '':
    console.log('Empty String');
    break;
  case isNaN(+numOrStr):
    console.log(' number is Ba_NaN');
    break;
  default:
    console.log('OK!');
    break;
}