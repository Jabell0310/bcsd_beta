const input1 = document.querySelector("#firsttext");
const input2 = document.querySelector("#secondtext");
const input3 = document.querySelector("#thirdtext");
const input4 = document.querySelector("#fourthtext");
const h2 = document.querySelector("h2");
const btn = document.querySelector("#submit");
const form = document.querySelector("#form");
const container = document.querySelector("#container");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const firstInput = input1;
  const secondInput = input2;
  add(firstInput.value, secondInput.value);
  firstInput.value = "";
  secondInput.value = "";
});

const add = (firstInput, secondInput) => {
  const newLi = document.createElement("li");
  const bTag = document.createElement("b");
  bTag.append(firstInput);
  newLi.append(bTag);
  newLi.append(`- ${secondInput}`);
  container.append(newLi);
};

container.addEventListener("click", function (e) {
  e.target.remove();
});

input3.addEventListener("change", function (e) {
  console.log(`You don't focus on textbox`);
});

input4.addEventListener("input", function (e) {
  const input = input4.value;
  h2.innerText = `Hello, ${input}`;
  if (input === 0) {
    h2.innerText = `Say your name`;
  }
});
// form이벤트도 이벤트 객체를 많이 사용하는 형태이다.
// queryselector로 form태그를 불러서 addEventListener을 통해 변수 2개값을 지정하고 에로우 함수를 실행한 뒤 다시 이 input 값을 초기화 시킨다.
// 에로우 함수에는 li 와 b태그를 새로 생성하고 b태그를 첫번쨰 input에 그리고 li태그를 첫번째 input과 두번째 input에 넣어서 생성한다.
// 그리고 이제 ul에 새로 만든 list태그를 넣으면 새로운 list가 만들어진다.
// change 이벤트는 textbox가 focus상태를 벗어났을 때 이벤트가 발생하여 코드가 실행되는 것을 말한다.
// input 이벤트는 input에 값이 입력될 때마다 이벤트가 발생하여 코드가 실행되는 것을 말한다.
// 이벤트 위임은 새로 추가된 요소에도 기존 이벤트를 적용시킬 때 쓰는 요소로 매개변수에 타겟을 넣어서 어떤 요소에 속해있는지 구체화하여 이벤트를 적용시킬 수 있다.
