const buttons = document.querySelectorAll("button");
const h1s = document.querySelectorAll("h1");
const randCol = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r},${g},${b})`;
};

for (let button of buttons) {
  button.addEventListener("click", function () {
    this.style.backgroundColor = randCol();
  });
}

for (let h1 of h1s) {
  h1.addEventListener("click", function () {
    this.style.color = randCol();
  });
}

// this는 함수가 어떻게 호출되었느냐에 따라 실행이 달라지는 문법이다.
// 전역에서 this와 일반함수에서 this는 window객체이다.
// 객체 메서드에서 this는 해당 객체를 가리킨다
// call,apply,bind 매서드의 this는 함수 객체 자체를 나타낸다.
// 생성자 함수는 매개변수를 통해 인수를 입력하면 실행문을 통해 값이 출력하는 함수로 여기서 this는 새로생성된 객체(생성자 함수를 통해 만들어진 객체)를 지칭한다.
// eventhandler에서 handler 함수를 등록한 요소전체(html태그와 텍스트)를 가리키는 것이다.
