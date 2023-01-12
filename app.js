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

const hobbies = ["Sports", "Cooking"];
hobbies.push("Reading"); // 새 요소 추가
hobbies.unshift("Coding"); // 첫 부분에 추가
const poppedValue = hobbies.pop(); //마지막 요소 삭제
console.log(poppedValue); // 위 삭제 요소 반환
hobbies.shift(); // 첫 요소 삭제
console.log(hobbies);

hobbies[1] = "Coding";
// hobbies[5] = "Reading";
console.log(hobbies, hobbies[5]);

hobbies.splice(0, 0, "Good Food"); //실제 배열에서만 사용 (이터러블, 배열 같은 객체 안됨)
console.log(hobbies);
const removedElement = hobbies.splice(0, 1);
console.log(removedElement);
