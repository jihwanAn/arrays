// //set은 데이터 구조로 고유한 값을 관리할 때 유용

// const ids = new Set(["hi", "from", "set"]);
// ids.add(2);
// if (ids.has("hi")) {
//   ids.delete("hi");
// }

// for (const entry of ids.entries()) {
//   console.log(entry[0]);
// }
// //entries()대신 values()를 사용하면 Set 값을 한번만 출력하는 이터러블을 반환

const person1 = { name: "Coco" };
const person2 = { name: "Chacha" };

const personData = new Map([[person1, [{ date: "yesterday", price: 10 }]]]);

personData.set(person2, [{ data: "two weeks ago", price: 100 }]);

console.log(personData);
console.log(personData.get(person1));

for (const [key, value] of personData.entries()) {
  console.log(key, value);
}

for (const key of personData.keys()) {
  console.log(key);
}

for (const value of personData.values()) {
  console.log(value);
}
