const $img = document.querySelector("#cat");
const $getCat = document.querySelector("#get-cat");
function getCatImg() {
  fetch("https://api.thecatapi.com/v1/images/search?size=full").then((res) => {
    res.json().then((res) => {
      $img.src = res[0].url;
    });
  });
}

$getCat.addEventListener("click", getCatImg);
