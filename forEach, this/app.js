console.log(this);
// {window}

function 함수() {
  console.log(this);
}
함수();
// {window}
// 함수(); === window.함수()
// 와 값이 똑같음, 함수나 변수를 전역공간에서 만들면 {window}에 보관
// 나를 담고있는 오브젝트를 출력해주는구나

const 오브젝트 = {
  data: {
    함수() {
      console.log(this);
    },
  },
};
// 날 담고있는 object

오브젝트.data.함수();

// 함수 안에서 this 출력
// this : 그냥 쓰거나 일반 함수 안에서 쓰면 {window}
// this : 오브젝트 내 함수 안에서 쓰면 그 함수를 가지고 있는 오브젝트를 뜻함

// 오브젝트 안 오브젝트에서 this 함수를 호출하면 data 값이 나오겠지? === 오브젝트.data
// 기존 문법 : function() {} , 신 문법 : ()=>{}
// Arrow Function 특징 : this 값을 함수 밖에 있던거 그대로 씀

document.getElementById("버튼").addEventListener("click", function (e) {
  const array = [1, 2, 3];
  array.forEach(function (a) {
    console.log(a);
  });
  //  console.log(this); // 이벤트가 동작하는 곳 , 밑에 값이랑 똑같음
  //  console.log(e.currentTarget); // 이벤트가 동작하는 곳
});

const firstName = {
  이름들: ["김", "이", "정"],
  함수: function () {
    console.log(this);
    firstName.이름들.forEach(function () {
      console.log(this);
    });
  },
};
firstName.함수();

// ArrowFunction 사용시 함수 밖 this 값과 동일
// this 값 재설정 x 위 this 값을 그대로 받아서 꺼내옴

[1, 2, 3, 4].forEach((a) => console.log(a));
const 함수 = (a) => a + 10;

함수();
// 함수를 만드는 이유
// 1. 코드들을 기능으로 묶고 싶을 때 사용, (그리고 나중에 재사용할 때)
// 2. 입출력 기계를 만들고 싶을 때 사용

// Arrow function 장점
// 1.입출력 기계 (함수를)를 만들 때 직관적으로 표현해줌
// 2. 피라미터가 1개면 소괄호 생격 가능
// 3. 코드가 한줄이면 중괄호도 생략 가능 ,    2,3 직관적인 코드를 짤 수 있다.

document.getElementById("버튼").addEventListener("click", (e) => {
  console.log(this);
  console.log(e.currentTarget);
});

const object = {
  함수: () => {
    console.log(this);
  },
};

object.함수();

// Arrow function 특징 : 바깥에 있던 this 값을 내부에서 그대로 사용
// 함수 내의 this 값을 변경시키지 않음
// 일반 이벤트 리스너에서의 this === e.currentTarget
// Arrow function 이벤트 리스너에서의 (어디서 쓰던간에) this === 바깥의 this 값
// 둘이 비교하면서 결과값 차이 보기

const introduce = {
  name: "정찬영",
  sayHi: function () {
    console.log("안녕, 나는" + " " + this.name);
  },
};
// sayHi 라는 메소드 추가
사람.sayHi(); //안녕 나는 손흥민

const objects = {
  data: [1, 2, 3, 4, 5],
};

objects.allPlus = function () {
  let result = 0;
  this.data.forEach((a) => (result += a));
  // this.data = [1, 2, 3, 4, 5]
  // this로 객체 지정. data 지정, forEach 반복문 사용
  console.log(result);
};
// objects.allPlus = objects 안에 전부 더하기 추가
objects.allPlus();

// 문제 : 버튼을 click 했을 때 1초 뒤 innerHTMl이 console.log에 찍히게 함

document.getElementById("버튼").addEventListener("click", function () {
  console.log(this.innerHTML);
  setTimeout(() => {
    console.log(this.innerHTML);
  }, 1000);
});

// 여기서 this의 역할 블로깅
// this 는 function 안에서 바뀜
