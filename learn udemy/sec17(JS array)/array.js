let frontend = ["HTML", "CSS", "Javascript"];
frontend.length;
frontend[1];
frontend[1][0];
frontend[29];
frontend[3] = "React";
frontend[10] = "UI";
frontend;

let addFood = ["Chicken", "Salad", "Steak"];
addFood.push("Soup");
addFood.pop();
addFood.unshift("Icecream");
addFood.shift();

let northKorea = ["평양", "공산주의"];
let southKorea = ["서울", "민주주의"];
let Korea = northKorea.concat(southKorea);
Korea;
Korea.includes("평양");
Korea.reverse();
Korea.slice(2, 4);
Korea.splice(0, 4, "한반도")[(1, 2, 3)] === [1, 2, 3];

let array1 = [1, 2, 3];
let array2 = array1;
array1 === array2;
const testArray = [1, 2, 3];
testArray.push(4, 5);
testArray;

let stocku = [[1, 8, 7][(2, null, 5)][(null, 4, null)]];
stocku[1];
stocku[1][1];
// 배열은 중괄호 안에 컨텐츠들이 있는 것을 말한다.
// 배열은 길이를 확인할 수 있고 content위치와 content의 알파벳위치를 확인할 수 있다.
// 배열은 위치가 없는 것을 요구했을 때 -1로 출력하고 위치가 없는 값에 컨텐츠를 새로 추가할 수 있다.
// 배열 메서드에서 push는 배열 끝에 unshift는 배열 앞에 컨텐츠가 추가되고 pop은 배열 끝에 shift는 배열 앞에 컨텐츠가 삭제된다.
// concat을 써서 2배열을 합칠 수도 있고 include는 배열에 컨텐츠가 있는지 여부를 확인하고 reverse는 배열순서를 바꾼채로 출력한다.(출력된 이후에도 계속 적용된다.)
// slice를 써서 배열의 특정 부분을 자를수도 있고 splice를 써서 특정부분을 얼만큼 자를지 또 추가시키고 싶은 컨텐츠도 추가하는 것이 가능하다.
// 배열끼리 비교했을때 false값이 나오는데 참조하는 메모리 부분이 다르기 때문이다(참조타입) 이때 해당배열에 변수이름을 지정하고 각 변수끼리 같나고 설정하면 true로 바뀔 수 있다.
// const는 불변값이라고 했는데 배열일때는 컨텐츠 추가 삭제가 가능하다. 그 이유는 배열만 바뀌지 않을뿐 내부에 있는 컨텐츠까지 javascript가 신경쓰지 않는다. 또 함수 내부 같은 변수가 지정되어 있어도 바뀐다.
// 다중배열도 배열 접근 식을 반복 입력하면 위치를 찾는것이 가능하다.
