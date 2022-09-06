/*
//#Существует 8 основных типов данных:

*
/ 1. number - числовой тип данных используется как для целых так и для дробных чисел

const num1 = 22;
const num2 = 22.345; - число с плавающей точкой

infinity и Nan(Not a Number):

let result = 1 / 0;
console.log(result)    - получаем *infinity(бесконечность);

let result = "Alex" * 3;
console.log(result)    - получаем *NaN (не число)
______________________________________________________________

*
/ 2.bigInt (Big Integer) - всё, что больше чем 2 в 53 степени)

let maxNum = Number.MAX_SAFE_INTEGER;
console.log(maxNum);

let bigIntNum = 900719925474099132n  - чтобы создать *bigint - записываешь любое число и в конце дописываешь 'n'
console.log(bigIntNum)
________________________________________________________________

*
/ 3. string (строка)

let str1 = "Hello";
let str2 = 'She said: "Hello" ';

// console.log(str2);

let firstName = "Sergay";
let lastName = "Demin";

let fullName = `${firstName} ${lastName}`;
console.log(fullName);
_______________________________________________________________

*
/ 4. boolean (true или false)

let variable1 = true
let variable2 = false
_______________________________________________________________

*
/ 5. null (пусто)

let emty = null  - когда нет значения, которое нужно вписать пишем 'null'
_______________________________________________________________

*
/ 6. undefined (ничего или неопределенный)

let test;
console.log(test);  - при просмотре когда в браузере при таком раскладе в console выводится 'undefined' - означает что значение переменной не присвоено
_______________________________________________________________

*
/ 7. object (некая структура с данными и значениями)

let user = {
    id:1
    firstName: 'Alex'
    age: 25
}
_______________________________________________________________

*
/ 8. symbol

let sym = Symbol();
console.log(sym);
_______________________________________________________________
_______________________________________________________________

/ 1. let numb = 20  - number
/ 2. let bigIntNum = 900719925474099132  - bigInt
/ 3. let srt1 = 'Hello'  - string
/ 4. let variable1 = true  - boolean
/ 5. let empty = null  - null
/ 6. let test  - undefined
/ 7. let user = {id: 1, firstName: 'Alex'}  - object
/ 8. let sym = Symbol()  - symbol

console.log(typeof)  - вводим для проверки типа данных (number, bigInt или string)

*/
