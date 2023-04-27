// Reference date type

let 변수 = 1234;
let 어레이 = [1, 2, 3]; //변수에 reference가 저장됨, [1,2,3]이 저기있어요 라는 reference가 저장되는 것
// Array, Object는 변수에 값이 저장이 되는 것이 아닌 reference가 저장됨

let 이름11 = "정찬영";
let 이름22 = 이름11;
이름11 = "박"; // 값의 복사
// 값의 복사는 변수의 값이 복사되어 새로운 메모리 공간에 저장
// 변수에 문자열이 할당
console.log(이름11); // 박
console.log(이름22); // 정찬영

let 이름3 = { name: "정찬영" };
let 이름4 = 이름3;
이름3.name = "박"; // 참조 복사
// 참조 복사는 변수가 객체를 참조하고 있을 때, 변수에 할당된 값이 객체의 메모리 주소이기 때문에 변수끼리 같은 객체를 참조한다.
// 이름4 변수는 이름3 변수와 같은 객체를 참조
// 변수에 객체가 할당

console.log(이름3); // {name : '박'}
console.log(이름4); // {name : '박'}

// 이름1에는 {name : '김'}이 저장되는게 아닙니다
// {name : '김'}이 저기있어요 라는 화살표(reference)가 저장됨

// 그래서 array, object 함부로 복사하면 큰일남.

// 그럼 복사하고 싶으면 어떻게 하는데요?
let 이름5 = { name: "정찬영" };
let 이름6 = { name: "심현보" };
이름5.name = "박";

console.log(이름5); // {name : '박'}
console.log(이름6); // {name : '심현보'}

//
let a = { name: "정찬영" };
let b = { name: "정찬영" };

a === b; // false (서로 다른 자료를 가리킴)

// 오브젝트를 변경해주는 함수
let 이름1 = { name: "김" };
function 변경1(obj) {
  obj.name = "park";
}
변경1(이름1);
// 이름1 = { name: "park" }
//
let 이름2 = { name: "김" };
function 변경2(obj) {
  obj = { name: "park" }; // 오브젝트를 재할당 해주는 함수 (실패,, 안 바뀜)
  // 이유 : 파라미터는 변수 생성 & 할당과 똑같다
  // 그 파라미터에 = {} 해봤자 원래 이름1 오브젝트는 변화가 없다
  // 할당을 한 것 뿐이지 기존에 있던 데이터를 변경을 한 것은 아니다
  // let obj = { name: "조종제" }와 같음
}
변경2(이름2);
// 이름2 = { name: "김" }

// 그림 이용하여 이해하기