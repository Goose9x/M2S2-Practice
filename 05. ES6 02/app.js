// Promblem 01
// (done)
function* iterate(a, b) {
  for (let i = a; i <= b; i += 1) {
    yield i;
  }
}
console.log(iterate(1, 6));
function range(a, b) {
  let result = [...iterate(a, b)];
  console.log(result);
}

range(1, 100);
// should print 0..100 by step 1
// 0 1 2 … 100
function* iterate4(a, b) {
  for (let i = a; i <= b; i += 4) {
    yield i;
  }
}
console.log(iterate(1, 6));
function range4(a, b) {
  let result = [...iterate(a, b)];
  console.log(result);
}
range4(6, 30);
// // should print 6..30 by step 4
// 6 10 14 … 30

// Problem 03 (done)
// Cho một array --- Một danh sách các đối tượng ở bên
// trong
// Mỗi đối tượng đều có các thuộc tính: id, name, age.
// Nhiệm vụ của bạn là xoá đi những đối tượng trùng lặp trong danh sách đó. Mỗi đối tượng bên trong được
// coi là trùng lặp khi chúng có trùng id

// var arr = [
//   {
//     id: 1,
//     name: "Dung",
//     age: 20,
//   },
//   {
//     id: 2,
//     name: "Diu",
//     age: 20,
//   },
//   {
//     id: 3,
//     name: "Thanh",
//     age: 18,
//   },
//   {
//     id: 3,
//     name: "trang",
//     age: 18,
//   },
//   {
//     id: 3,
//     name: "Ky",
//     age: 20,
//   },
//   {
//     id: 1,
//     name: "Hai",
//     age: 22,
//   },
// ];
// const filteredArr = arr.reduce((pre, cur) => {
//   const x = pre.find((item) => item.id === cur.id);
//   if (!x) {
//     return pre.concat([cur]);
//   } else {
//     return pre;
//   }
// }, []);
// console.log(filteredArr);
