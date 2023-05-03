const h1 = document.querySelector("#title");
const btn = document.querySelector("#btn");
const body = document.querySelector("body");
const toggle = document.querySelector("#toggle");
const h2 = document.querySelector("h2");
const change = document.querySelector("#change");
const randcol = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r},${g},${b})`;
};
btn.addEventListener("click", function (e) {
  const newCol = randcol();
  body.style.backgroundColor = newCol;
  e.stopPropagation();
});
h1.addEventListener("click", function (e) {
  const newTextCol = randcol();
  h1.style.color = newTextCol;
});
toggle.addEventListener("click", function () {
  if (h2.innerText !== "") {
    h2.innerText = "";
  } else if (h2.innerText === "") {
    h2.innerText = "Hello";
  }
});
change.addEventListener("click", function (e) {
  const newTC = randcol();
  h2.style.color = newTC;
  e.stopPropagation();
});
// 랜덤 배경을 만드는 간단한 방법으로 html요소를 호출하고 가장 기본적인 코드를 에로우 함수로 나타냈다.
// addEventListener로 클릭하면 에로우함수가 저장된 변수를 스타일로 지정하라는 얘기이다.
// 원래의 경우 이벤트 버블링이 나타나 버튼에서 시작하여 점점 상위 태그의 이벤트가 나타나는 현상이 나타나지만
// 매개변수와 stopPropagation 매서드를 사용함으로써 이벤트 버블링이 나타나는 것을 막는다.
