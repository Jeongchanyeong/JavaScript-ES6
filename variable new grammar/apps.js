// 문제 1
함수();
function 함수() {
  let 안녕 = "Hello!";
  console.log(안녕);
}
// 콘솔창 출력 결과는? error
// 해설 : let 안녕 은 hoisting이 될텐데 에러가 뜨는 이유는
// let const : hoisting시 undefined가 자동으로 할당되지 않음
// var : Hoisting시 undefined가 자동으로 할당

// 문제 2
hello(); // Hello가 아니야
var hello = function () {
  console.log(안녕);
  var 안녕 = "Hello!";
};
// 콘솔창 출력 결과는? error O 함수가 아닙니다 에러
// 함수를 선언, 할당중
// Hoisting은 변수의 선언부분만 되어 변수 선언부분만 맨 위로 끌어올려짐
// 변수에 소괄호를 붙여봤자 아직 함수가 아님 (함수가 아닙니다 에러 뜸)

// 문제 3
let a = 1;
var 함수 = function () {
  a = 2;
};
console.log(a);

// 콘솔창 출력 결과는? 1
// 함수를 만들기만 하고 실행을 하지 않았음

// 문제 4
let b = 1;
window.b = 3; // 전역변수로 b값을 또 만듬, let, const 재선언 x
var c = 2;
window.c = 4; // var은 전역변수 선언, 재선언 가능함으로 c 값을 대체
console.log(b + c); // b=1, b=c
// 콘솔창 출력 결과는? 5

// 문제 5
// var i = 5; // 반복문이 다 실행되고 전역변수로 남아있음

for (var i = 1; i < 6; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}
// Q. 위 코드는 왜 의도대로 동작하지 않는 것이죠? 설명, 해결 방법?

// let으로 바꾸자 잘 작동함.. 이유는?
// var은 범위가 함수, let은 범위가 {}

// 1. 반복문 내 코드를 돌림,
// 2. console.log 코드는 1초 뒤에 시작함
// 3. 이미 반복문이 다 실행되고 전역변수로 var i = 5로 남아있음
// 4. console 창에 5만 5번 반복
