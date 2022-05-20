const url = "https://gateway.marvel.com:443/v1/public/comics/91620?ts=1&apikey=c14df808edaae165c487253759fe027d&hash=b772d3866604177691f5c2b041434d8c";
const img = document.getElementById('image');
const body = document.querySelector('body');
const script = document.querySelector('script')
fetch(url)
.then((resp) => resp.json())
.then((data) => {
    const image = document.querySelector('img');
    image.src = data.data.results[0].thumbnail.path+".jpg";
    console.log(data.data.results[0].thumbnail.path+"."+data.data.results[0].thumbnail.extension);

})
