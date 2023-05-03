const form = document.querySelector("form");
const products = document.querySelector("#product");
const quantity = document.querySelector("#qty");
const ul = document.querySelector("ul");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const productInput = products;
  const quantityInput = quantity;
  add(quantityInput.value, productInput.value);
  productInput.value = "";
  quantityInput.value = "";
});
const add = (quantity, product) => {
  const newLi = document.createElement("li");
  newLi.append(`${quantity} ${product}`);
  ul.append(newLi);
};
