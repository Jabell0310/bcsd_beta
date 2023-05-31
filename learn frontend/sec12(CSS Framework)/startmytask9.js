const addText = document.querySelector("#add_Do");
const addBtn = document.querySelector("#add_Btn");
const list = document.querySelector("#to_Do_List");

function adding() {
  const newLi = document.createElement("li");
  newLi.innerText = addText.value;
  const newBtn1 = document.createElement("button");
  const newBtn2 = document.createElement("button");
  newBtn1.classList = "finish";
  newBtn1.innerText = "V";
  newBtn2.classList = "delete";
  newBtn2.innerText = "X";
  const newBox1 = document.createElement("div");
  const newBox2 = document.createElement("div");
  const bigBox = document.createElement("div");
  newBox1.classList = "divBox";
  newBox2.classList = "btnBox";
  bigBox.classList = "bigBox";
  newBox1.append(newLi);
  newBox2.append(newBtn1);
  newBox2.append(newBtn2);
  bigBox.append(newBox1);
  bigBox.append(newBox2);
  list.append(bigBox);
  addText.value = "";
}

addBtn.addEventListener("click", adding);

list.addEventListener("click", function (target) {
  if (target.target.classList.value === "finish") {
    const coloring =
      target.target.parentElement.parentElement.children[0].children[0];
    coloring.style.color = "green";
    coloring.style.textDecoration = "line-through";
    const noExpose = target.target.parentElement.children[1];
    noExpose.classList = "";
    noExpose.classList = "changed";
    if (typeof Storage !== undefined) {
      if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount) + 1;
      } else {
        localStorage.clickcount = 1;
      }
    }
    if (typeof Storage !== undefined) {
      if (sessionStorage.clickcount) {
        sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
      } else {
        sessionStorage.clickcount = 1;
      }
    }
    localStorage.setItem(
      `success${localStorage.clickcount}`,
      `${coloring.innerText}`
    );
  } else if (target.target.classList.value === "delete") {
    const sending =
      target.target.parentElement.parentElement.children[0].children[0];
    localStorage.setItem(
      `failed${localStorage.clickcount}`,
      `${sending.innerText}`
    );
    const removing = target.target.parentElement.parentElement;
    removing.remove();
  } else {
    console.log("g");
  }
});
if (
  localStorage.clickcount !== 0 ||
  localStorage.clickcount !== sessionStorage.clickcount
) {
  for (let i = 1; i <= localStorage.clickcount; i++) {
    const newLi = document.createElement("li");
    newLi.innerText = localStorage[`success${i}`];
    const newBtn1 = document.createElement("button");
    newBtn1.classList = "finish";
    newBtn1.innerText = "V";
    const newBox1 = document.createElement("div");
    const newBox2 = document.createElement("div");
    const bigBox = document.createElement("div");
    newBox1.classList = "divBox";
    newBox2.classList = "btnBox";
    bigBox.classList = "bigBox";
    newBox1.append(newLi);
    newBox2.append(newBtn1);
    bigBox.append(newBox1);
    bigBox.append(newBox2);
    list.append(bigBox);
    newLi.style.color = "green";
    newLi.style.textDecoration = "line-through";
  }
}
