const arr = [2, 3, 4];
// array 데이터를 전부 변수에 담기
// 모양만 맞추면 array 내 변수가 생김
// distructing 문법
const [a, b, c] = [2, 3, 4];
// 지정한 변수와 배열 내의 갯수가 다르면 이렇게
const [d, e, f = 10] = [2, 3];
// f = 10이 됨

// object 데이터를 꺼내 변수에 담으려면
// const obj = { name: "Kim", age: 30 };
// const { name, age } = { name: "Kim", age: 30 };
// 변수명을 key 명과 똑같이 서야한다 (순서가 중요한게 x)
// 만약 age 값이 없다면
// const { name, age = 30} = { name: "Kim"}; 처럼 해주면 됨

const obj = { name: "Kim", age: 31 };
function 함수([name, age]) {
  console.log(name);
  console.log(age);
}

함수([1, 2]); // 1, 2
