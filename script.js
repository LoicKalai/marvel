// 1&apikey- clé publique
// hash = https://cryptii.com/pipes/md5-hash hacher sur ce lien mettre chiffre 1clé privée clé publique (tout attaché) et placer le resultat après =

const url =
  "https://gateway.marvel.com:443/v1/public/comics/91620?ts=1&apikey=bdfb2d1e4535176c82d3c714057f22f6&hash=427e8cb56a0d0612f1bcb9a42246507d";
const lifeStory6 = document.querySelector(".lifeStory6");
fetch(url)
  .then((resp) => resp.json())
  .then((data) => {
    lifeStory6.src = data.data.results[0].images[0].path + ".jpg";
  });

// barre  de nav
const bourger = document.getElementById("nav-toggle");
const content = document.getElementById("nav-content");
bourger.addEventListener("click", function () {
  content.classList.toggle("hidden");
  content.style.display = "flex";
});
content.addEventListener("click", function () {
  if (document.querySelector("body").clientWidth < "1023") {
    content.style.display = "none";
  }
});

let t = 0;
let p = 0;
const carousel = () => {
  const items = document.querySelector(".carousel-item");
  items.classList.add("active");
  let total = document.querySelectorAll(".carousel-item");

  let totalCa = total.length;

  let current = 0;
  const moveRight = document.querySelector("#moveRight");
  const moveLeft = document.querySelector("#moveLeft");
  moveRight.addEventListener("click", () => {
    t++;
    let next = current;
    current = current + 1;
    setSlide(next, current);
  });

  moveLeft.addEventListener("click", () => {
    let prev = current;
    current = current - 1;
    setSlide(prev, current);
  });

  function setSlide(prev, next) {
    let slide = current;
    if (next > totalCa - 1) {
      slide = 0;
      current = 0;
    }
    if (next < 0) {
      slide = totalCa - 1;
      current = totalCa - 1;
    }

    const carousel = document.querySelectorAll(".carousel-item");
    p = t + 1;
    const currentCarousel = document.querySelector(".carousel-item--" + t);
    if (t === 5) {
      t = 1;
      p = 1;
    }

    const nextCarousel = document.querySelector(".carousel-item--" + p);
    currentCarousel.classList.remove("active");
    nextCarousel.classList.add("active");

    setTimeout(function () {}, 800);
  }
};
carousel();
