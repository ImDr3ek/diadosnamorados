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

// const btn = document.getElementById("menuBtn");
// const sidebar = document.getElementById("sidebar");

// btn.addEventListener("click", () => {
//   sidebar.classList.toggle("active");
// });

// function menuFechar(){
//     sidebar.classList.toggle("active");

// }

let casais1 = [

"pepedeuerro","Mario e Peach", "Link e Zelda",
"Sonic e Amy Rose", "Cloud Strife e Tifa Lockhart",
"Squall Leonhart e Rinoa Heartilly", "Tidus e Yuna",
"Geralt de Rívia e Yennefer", "Commander Shepard e Liara T'Soni",
"Nathan Drake e Elena Fisher", "James Sunderland e Mary Shepherd-Sunderland",
"Max Payne e Mona Sax", "Madeline e Theo",
"Mae Borowski e Gregg Lee", "Ryu e Chun-Li",
"Kyo Kusanagi e Yuki", "Kratos e Faye",
"Peter Parker e Mary Jane Watson", "V e Judy Alvarez",
"V e Panam Palmer", "Leon S. Kennedy e Ada Wong",
"Lara Croft e Sam Nishimura", "Tracer e Emily"

]

let casais2 = [

"pepedeuerro","Mario e Peach", "Link e Zelda",
"Sonic e Amy Rose", "Cloud Strife e Tifa Lockhart",
"Squall Leonhart e Rinoa Heartilly", "Tidus e Yuna",
"Geralt de Rívia e Yennefer", "Commander Shepard e Liara T'Soni",
"Nathan Drake e Elena Fisher", "James Sunderland e Mary Shepherd-Sunderland",
"Max Payne e Mona Sax", "Madeline e Theo",
"Mae Borowski e Gregg Lee", "Ryu e Chun-Li",
"Kyo Kusanagi e Yuki", "Kratos e Faye",
"Peter Parker e Mary Jane Watson", "V e Judy Alvarez",
"V e Panam Palmer", "Leon S. Kennedy e Ada Wong",
"Lara Croft e Sam Nishimura", "Tracer e Emily"

]

let c1 = 0
let c2 = 0



function escolha(){

    
}


function image(){
    
    c1 = Number(Math.ceil(Math.random()*22))
    document.getElementById('escolha1').innerHTML = casais1[c1]
    
    console.log([c1])
    
}
function image2(){
    
    c2 = Number(Math.ceil(Math.random()*22))
    
    document.getElementById('escolha2').innerHTML = casais2[c2]
    
    console.log([c2])
    
    
}

function escolha(){

    
}