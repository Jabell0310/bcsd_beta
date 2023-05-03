console.dir(document);
// 문서는 하나의 객체이다. 문서를 훑어보는 구문을 썼을 때 하나의 큰 객체로 출력된다. 특히 속성값은 html 태그에 해당한다.
const dom = document.all;
// all 매서드를 사용하여 문서를 배열로 나타낼 수 있다.
const bundang = document.getElementById("Bundang");
console.dir(bundang);
// getElementById 매서드 내부에 문자열을 입력하면 html에 문자열과 일치하는 html id 요소를 찾는다.
// 일치하는 요소가 나타나면 해당 id 값이 나오고 없으면 undefined로 출력된다. 하지만 역시 값을 저장하려면 변수 선언을 해야한다.
const allH2 = document.getElementsByTagName("h2");
console.dir(allH2[0]);
const h1 = document.getElementsByTagName("h1");
const food = document.getElementsByClassName("food");
// getElementsByTagName은 html 태그를 getElementsByClassName은 class 요소를 불러오는 매서드이다.
// console.dir을 이용해 객체로 만든뒤에 해당 요소를 불러오는 것이 가능하다.
const image = document.querySelector("img:nth-of-type(2)");
const korea = document.querySelector("#Korea");
// querySelector는 마찬가지로 html 요소를 js console 창에 불러오는 매서드로 최신기능이다.
// 따라서 id class css선택자(자식,형제,자손)들도 문자열에 입력함으로써 불러오는 것이 가능하다.
document.querySelector(".food").innerText = "Best Menu";
document.querySelector("h1").innerHTML = "<h1>Bundang Local Restaurant</h1>";
// querySelector 매서드는 innerText랑 innerHtml이 있는데 innerText는 해당 쿼리의 텍스트만 바꾸는 매서드이고 innerHtml은 태그 자체를 아예 바꾸는 매서드이다.
document.querySelector("img").alt = "";
const images = document.querySelector("img");
images.getAttribute("alt");
// querySelector attribute은 태그 내에 있는 href,src,alt 와 같은 속성들을 호출하는 태그이다.
// 쿼러로 호출한 값을 변수로 저장해서 getAttribute method를 활용하여 속성을 불러 들일 수 있다.
// 또 속성값을 변경 시킬 때도 위에 있는 innerText처럼 매서드를 변경시키는 방법을 이용하면 된다.
h1.style.color = "red";
// 변수이름, style매서드와 style 명령어(카멜케이스 필요)를 통해서 js 내에서도 스타일을 적용할 수 있다.
h1.classList.add("food");
h1.classList.remove("food");
// classList 매서드는 css 클래스 스타일 적용에 관한 구문으로 add는 css 클래스 스타일을 적용 remove는 스타일을 제거한다는 내용이다.
// 그외에도 contain은 해당 css 클래스 스타일이 있는지 toggle은 클래스 스타일은 가지고 있는 채로 스타일을 적용을 활성화하는지 비활성화하는지 만드는 태그이다.
const newH3 = document.createElement("h3");
const newH3Innertext = (newH3.innerText = "I am a new h3 tag");
document.body.append(newH3);
h1.prepend(newH3);
const h2 = document.createElement("h2");
h2.append("This will be a good taste experience");
h2.insertAdjacentElement("afterend", "h2");
// html 요소를 추가시킬 때 처음에는 createElement로 태그를 추가시키고 append prepend insertAdjacentElement를 통해 태그 위치를 설정하여 삽입한다.
// append는 설정한 태그 뒤에 appendchild는 해당한 태그의 자식 태그 뒤에 prepend는 설정한 태그 앞에 prependchild는 해당한 태그의 자식 태그 새로 만든 태그를 삽입한다.
// insertadjacentelement는 중간 태그의 구체적인 위치에 새로운 요소를 삽입할 수 있으므로 beforebegin이랑 afterend는 해당 태그 앞 뒷부분에
// afterbegin과 beforeend는 해당태그의 자식노드 앞 뒷부분에 새로운 요소를 삽입하고 변수명을 입력하여 저장된 요소를 삽입한다.
// remove와 removechild는 마찬가지로 요소를 제거하는 메서드이다.
