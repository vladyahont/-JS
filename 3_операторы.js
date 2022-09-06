/*  

Операторы сравнения:
(возвращают логический тип данных (true или false))
>
<
<=
>=
==   - (просто равно)
===  - (строгое равно, определяется ещё и по типу данных)
!=   - (не равно)


      1. *оператор IF!

if (10 > 9) {
   console.log("Hello");  - если условие верно (true), то консоль отрабатывает; если (false) - консоль ничего не выводит в браузер
 }


if ("JavaScript" == "Python") {
   console.log("Hello");   - возвращает не равно
 }

 if (1 == "1") {
   console.log("Hello");   - возвращает равно
 }

 if (1 === "1") {
     console.log("Hello"); - возвращает не равно, так как в одном случае чисто а в другом текс
   }
______________________________________________________
     2. * оператоп IF Else

 if (10 < 8) {
   console.log("Yes, 10 less then 8");
    } else {
   console.log("No, 10 more then 8");
    }
______________________________________________________
    3. * оператор IF Else IF

 if (10 < 8) {
   console.log("Yes, 10 less then 8");
 } else if (10 == 8) {
   console.log("10 equals 8");
 } else console.log("No, 10 more then 8");

    4. * swich case

 const color = 'red'

 switch(color) {
     case 'green' :
         console.log('Это зеленый')
         break                               - (разрыв, перерыв, обрыв)
     case 'red' :
         console.log('Это красный')
         break
     case 'orange' :
         console.log('Это оранжевый')
     case default :                          - (отсутствие, невыполнение условий)
         console.log('Непонятный цвет')
 }

 break - прекращает поиск при нахождении нужного условия

 */
