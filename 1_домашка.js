// Lesson 1
const city = "Novogrudok",
  countr = "Belarus",
  peopl = 30000,
  stad = true;

console.log(city);
console.log(countr);
console.log(peopl);
console.log(stad);

// Lesson 2

const hight = 40,
  width = 70;

result = hight * width;
console.log(result + " см");

// Lesson 3

const time = 2,
  speedOfFirst = 95,
  speedOfSecond = 114;

distanceOfFirst = time * speedOfFirst;
distanceOfSecond = time * speedOfSecond;

console.log(distanceOfFirst);
console.log(distanceOfSecond);

const distBetwCity = distanceOfFirst + distanceOfSecond;

console.log(distBetwCity);

// Lesson 4

const randomNumber = Math.floor(Math.random() * 100);

if (randomNumber < 20) {
  console.log("randomNumber меньше 20");
} else if (randomNumber > 50) {
  console.log("randomNumber больше 20");
} else {
  console.log("randomNumber больше 20 и меньше 50");
}

//5 Lesson 5

switch (randomNumber) {
  case "randomNumber < 20":
    console.log("randomNumber меньше 20");
    break;
  case "randomNumber > 20":
    console.log("randomNumber больше 20");
    break;
  case "20 < randomNumber < 50":
    console.log("randomNumber больше 20 и меньше 50");
  default:
    console.log("не подходит под условия");
}
