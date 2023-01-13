// const numbers = [1, 2, 3];
// console.log(numbers);

// // const moreNumbers = Array(5, 2);
// // console.log(moreNumbers);

// // const yetMoreNumbers = Array.of(1, 2);
// // console.log(yetMoreNumbers);

// const listItems = document.querySelectorAll("li");
// console.log(listItems);

// const arrayListItems = Array.from(listItems);
// console.log(arrayListItems);

// const hobbies = ["Cooking", "Sports"];
// const personalData = [30, "Na", { moreDetail: [] }];

// const analyticsData = [
//   [1, 1.6],
//   [-5, 4, 2, 1],
// ];

// for (const data of analyticsData) {
//   for (const dataPoint of data) {
//     console.log(dataPoint);
//   }
// }

// console.log(typeof personalData[0]);

// const hobbies = ["Sports", "Cooking"];
// hobbies.push("Reading"); // 새 요소 추가
// hobbies.unshift("Coding"); // 첫 부분에 추가
// const poppedValue = hobbies.pop(); //마지막 요소 삭제
// console.log(poppedValue); // 위 삭제 요소 반환
// hobbies.shift(); // 첫 요소 삭제
// console.log(hobbies);

// hobbies[1] = "Coding";
// // hobbies[5] = "Reading";
// console.log(hobbies, hobbies[5]);

// hobbies.splice(0, 0, "Good Food"); //실제 배열에서만 사용 (이터러블, 배열 같은 객체 안됨)
// console.log(hobbies);
// const removedElement = hobbies.splice(0, 1);
// console.log(removedElement);

// const testResults = [1, 2.2, 3.3, 4.4, -5, 10];
// // const storedResults = testResults.slice(0, 4); // 배열을 복사, 새 주소를 가짐
// const storedResults = testResults.concat([21, 1.1]); // push와는 다른 새로운 배열을 반환.

// storedResults.push(9, 11);

// console.log(testResults, storedResults);
// console.log(storedResults.indexOf(2.2)); // 찾지 못한 경우 -1반환

// console.log("in", testResults.includes(3.3)); // 배열의 일부인지 true/false
// console.log("in", testResults.indexOf(3.3) !== -1);

// const personData = [{ name: "A" }, { name: "B" }];
// console.log(personData.indexOf({ name: "B" })); //객체가 있으면 실행되지 않음

// const B = personData.find((person, idx, persons) => {
//   return person.name === "B";
// });

// B.name = "DO";
// // 동일한 객체의 동일한 참조 값이므로 find()는 복사를 생성하지 않음
// console.log(B, personData);

// const maxIndex = personData.findIndex((person, idx, persons) => {
//   return person.name === "A";
// }); // 해당 항목의 인덱스를 반환하는 것이 차이점
// console.log(maxIndex);

// const prices = [10.99, 5.99, 3.99, 9.99];
// const tax = 0.99;
// const taxAdjustedPrices = [];

// // for (const price of prices) {
// //   taxAdjustedPrices.push(price * (1 + tax));
// // }

// //for 반복문 대안
// prices.forEach((price, idx, prices) => {
//   const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
//   taxAdjustedPrices.push(priceObj);
// });

// console.log(taxAdjustedPrices);

const prices = [10.99, 5.99, 3.99, 9.99];
const tax = 0.99;

const taxtAdjustedPrices = prices.map((price, idx, prices) => {
  const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
  return priceObj;
});

// console.log(prices, taxtAdjustedPrices);

const sortedPrices = prices.sort((a, b) => {
  if (a > b) {
    return -1;
  } else if (a === b) {
    return 0;
  } else {
    return 1;
  }
});
// console.log(sortedPrices.reverse());
console.log(sortedPrices);

//filter(), 가격이 6보다 큰
const filteredArray = prices.filter((price) => 6 < price);

console.log(filteredArray);

// let sum = 0;
// prices.forEach((price) => {
//   sum += price;
// });

// console.log(sum);

//배열의 값을 단일값으로 할때 유용
const sum = prices.reduce(
  (prevValue, curValue, curIndex, prices) => prevValue + curValue,
  0
);

console.log("sum", sum);

const data = "new york;10.99;3000";

const transformedData = data.split(";");
transformedData[1] = +transformedData[1];
console.log(transformedData);

const nameFragmenets = ["Mr", "Kaki"];
const name = nameFragmenets.join(".");
console.log("Hello", name);

const copiedNameFragments = [...nameFragmenets]; //전개 구문
nameFragmenets.push("42");
console.log(nameFragmenets, copiedNameFragments);

console.log(Math.min(...prices));

const persons = [
  { name: "Max", age: 30 },
  { name: "Nana", age: 31 },
];
const copiedPersons = [
  ...persons.map((person) => ({ name: person.name, age: person.age })),
];

persons.push({ name: "Kaka", age: 73 });
persons[2].age = 99;

console.log(persons, copiedPersons);
