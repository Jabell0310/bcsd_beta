import foods from "./foods";
import { choice, remove } from "./helpers";
let fruit = choice(foods);
console.log(`I'd like one ${fruit}, please.`);
console.log(`Here you go: ${fruit}`);
console.log(`Delicious! May I have another?`);
let remaining = remove(foods, fruit);
console.log(`I'm sorry, we're all out. We have ${remaining.length} left.`);

// 하나의 코드를 파일 내에서 불러올 때는 import의 이름을 변환해도 된다.
// 두개 이상의 코드를 파일 내에서 불러올 때는 import의 변수명을 export에 맞춰서 써야한다.
// 이런식으로 src 파일에 여러 파일을 import하여 앱을 개발할 수 있다.
// 그리고 파일 경로가 길다면 맨 위에 변수를 하나 만들어서 변수를 입력하는 방식으로 코드를 줄일 수 있다.
