// 1&apikey- clé publique
// hash = https://cryptii.com/pipes/md5-hash hacher sur ce lien mettre chiffre 1clé privée clé publique (tout attaché) et placer le resultat après =

const url = 'https://gateway.marvel.com:443/v1/public/comics/91620?ts=1&apikey=bdfb2d1e4535176c82d3c714057f22f6&hash=427e8cb56a0d0612f1bcb9a42246507d';
const lifeStory6 = document.querySelector(".lifeStory6");
fetch(url)
.then((resp) => resp.json())
.then((data) => {
    lifeStory6.src = data.data.results[0].images[0].path+".jpg";
    
})

// barre  de nav
const bourger =  document.getElementById('nav-toggle');
const content = document.getElementById("nav-content");
bourger.addEventListener('click', function(){
    content.classList.toggle("hidden");
    content.style.display = "flex";
     
})
content.addEventListener('click', function(){
    if(document.querySelector("body").clientWidth < "1023" ){
        content.style.display = "none";
    }
    

})