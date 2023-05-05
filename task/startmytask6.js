const section = document.querySelector("section");
const link = "image/pokemon";
const pokemonBox = document.querySelector("#select");
const likedBox = document.querySelector("#selectedbox");
const pokemonName = {
  1: "이상해씨",
  2: "이상해풀",
  3: "이상해꽃",
  4: "파이리",
  5: "리자드",
  6: "리자몽",
  7: "꼬부기",
  8: "어니부기",
  9: "거북왕",
  10: "캐터피",
  11: "단데기",
  12: "버터플",
  13: "뿔충이",
  14: "딱충이",
  15: "독침봉",
  16: "구구",
  17: "피죤",
  18: "피죤투",
  19: "꼬렛",
  20: "레트라",
  21: "깨비참",
  22: "깨비드릴조",
  23: "아보",
  24: "아보크",
  25: "피카츄",
  26: "라이츄",
  27: "모래두지",
  28: "고지",
  29: "니드런",
  30: "니드리나",
};

let template_tag = (no, link, poketmonName, classNameVar) => {
  return `
<div class="${classNameVar}" id="id${no}" data-idx="${no}">
  <h1>No.${no}</h1>
  <img src="${link}${no}.png" />
  <p>${poketmonName}</p>
</div>
`;
};

const PARENT_WRAP = document.querySelector("#select");

for (let i = 1; i <= Object.keys(pokemonName).length; i++) {
  let boxWrap = template_tag(
    i,
    link,
    pokemonName[i],
    `background boxchange background${i}`
  );
  pokemonBox.innerHTML += boxWrap;
}

PARENT_WRAP.addEventListener("click", (event) => {
  const likedBox2 = document.querySelector("#selectedbox");
  const target = event.target;
  if (
    target.id !== "select" &&
    target.id !== "selectedbox" &&
    target.id !== "title"
  ) {
    if (target.id) {
      likedBox2.appendChild(target);
      target.classList = "inbackground";
      console.dir(target);
      target.children[0].classList = "inh1";
      target.children[1].classList = "inimg";
      target.children[2].classList = "inp";
    } else {
      let parentEl = target.parentElement;
      likedBox2.appendChild(parentEl);
      parentEl.classList = "inbackground";
      console.dir(parentEl);
      parentEl.children[0].classList = "inh1";
      parentEl.children[1].classList = "inimg";
      parentEl.children[2].classList = "inp";
    }
  }
});
const LIKED_BOX = document.querySelector("#selectedbox");

LIKED_BOX.addEventListener("click", (event) => {
  const target = event.target;
  const POKEMON_BOX = document.querySelector("#select");
  if (target.id !== "selectedbox" && target.id !== "title") {
    if (target.id) {
      console.log(target);
      POKEMON_BOX.appendChild(target);
      target.classList = "background boxchange ";
      target.children[0].classList = " ";
      target.children[1].classList = " ";
      target.children[2].classList = " ";
      sortElementsByDataIdx();
    } else {
      let parentEl = target.parentElement;
      console.log(parentEl);
      POKEMON_BOX.appendChild(parentEl);
      parentEl.classList = "background boxchange";
      parentEl.children[0].classList = " ";
      parentEl.children[1].classList = " ";
      parentEl.children[2].classList = " ";
      sortElementsByDataIdx();
    }
  }
});

function sortElementsByDataIdx() {
  const container = document.querySelector("#select"); // 정렬할 div 요소 선택
  const elements = Array.from(container.children); // div 요소의 자식 요소들을 배열로 가져옴

  elements.sort((a, b) => {
    const aIdx = Number(a.getAttribute("data-idx")); // a 요소의 data-idx 속성 값
    const bIdx = Number(b.getAttribute("data-idx")); // b 요소의 data-idx 속성 값

    return aIdx - bIdx; // 오름차순으로 정렬
  });

  elements.forEach((el) => container.appendChild(el)); // 정렬된 요소를 다시 container에 추가
}
