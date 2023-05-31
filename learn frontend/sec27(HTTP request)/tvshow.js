const form = document.querySelector("#searchForm");
form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const inputText = form.elements.query.value;
  const config = { params: { q: inputText, madeby: "jabell0310" } };
  console.log(config);
  const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
  console.log(res);
  makeImages(res.data);
  form.elements.query.value = "";
});

const makeImages = (shows) => {
  for (let result of shows) {
    if (result.show.image) {
      const img = document.createElement("IMG");
      img.src = result.show.image.medium;
      document.body.append(img);
    }
  }
};
// form은 객체로 만들어지는데 axios get으로 api를 요청하면 axios의 비동기처리가 response로 나오면 함수를 시행하고 value값을 초기화하는것이다.
