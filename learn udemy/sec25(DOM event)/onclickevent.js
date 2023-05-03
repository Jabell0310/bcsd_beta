const yatap = document.querySelector("#yatap");
const imae = document.querySelector("#imae");
const seohyun = document.querySelector("#seohyun");
const sunae = document.querySelector("#sunae");
const jungja = document.querySelector("#jungja");
const miguem = document.querySelector("#miguem");
const ori = document.querySelector("#ori");
yatap.onclick = function () {
  alert("야탑역을 선택하셨습니다.");
};
imae.onclick = function () {
  alert("이매역을 선택하셨습니다.");
};
seohyun.onclick = function () {
  alert("서현역을 선택하셨습니다.");
};
sunae.onclick = function () {
  alert("수내역을 선택하셨습니다.");
};
jungja.onclick = function () {
  alert("정자역을 선택하셨습니다.");
};
miguem.onclick = function () {
  alert("미금역을 선택하셨습니다.");
};
ori.onclick = function () {
  alert("오리역을 선택하셨습니다.");
};
// onclick은 js 내부에 onclick이라는 매서드를 사용하여 함수를 실행시킴으로써 이벤트를 발생시키는 방법이다.
// 단 onclick은 함수가 기능을 지닌 여러개의 함수를 사용해야할 경우 한 함수밖에 시행이 안되는 특징 때문에 쓸 수 없다
