const id = document.querySelector("#checkEmail");
const password = document.querySelector("#checkPassword");
const login = document.querySelector("#login");

login.onclick = function () {
  if (id.value.length === 0 && password.value.length !== 0) {
    alert("아이디를 입력하세요.");
  } else if (id.value.length !== 0 && password.value.length === 0) {
    alert("비밀번호를 입력하세요.");
  } else if (id.value.length === 0 && password.value.length === 0) {
    alert("아이디랑 비밀번호 모두 입력하세요.");
  } else if (id.value.length !== 0 && password.value.length !== 0) {
    alert("로그인 성공!");
  }
};
