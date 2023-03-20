document.getElementById("next").addEventListener("click", next);
document.getElementById("previous").addEventListener("click", previous);

const path = "../img/";
const images = ["img1.jpeg", "img2.jpeg", "img3.jpeg", "img4.jpeg"];
const img = document.getElementById("img");
const title = document.getElementById("title");
let index = 0;

function init() {
  img.src = path + images[index];
  title.innerHTML = images[index].split(".")[0];
}
function next() {
  index = index + 1 < images.length ? ++index : 0;
  img.src = path + images[index];
  title.innerHTML = images[index].split(".")[0];
}

function previous() {
  index = index - 1 < 0 ? images.length - 1 : --index;
  img.src = path + images[index];
  title.innerHTML = images[index].split(".")[0];
}
init();
