// var 재선언 o 재할당 o 범위가 function
// let 재선언 x 재할당 o 범위가 {}
// const 재선언 x 재할당 x 범위가 {}

let 이름 = "kim";
// let 이름이라는 부분은 선언, 이름 = Kim 이라는 부분은 값 할당

var practice;
var practice;
// 재선언 가능
let practice;
let practice;
// let은 error 재선언 불가능
const practice = "good";
const practice = "good";
// const는 error 재선언 불가능

let firstName = "Kim";
firstName = "Park";
// 재할당 가능

const 나이 = 26;
나이 = 1000;
// 재할당 불가능

const 사람 = { 이름: "Kim" };
사람.이름 = "park";
// const로 오브젝트를 만들었을 때 오브젝트 내부 값 변경해도 에러가 안 남

// 수정불가능한 오브젝트를 만들고 싶으면
Object.freeze(사람);

// function 변수의 범위

function varFunction() {
  var name1 = "jeong";
  console.log(name1); // 가능
}
console.log(name1); // 에러

// var의 범위 = 함수 내부

if (1 === 1) {
  let name2 = "jeong";
  console.log(name2); // 가눙
}
console.log(name2); // 에러

if (1 === 1) {
  const name3 = "jeong";
  console.log(name3); // 가능
}
console.log(name3); // 에러

// let, const 범위 = {} 내부
