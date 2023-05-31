const id1 = document.querySelector("#id");
const id2 = document.querySelector(".id");
const password = document.querySelector("#password");
const pwcheck1 = document.querySelector("#pwcheck");
const pwcheck2 = document.querySelector(".pwcheck");
const studentid = document.querySelector("#studentid");
const major = document.querySelector(".major");
const studentNumber = document.querySelector(".student-number");
const telephone = document.querySelector("#telephone");
const signup = document.querySelector("#signup");
const idCheckResult = document.querySelector(".id-check-result");

function isEmail(asValue) {
  var regExp =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  return regExp.test(asValue);
}

id1.oninput = function () {
  let isEmailType = isEmail(id1.value);

  if (isEmailType === true) {
    idCheckResult.innerText = "이메일 형식입니다.";
  } else {
    idCheckResult.innerText = "이메일 형식이 아닙니다.";
  }
};
password.oninput = pwcheck1.oninput = function pwcheck() {
  if (password.value === pwcheck1.value) {
    pwcheck2.innerText = "비밀번호가 일치합니다.";
  } else {
    pwcheck2.innerText = "비밀번호가 일치하지 않습니다.";
  }
};
const numAndMajor = [
  {
    name: "기계공학부",
    dept_nums: ["20"],
  },
  {
    name: "산업경영학부",
    dept_nums: ["80"],
  },
  {
    name: "컴퓨터공학부",
    dept_nums: ["35", "36"],
  },
  {
    name: "메카트로닉스공학부",
    dept_nums: ["40"],
  },
  {
    name: "고용서비스정책학과",
    dept_nums: ["85"],
  },
  {
    name: "디자인공학부",
    dept_nums: ["51"],
  },
  {
    name: "에너지신소재화학공학부",
    dept_nums: ["74"],
  },
  {
    name: "전기전자통신공학부",
    dept_nums: ["61"],
  },
  {
    name: "건축공학부",
    dept_nums: ["72"],
  },
];

function numberMaxLength(e) {
  if (e.value.length > e.maxLength) {
    e.value = e.value.slice(0, e.maxLength);
  }
}
studentNumber.addEventListener("change", findMajor);
function findMajor() {
  if (studentNumber.value.length === 10) {
    let majorNum = studentNumber.value.slice(5, 7);

    for (let obj of numAndMajor) {
      for (let nums of obj.dept_nums) {
        if (majorNum === nums) {
          major.innerText = obj.name;
        }
      }
    }
  }
}
const telephoneinput = (target) => {
  target.value = target.value
    .replace(/[^0-9]/g, "")
    .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3")
    .replace(/(\-{1,2})$/g, "");
};
