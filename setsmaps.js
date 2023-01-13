const ids = new Set(["hi", "from", "set"]);
ids.add(2);
if (ids.has("hi")) {
  ids.delete("hi");
}

for (const entry of ids.entries()) {
  console.log(entry[0]);
}
//entries()대신 values()를 사용하면 Set 값을 한번만 출력하는 이터러블을 반환
