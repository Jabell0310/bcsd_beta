let addBtn = document.getElementById("button");
let addBeforeBtn = document.getElementById("before");
let inputBox = document.querySelector("input");
let removeTargetBtn = document.querySelector("#target-remove");
let removeBtn = document.querySelector(".remove-Btn");
//get이랑 query함수로 html 특정 태그와 id를 불러온다 이 태그들은 button에 있는 id태그 들을 불러오는 역할을 한다.
addBtn.addEventListener("click", function () {
  let li = document.createElement("li");
  let ul = document.querySelector("ul");
  let targetLi = document.querySelector("li#target");
  console.log(targetLi);
  // html에 list를 추가할 것인데 ul태그 안에 위치해있어야 된다고 나타내는 코드이다.
  li.textContent = inputBox.value;
  // 동적으로 li node가 추가되는 것을 보여주는 코드이다.
  let button = document.createElement("button");
  button.textContent = "X";
  //button.setAttribute('class', 'remove-btn');
  button.classList.add("remove-btn");
  //위의 2개 코드는 X가 들어가 있는 버튼을 추가하는 코드로 코드가 복잡해질때는 아래쪽 코드를 많이 사용한다.
  button.addEventListener("click", function (event) {
    event.target.parentNode.remove();
    inputBox.value = "";
    //위의 코드는 textbox에 추가할 text를 입력하고 자동으로 textbox에 있는 text를 지워주는 역할을 한다.
    inputBox.focus();
    //위의 코드는 textbox에 추가할 text를 입력하고 자동으로 또 textbox에 focus처리를 해준다.
  });
  li.appendChild(button);
  ul.appendChild(li);
  inputBox.value = "";
  inputBox.focus();
});

addBeforeBtn.addEventListener("click", function () {
  let li = document.createElement("li");
  let ul = document.querySelector("ul");
  let targetLi = document.querySelector("li#target");
  // id=target인 list를 찾는 코드 이 코드를 찾아야 추가될 새로운 코드도 이에 맞는 태그를 부여할 수 있다.
  console.log(targetLi);
  li.textContent = inputBox.value;
  ul.insertBefore(li, targetLi);
  //앞에다가 list를 추가할 때 쓰는 코드인데 리스트를 변수 targetLi와 같은 속성을 갖는 태그로 설정한다는 얘기이다.
  let button = document.createElement("button");
  button.textContent = "X";
});
removeTargetBtn.addEventListener("click", function () {
  let targetLi = document.querySelector("li#target");
  targetLi.remove();
  button.classList.add("remove-btn");
  event.target.parentNode.remove();
});
//변수에 클릭했을때 함수가 실행되면 이 함수는 id가 target인 list를 찾아서 변수 targetLi 속성을 갖는 태그를 제거한다는 의미이다.
removeBtn.addEventListener("click", function (event) {
  event.target.parentNode.remove();
  inputBox.value = "";
  inputBox.focus();
});
//내장함수에 이벤트를 넣으면 html 이벤트가 일어나는 태그를 js가 조회하고 이때 target은 클릭한 요소에 대해 초점을 맞추는데 이코드는 target으로 한 html 요소의 부모노드를 찾아서 개발자도구 console화면에 띄어준다.
