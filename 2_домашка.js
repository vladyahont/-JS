/*

Lesson 1

for (let i = 10; i <= 50; i = i + 2) {
  console.log(i);
}
_________________________________________

Lesson 2
let aboutMe = {
    Name: "Vladislav",
    Surname: "Yahont",
    Age: 24,
    Pet: true,
};
console.log(aboutMe.Name);
________________________________________

Lesson 3
const array = [
    "я в Сисбирск,",
    "в трактире.",
    "с утра",
    '"В ту же ночь',
    "Я остановился",
    "для закупки",
    "что и было поручено Свельичу.",
    "приехал",
    "где должен был",
    "нужных вещей",
    'отправился по лавкам"',
    "пробыть сутки",
    "Савельич",
];

const result = [
    array[3],
    array[7],
    array[0],
    array[8],
    array[11],
    array[5],
    array[9],
    array[6],
    array[4],
    array[1],
    array[12],
    array[2],
    array[10],
];
console.log(result);

const result1 =
array[3] +
array[7] +
array[0] +
array[8] +
array[11] +
array[5] +
array[9] +
array[6] +
array[4] +
array[1] +
array[12] +
array[2] +
array[10];

console.log(result1);

const result2 = `${array[3]} ${array[7]} ${array[0]} ${array[8]} ${array[11]} ${array[5]} ${array[9]}
${array[6]}${array[4]} ${array[1]} ${array[12]} ${array[12]} ${array[2]} ${array[10]}`;

console.log(result2);
_____________________________________________________

Lesson 4

const fullName = () => {
    const fullName = `${firstName} ${lastName}`;
    console.log(fullName);
};
firstName = "Vlad";
lastName = "Yahont";

fullName();
_____________________________________________________

Lesson 5
let i = 21;
while (i <= 67) {
    console.log(i);
    i = i + 2;
}

*/
