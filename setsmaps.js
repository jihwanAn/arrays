// * Set은 데이터 구조로 고유한 값을 관리할 때 유용

// const ids = new Set(["hi", "from", "set"]);
// ids.add(2);
// if (ids.has("hi")) {
//   ids.delete("hi");
// }

// for (const entry of ids.entries()) {
//   console.log(entry[0]);
// }
// * entries()대신 values()를 사용하면 Set 값을 한번만 출력하는 이터러블을 반환

// const person1 = { name: "Coco" };
// const person2 = { name: "Chacha" };

// const personData = new Map([[person1, [{ date: "yesterday", price: 10 }]]]);

// personData.set(person2, [{ data: "two weeks ago", price: 100 }]);

// console.log(personData);
// console.log(personData.get(person1));

// for (const [key, value] of personData.entries()) {
//   console.log(key, value);
// }

// for (const key of personData.keys()) {
//   console.log(key);
// }

// for (const value of personData.values()) {
//   console.log(value);
// }

/**
 ** Maps (객체나 배열도 키로 가짐) 객체보다 유연성이 좋음
 ** 정말 큰 데이터(데이터 양 많음)라면 객체보다 성능 좋음
 ** 객체는 작거나, 중간크기의 데이터에 적합
 ** 객체에 있는 데이터와 상호작용하는 메서드 Map에서 사용 불가
 ** 초당 여러번 키-값 쌍을 추가, 삭제 하는 작업을 할때 좋음
 ** Set, Map은 배열 객체보다 드물게 사용
 */

let person = { name: "Max" };
const persons = new WeakSet(); // 숫자나 문자열은 저장 x
persons.add(person);

// ... some operations
person = null;

console.log(persons);

/**
 ** Set의 경우 불필요한 데이터가 메모리에 남음
 ** WeakSet() -> 객체를 지정해 놓은 모든 위치를 리셋했다면 더 이상 Set도 해당 객체를 저장해 두지 않고 삭제
 ** WeakSet은 가비지 컬렉션으로 Set에 포함되어 있는 항목을 직접 삭제. 더 이상 코드 일부로 남지않음
 */
