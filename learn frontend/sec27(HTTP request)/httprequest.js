/*const req = new XMLHttpRequest();
req.onload = function () {
  console.log("It loaded");
  const data = JSON.parse(this.responseText);
  console.log(data);
  console.log(data.name, data.height);
};
req.onerror = function () {
  console.log("Error!!");
  console.log(this);
};
req.open("GET", "https://swapi.dev/api/people/1/");
req.send();*/
// xml을 이용한 정보추출방법은 json파일을 javascript 객체로 바꾸고 나서 객체에 있는 매서드를 이용하여 개별정보를 추출하는 것이 가능하다.
// 이 방법이 불편한 이유는 promise나 비동기함수가 내장되어 있지 않기 때문에 url을 여러 번 요청하다 보면 콜백지옥에 빠지게 된다.

/*fetch("https://swapi.dev/api/people/1/")
  .then((res) => {
    console.log("It normally work!", res);
  })
  .catch((e) => {
    console.log("Error!!", e);
  });*/
// 이번에는 fetch를 이용하여 promise함수로 반환하고 url을 요청하면 반한된 promise는 처리되거나 오류가 뜨도록 한다.
// 이때 response나 error에 우리가 포함되길 원하는 항목(JSON data)이 없다.
// http 요청에서 반환된 json이 promise처리되기 전에 만들어져서 표시되기 때문에 그렇다.
/*fetch("https://swapi.dev/api/people/1/")
  .then((res) => {
    console.log(res);
    console.log("It normally work!");
    return res.json();
    //res.json().then((data) => {
  //  console.log("Success getting JSON data!!", data);
//    }); //리펙토링의 첫번째 방법이다.
  })
  .then((data) => {
    console.log("Success getting JSON data!!", data); // 리펙토링의 두번째 방법이다.
    return fetch("https://swapi.dev/api/people/2/");
  })
  .then((res) => {
    console.log("Normally work again!");
    return res.json();
  })
  .then((data) => {
    console.log("Success getting JSON data(2)", data);
  })
  .catch((e) => {
    console.log("Error!!", e);
  });*/

/*const loadStarWarsPeople = async () => {
  const res1 = await fetch("https://swapi.dev/api/people/1/");
  const data1 = await res1.json();
  console.log(data1);
  const res2 = await fetch("https://swapi.dev/api/people/2/");
  const data2 = await res2.json();
  console.log(data2);
};
loadStarWarsPeople();*/
// fetch는 promise가 내장되어 있기 때문에 비동기 함수랑도 같이 쓰일 수 있다.
// 이때는 비동기함수에 오류가 발생할 것을 대비하여 try catch문도 같이 쓰인다.

/*axios
  .get("https://swapi.dev/api/people/1/")
  .then((res) => {
    console.log("Response: ", res);
  })
  .catch((e) => {
    console.log("Error: ", e);
  });*/
const getStarWarsPeople = async (id) => {
  const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
  console.log(res.data);
};
getStarWarsPeople(5);
getStarWarsPeople(10);
// axios는 fetch에서 해결되지 않는 문제를 해결하기 위해서 만들어진 구문이다.
// 이 구문은 원래 node.js에서 작동하는 라이브러리에 관한 내용이므로 html에 script코드 하나를 더 추가해야한다.
// get매서드는 promise가 내장되어있어 마찬가지로 url을 요청하면 반환된 promise를 처리해주고 fetch와 달리 JSON구문을 분석하고 응답객체를 보내므로 객체에 json이 포함된다.
// 따라서 res.json() 이과정은 자동으로 생략된다.
const jokes = document.querySelector("#jokebox");
const button = document.querySelector("button");
const getDadJoke = async () => {
  const config = { headers: { Accept: "application/json" } };
  const res = await axios.get("https://icanhazdadjoke.com", config);
  console.log(res);
  return res.data.joke;
};
const addNewJoke = async () => {
  const jokeText = await getDadJoke();
  const newLi = document.createElement("LI");
  newLi.append(jokeText);
  jokes.append(newLi);
};
button.addEventListener("click", addNewJoke);
// axios는 header부분을 불러올 수 있는데 header value를 입력하면 특정 json 데이터 파일을 불러오는 것이 가능하다.
// 이 특성을 이용하여 객체에 저장하고 get매서드를 사용하면 특정 json파일의 데이터를 가져오는 것이 가능하다.
