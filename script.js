let frases = [
    'Quem precisa de namoro quando existe videogame?',
    'Uma homenagem ao amor em forma de pixels',
    'Porque nem todo amor é romântico — alguns têm XP',
    'Um cantinho pixelado para quem ama joguinhos',
    'Dia dos Namorados? Tô ocupado farmando',
    'Feito para corações 8-bit'

]
let i = 0
setInterval(() => {
    console.log([i]);
    
    
    document.getElementById('frase').innerHTML = frases[i]
    i++
    if(i == frases.length){
        i = 0
    }
}, 5000);

const btn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");

btn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

function menuFechar(){
    sidebar.classList.toggle("active");

}