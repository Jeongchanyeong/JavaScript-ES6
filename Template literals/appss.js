const pants = 20;
const socks = 100;

console.log(`바지 ${pants} 양말 ${socks}`);

// 문자 중간 '양말'과 '바지' 단어 순서를 바꾸고 싶음

function 해체분석기(문자들, 변수1, 변수2) {
  console.log(문자들[1] + 변수1 + 문자들[0] + 변수2);
}
해체분석기`바지 ${pants} 양말 ${socks}`;

// pants가 0개면 '바지 안 팔아요 양말 100' 이라는 문자로 바꾸소

function 해체분석기(문자들, 변수1, 변수2) {
  if (변수1 === 0) {
    console.log(`바지 다 팔렸어요` + 변수2);
  }
}
해체분석기`바지 ${pants} 양말 ${socks}`;

// if pants value가 0; 일 때 함수가 console 창에 뜸
