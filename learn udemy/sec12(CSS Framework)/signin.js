const id = document.querySelector("#checkEmail");
const password = document.querySelector("#checkPassword");
let login = document.querySelector("#login");
let logout = document.querySelector("#logout");
const idBox = document.querySelector("#checkEmailBox");
const passwordBox = document.querySelector("#passwordBox");
const emailType = document.querySelector("#checkEmailType");
const footer = document.querySelector("footer");
const image = document.querySelector("#image");

logout.style.display = "none";

const signinCheck = () => {
  if (id.value.length === 0 && password.value.length !== 0) {
    alert("아이디를 입력하세요.");
    if (typeof Storage !== undefined) {
      if (sessionStorage.clickcount) {
        sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
      } else {
        sessionStorage.clickcount = 1;
      }
      localStorage.setItem(
        `passwordTrial${sessionStorage.clickcount}`,
        `${password.value}`
      );
      sessionStorage.setItem(
        `passwordTrial${sessionStorage.clickcount}`,
        `${password.value}`
      );
      var now = new Date();
      now.setHours(now.getHours() + 72);
      document.cookie =
        `passwordTrial${sessionStorage.clickcount} = ${id.value}; expires=` +
        now.toUTCString() +
        `; path=/;`;
    }
    if (sessionStorage.clickcount === "6") {
      showLoginFailed();
    }
  } else if (id.value.length !== 0 && password.value.length === 0) {
    alert("비밀번호를 입력하세요.");
    if (typeof Storage !== undefined) {
      if (sessionStorage.clickcount) {
        sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
      } else {
        sessionStorage.clickcount = 1;
      }
      localStorage.setItem(
        `IDTrial${sessionStorage.clickcount}`,
        `${id.value}`
      );
      sessionStorage.setItem(
        `IDTrial${sessionStorage.clickcount}`,
        `${id.value}`
      );
      var now = new Date();
      now.setHours(now.getHours() + 72);
      document.cookie =
        `IDTrial${sessionStorage.clickcount} = ${id.value}; expires=` +
        now.toUTCString() +
        `; path=/;`;
      if (sessionStorage.clickcount === "6") {
        showLoginFailed();
      }
    }
  } else if (id.value.length === 0 && password.value.length === 0) {
    alert("아이디랑 비밀번호 모두 입력하세요.");
  } else if (id.value.length !== 0 && password.value.length !== 0) {
    alert("로그인 성공!");
    if (typeof Storage !== undefined) {
      if (sessionStorage.clickcount) {
        sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
      } else {
        sessionStorage.clickcount = 1;
      }
    }
    localStorage.setItem(`IDTrial${sessionStorage.clickcount}`, `${id.value}`);
    localStorage.setItem(
      `passwordTrial${sessionStorage.clickcount}`,
      `${password.value}`
    );
    sessionStorage.setItem(
      `IDTrial${sessionStorage.clickcount}`,
      `${id.value}`
    );
    sessionStorage.setItem(
      `passwordTrial${sessionStorage.clickcount}`,
      `${password.value}`
    );
    if (
      sessionStorage.clickcount === "6" &&
      id.value !== "jabell" &&
      password.value !== "1234567890"
    ) {
      showLoginFailed();
    }
    var now = new Date();
    now.setHours(now.getHours() + 72);
    document.cookie =
      `IDTrial${sessionStorage.clickcount} = ${id.value}; expires=` +
      now.toUTCString() +
      `; path=/;`;
    document.cookie =
      `passwordTrial${sessionStorage.clickcount} = ${password.value}; expires=` +
      now.toUTCString() +
      `; path=/;`;

    id.value = "";
    password.value = "";
    login.style.display = "none";
    if (logout.style.display === "none") {
      logout.style.display = "block";
    } else {
      logout.style.display = "block";
    }
  }
};

function isEmail(asValue) {
  var regExp =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  return regExp.test(asValue);
}

id.oninput = function () {
  let checkEmail = isEmail(id.value);
  if (checkEmail === true) {
    emailType.innerText = "이메일 형식이 맞습니다.";
  } else {
    emailType.innerText = "이메일 형식이 아닙니다.";
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

function resetLogin() {
  for (let i = 1; i <= sessionStorage.clickcount; i++) {
    localStorage.removeItem(`IDTrial${i}`);
    localStorage.removeItem(`passwordTrial${i}`);
    sessionStorage.removeItem(`IDTrial${i}`);
    sessionStorage.removeItem(`passwordTrial${i}`);
    var now = new Date();
    now.setHours(now.getHours() - 1);
    document.cookie =
      `IDTrial${i} = ${id.value}; expires=` + now.toUTCString() + `; path=/;`;
    document.cookie =
      `passwordTrial${i} = ${password.value}; expires=` +
      now.toUTCString() +
      `; path=/;`;
  }
  sessionStorage.clickcount = 0;
  logout.style.display = "none";
  if (login.style.display === "none") {
    login.style.display = "block";
  } else {
    login.style.display = "none";
  }
}

function showLoginFailed() {
  alert("5번이상 로그인에 실패하였으므로 1시간동안 로그인하실 수 없습니다.");
  var pause = new Date();
  pause.setHours(pause.getHours() + 1);
  document.cookie =
    `loginFalse = stop1Hour; expires=` + pause.toUTCString() + `; path=/;`;
  id.value = "";
  password.value = "";
  id.setAttribute("disabled", "disabled");
  password.setAttribute("disabled", "disabled");
}
if (document.cookie.includes("loginFalse=stop1Hour") === true) {
  id.value = "";
  password.value = "";
  id.setAttribute("disabled", "disabled");
  password.setAttribute("disabled", "disabled");
} else {
  id.removeAttribute("disabled");
  password.removeAttribute("disabled");
}
logout.addEventListener("click", resetLogin);
