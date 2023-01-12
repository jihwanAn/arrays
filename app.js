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

const testResults = [1, 2.2, 3.3, 4.4, -5, 10];
// const storedResults = testResults.slice(0, 4); // 배열을 복사, 새 주소를 가짐
const storedResults = testResults.concat([21, 1.1]); // push와는 다른 새로운 배열을 반환.

storedResults.push(9, 11);

console.log(testResults, storedResults);
console.log(storedResults.indexOf(2.2));

const personData = [{ name: "A", name: "B" }];
console.log(personData.indexOf({ name: "B" })); //객체가 있으면 실행되지 않음
