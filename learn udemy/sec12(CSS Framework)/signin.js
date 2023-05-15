const id = document.querySelector("#checkEmail");
const password = document.querySelector("#checkPassword");
const login = document.querySelector("#login");
const footer = document.querySelector("footer");
const image = document.querySelector("#image");

const signinCheck = () => {
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

login.addEventListener("click", signinCheck);

function firstImg() {
  axios
    .get("https://api.thecatapi.com/v1/images/search?size=full")
    .then((res) => {
      const url = res.data[0].url;
      image.src = `${url}`;
    });
}
firstImg();

image.addEventListener("click", function () {
  axios
    .get("https://api.thecatapi.com/v1/images/search?size=full")
    .then((res) => {
      const url = res.data[0].url;
      image.src = `${url}`;
    });
});
