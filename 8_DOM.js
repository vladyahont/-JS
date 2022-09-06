/*

Document Object Model (DOM)


const html = document.getElementById("html");  - обращаемся через элемент (чреез id)
const css = document.getElementById("css");
const js = document.getElementById("js");

console.log(html);
console.log(css);
console.log(js);



const p = document.querySelector(".paragraf");  - обращаемся через селектор (р) или класс (.paragraf)
console.log(p);



const divs = document.querySelectorAll("div");  - обращается сразу ко всем селекторам div и выводит всё в массив
                     .querySelector('div)    - если обратится без (All) - document обратится только к первому div
console.log(divs);



const js = document.getElementById("js");

console.log(js.innerHTML);  - innerHTML выводит в консоль всё что находится в (div id='js')



js.innerHTML = "Python";  - innerHTML так же может менять данные в HTML через js

*/
