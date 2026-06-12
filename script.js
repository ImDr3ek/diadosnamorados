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
    // console.log([i]);
    
    
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

"Madeline e Theo",
"Mae Borowski e Gregg Lee", "Ryu e Chun-Li",
"May e Cody", "Kratos e Faye",
"Ellie e Dina", "V e Judy Alvarez",
"Sara e Daecon", "Leon S. Kennedy e Ada Wong",
"Lara Croft e Sam Nishimura", "Tracer e Emily"

]

let casais2 = [

"Mario e Peach", "Link e Zelda",
"Sonic e Amy Rose", "Cloud Strife e Tifa Lockhart",
"Squall Leonhart e Rinoa Heartilly", "Tidus e Yuna",
"Geralt de Rívia e Yennefer", "Commander Shepard e Liara T'Soni",
"Nathan Drake e Elena Fisher", "James Sunderland e Mary Shepherd-Sunderland",
"Max Caulfield e Chloe Price"
]

let imagenes = [
    "11.png","12.png",
    "13.png","14.png","15.png","16.png","17.png","18.png","19.png","20.png","21.png"
]
let imagenes2 = [
    "0.png","1.png","2.png","3.png","4.png",
    "5.png","6.png","7.png","8.png","9.png","10.png"
];

let c1 = 0
let c2 = 0
let img = 0
let img2 = 0
const opt1 = document.getElementById('opt1')
const opt2 = document.getElementById('opt2')
const reinicioBtn = document.getElementById('reinicio')



function image(){
    
    c1 = 0
    img = 0

    console.log('numero random ' + c1)

    document.getElementById('escolha1').innerHTML = casais1[c1]
    document.getElementById('img1').src = imagenes[img]

    console.log("Lista atual: " + casais1);
    console.log('casal escolido ' + casais1[c1])

    casais1.splice(c1,1);
    console.log("Lista atual: " + casais1);
    
    console.log("-------------------")
    console.log("Lista atual de imagenes: " + imagenes);
    console.log('casal escolido ' + imagenes[c1])

    imagenes.splice(img,1)
    
    console.log("Tamamnho da lista" + casais1.length)
    console.log("Lista atual de imagenes: " + imagenes);
    
    if(casais1.length === 0){
        // console.log("cheguei")
        opt1.classList.add('hide')
        reinicioBtn.classList.add('visible')
        // console.log(opt1.className);

    }

    c1 ++
    img ++
}
function image2(){
    c2 = 0
    img2 = 0
    document.getElementById('escolha2').innerHTML = casais2[c2]
    document.getElementById('img2').src = imagenes2[img2]
    casais2.splice(c2,1);
    imagenes2.splice(img2,1)
    
    if(casais2.length === 0){
        opt2.classList.add('hide')
        reinicioBtn.classList.add('visible')
    }
    c2 ++
    img2 ++

}


function reinicio(){
escolhido = document.getElementById('escolhido').innerHTML = "BORA ESCOLHER OUTRO CASAL?"
window.location.reload()
    
}


// function escolha(){

    
// }