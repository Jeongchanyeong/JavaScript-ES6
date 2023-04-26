// spread operator
// 괄호를 제거해주는 연산자 라고 기억
// 중괄호, 대괄호, 함수 소괄호 안에서만 사용 가능, 그 밖에서 사용시 error
const array = ["Hi", "Chanyeong"];

console.log(array);
console.log(...array);

// 1. 내용물을 빼고싶을 때
// Array에 븥이면 대괄호를 제거해준다, oject에 붙이면 중괄호를 제거해준다.

const text = "hello";
console.log(text);
console.log(...text);

// 2. 문자에 붙이면
// 문자에 붙이면 펼쳐서 나옴

const a = [1, 2, 3];
const b = [4, 5];
const c = [...a, ...b];
console.log(c);

// 3. array 합치기 / 복사

const d = [6, 7, 8];
const e = d;
d[3] = 9;

// d 값에 9를 추가해줬는데 d 값과 e 값이 같게 나옴
// 등호로 복사하면 값을 완벽하게 공유함
console.log(d);
console.log(e);

// 각각 독립적인 값을 가지도록 array, object를 복사하려면?

const f = [10, 11, 12];
const g = [...f];
f[3] = 13;
console.log(f);
console.log(g);
// spread operator 이용

const o1 = { a: 1, b: 2 };
const o2 = { ...o1, c: 3 };
// o2를 만들 때 o1에 있던거 그대로 넣고싶음
console.log(o1);
console.log(o2);

// o4를 o3과 완전히 같게 (deep copy) 만들고 싶음
// const o3 = { a: 4, b: 5 };
// const o4 = o3;
// 이렇게 하면 안됨
// 이유 : o3와 o4는 값 공유가 일어나서 안 됨, 오브젝트나 어레이는 레퍼런스 데이터 타입이기 때문에 안 됨
const o3 = { a: 4, b: 5 };
const o4 = { ...o3 };
// 이렇게 적어줘

// copy 하다가 값 중복이 일어나면?
const o5 = { a: 1, b: 2 };
const o6 = { a: 2, ...o5 };
console.log(o6); // a : 1, b : 2  이유 : 제일 마지막에 읽힌 값이 나옴
// const o5 = { a: 1, b: 2 };
// const o6 = {...o5, a: 2 };
// console.log(o6) // a : 2, b : 2
