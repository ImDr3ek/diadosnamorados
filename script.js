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

"Mario e Peach", "Link e Zelda",
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

"Mario e Peach", "Link e Zelda",
"Sonic e Amy Rose", "Cloud Strife e Tifa Lockhart",
"Squall Leonhart e Rinoa Heartilly", "Tidus e Yuna",
"Geralt de Rívia e Yennefer", "Commander Shepard e Liara T'Soni",
"Nathan Drake e Elena Fisher", "James Sunderland e Mary Shepherd-Sunderland",
"Max Caulfield e Chloe Price", "Madeline e Theo",
"Mae Borowski e Gregg Lee", "Ryu e Chun-Li",
"Cody e May", "Kratos e Faye",
"Ellie e Dina", "V e Judy Alvarez",
"Deacon e Sarah", "Leon S. Kennedy e Ada Wong",
"Lara Croft e Sam Nishimura", "Tracer e Emily"

]

let imagenes = [
"0.png","1.png","2.png","3.png","4.png",
"5.png","6.png","7.png","8.png","9.png","10.png","11.png","12.png",
"13.png","14.png","15.png","16.png","17.png","18.png","19.png","20.png","21.png"
];

let c1 = 0
let c2 = 0



function escolha(){

    
}


function image(){
    
    c1 = Number(Math.floor(Math.random()*casais1.length))
    document.getElementById('escolha1').innerHTML = casais1[c1]
    document.getElementById('img1').src = `${c1}.png`;
    console.log([c1])
    casais1.splice(c1,1);
    imagenes.splice(c1,1);
    
}
function image2(){
    c2 = Number(Math.floor(Math.random()*casais2.length))
    document.getElementById('escolha2').innerHTML = casais2[c2]
    document.getElementById('img2').src = `${c2}.png`;
    console.log([c2])
    casais2.splice(c2,1);
    imagenes.splice(c2,1);
    
    
}



// function escolha(){

    
// }