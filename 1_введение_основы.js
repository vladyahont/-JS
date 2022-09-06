/*

// let - переменная

 let number = 8;
 number = 20; - переменные читаются последовательно (сразу было 8, затем стало 20, так как 20 идет ниже)
 console.log(number);  - консоль переносящая значения данных в браузер
 number = 5; - 5 идет ниже console.log, поэтому отображается 20
 console.log(number) - если сново прописать console.log то уже будет учитываться 5 так как она идет последним

  // const - постоянная

 const number2 = 100; - постоянная, прописываем когда переменная не будет менятся
 const number2 = 200;  200 уже не учитывается, так как 'const number2 = 100' и она теперь будет постоянной
 console.log(number2);

_____________________________________________________
  - названия для переменных должны быть правильными и не зарезервырованными(нужно всегда проверять)

const cena - так нельзя!
const itog - тоже нельзя!

 const name = 'Alex',  - имена
       number = 10,    - цифры
       colors = ['green', 'blue', 'red', 'black'],  - цвета
       user {          - объекты
         id: 1,
         firstName = 'Sergay'
       },
       printName = () => {   - функции
         console.log('Hello')
       }

_____________________________________________________

 const number1 = 100;
 const number2 = 10;

 let result = number1 + number2;
 result = number1 - number2;
 result = number1 * number2;
 result = number1 / number2;
 console.log(result);

 const firstName = "Ivan",
   srcondName = "Nikolaev";

 let result2 = firstName + " " + srcondName; - процесс конкотинации - процесс сложения двух строк
 console.log(result2);
*/
