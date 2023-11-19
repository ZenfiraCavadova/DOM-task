//?Bootstarpdan gələn kart dəyərinin rəngini dəyişin
const cardOne = document.getElementById("primary-card");
cardOne.style.backgroundColor = "#00b4d8";

//?Header Sözünün Rəngini dəyişin
const headOfCard = document.getElementById("card-header");
headOfCard.style.color = "#caf0f8";

//?Buttona klik etdikdə kartın rəngi dəyişsin
const btn = document.querySelector(".btn-primary");

btn.addEventListener("click", function () {
  changeCardColor();
});
function changeCardColor() {
  cardOne.style.backgroundColor = "#d6ccc2";
}

//?Card - ın width dəyərini dəyişin
cardOne.style.width = "500px";

//?Buttona klik etdikdə Light Card title sözünün rəngi dəyişsin
btn.addEventListener("click", function () {
  changeCardTitle();
});

function changeCardTitle() {
  titleofCard.style.color = "#edede9";
}
//?Buttona klik etdikdə butttonun rəngi dəyişsin
btn.addEventListener("click", function () {
  btn.style.backgroundColor = "#588157";
});

//?Light card title sözünü coders sözü ilə dəyişin
const titleofCard = document.querySelector(".card .card-body .card-title");
titleofCard.textContent = "Coders";

//? Header sözünü  yanına <span class="badge text-bg-secondary">4</span> əlavə edin
headOfCard.innerHTML =
  '<span class="badge text-bg-secondary">4</span>' +
  "  " +
  headOfCard.innerHTML;

//? p tag inin içərisini loremlə dəyişin
const textofCard = document.querySelector(".card .card-body .card-text");
textofCard.textContent =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla hic itaque ducimus inventore labore minima mollitia porro dolores repudiandae quisquam!";
