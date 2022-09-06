/*
Как взаимодействовать с классами 

.getElementById("div") - 'получать этомент по id'
const div = document.getElementById("div");  

console.log(div.className);

div.className = "div-green";

div.classList.add     - добавить
div.classList.remove  - удалить
div.classList.toggle  - переключать


const div = document.getElementById("div");
div.classList.add("div-green");              - добавляет класс


const div = document.getElementById("div");
div.classList.remove("div-red");             - удаляет класс


const div = document.getElementById("div");

div.classList.toggle("div-green");   - добавляет класс если его не было и удаляет если был такой же
                                    изначало был (class='red'); теперь если мы пропишем ('div-red') - он
                                    удалится, а если пропишем ('div-green') - добавиться зеленый
                                    

addEventListener  - 'добавить прослушиватель события'. Он принимает 2 параметра(2аргумента): 
                                                        1) название
                                                        2) функция

const div = document.getElementById("div");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  div.classList.toggle("hide");
});

const div = document.getElementById("div");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  div.style.fontSize = "50px";           - меняет стили (шрифт)
  div.style.color = "green";             - сеняет стили (цвет)
});



const btn = document.getElementById("btn");

const showMessage = () => {
  alert("Ты нажал на кнопку");
};

btn.onclick = showMessage;

btn.addEventListener('click', => {   - лучше использовать этот способ
    showMessage1();                    так так в функцию можно вписать
    showMessage2();                    несколько задач
    showMessage3()                      
})                                     


const div = document.querySelector("div");

const showMessage = () => {
    alert("Hello world");
};

div.addEventListener("mouseover", showMessage);  - получаем уведомление как только наводим мышью на нужный обьект
div.addEventListener("mouseout", showMessage);  - получаем уведомление как только уберем курсор с обекта(после того как перед этим навели на него)

div.addEventListener("mouseout", () => { - 
    alert("Hello world");
});

*/
