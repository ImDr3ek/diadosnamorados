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

const casais = [
  { casal: "Mario e Peach", img: "0.png" },
  { casal: "Link e Zelda", img: "1.png" },
  { casal: "Sonic e Amy Rose", img: "2.png" },
  { casal: "Cloud Strife e Tifa Lockhart", img: "3.png" },
  { casal: "Squall Leonhart e Rinoa Heartilly", img: "4.png" },
  { casal: "Tidus e Yuna", img: "5.png" },
  { casal: "Geralt de Rívia e Yennefer", img: "6.png" },
  { casal: "Commander Shepard e Liara T'Soni", img: "7.png" },
  { casal: "Nathan Drake e Elena Fisher", img: "8.png" },
  { casal: "James Sunderland e Mary Shepherd-Sunderland", img: "9.png" },
  { casal: "Max Caulfield e Chloe Price", img: "10.png" },
  { casal: "Madeline e Theo", img: "11.png" },
  { casal: "Mae Borowski e Gregg Lee", img: "12.png" },
  { casal: "Ryu e Chun-Li", img: "13.png" },
  { casal: "May e Cody", img: "14.png" },
  { casal: "Kratos e Faye", img: "15.png" },
  { casal: "Ellie e Dina", img: "16.png" },
  { casal: "V e Judy Alvarez", img: "17.png" },
  { casal: "Sara e Daecon", img: "18.png" },
  { casal: "Leon S. Kennedy e Ada Wong", img: "19.png" },
  { casal: "Lara Croft e Sam Nishimura", img: "20.png" },
  { casal: "Tracer e Emily", img: "21.png" },
  { casal: "John Marston Abigail Marston", img: "john & abigail marston.png" },
  { casal: "Master Chief e Cortana", img: "master Chief.png" },
  { casal: "Geralt de Rívia e Triss Merigold", img: "Geralrt.png" },
  { casal: "Arthur Morgan e Mary Linton", img: "Arthur Morgan & Mary Linton.png" },
  { casal: "Pac-Man e Ms. Pac-Man", img: "Nurse Ms_ Pac-Man Merchandising, 1980s.png" },
  { casal: "Zagreus e Megaera", img: "magarena.png" },
  { casal: "Joel e Tess", img: "Joel and Tess.png" },
  { casal: "Sora e Kairi", img: "sora.png" },
  { casal: "Zagreus e Thanatos", img: "Viadagem.png" },
  { casal: "Toriel e Asgore Dreemurr", img: "Toriel.png" },
  { casal: "Alphys e Undyne", img: "undyne.png" },
  { casal: "Clementine e Louis", img: "clementine.png" },
  { casal: "Jason Brody e Liza Snow", img: "vaas montenegro icons_ far cry 3 icons_.png" },
  { casal: "Isaac Clarke e Nicole Brennan", img: "Isaac.png" },
  { casal: "Solid Snake e Meryl Silverburgh", img: "SolidS.png" },
  { casal: "Joker e Makoto Niijima", img: "Joker.png" },
]


// const opt1 = document.getElementById('opt1')
// const opt2 = document.getElementById('opt2')
const reinicioBtn = document.getElementById('reinicio')



function image(){
    let sortido = (Math.floor(Math.random()*casais.length))
    
    document.getElementById('img1').src = casais[sortido].img
    document.getElementById("teste1").innerHTML = casais[sortido].casal
    console.log("el sorteado ", sortido)
    let teste = casais.splice(sortido, 1)
    console.log("el eliminado ", teste)
    
    
    if(casais.length === 0){
       
        opt1.classList.add('hide')
        document.getElementById("teste1").innerHTML = ""
        reinicioBtn.classList.add('visible')
        
        
    }
    
    console.log("casasissada " + casais)
}
function image2(){
    
    let sortido = (Math.floor(Math.random()*casais.length))

    document.getElementById('img2').src = casais[sortido].img
    document.getElementById("teste2").innerHTML = casais[sortido].casal
    console.log("el sorteado " + sortido)
    let teste = casais.splice(sortido, 1)
    console.log("el eliminado " + teste)
 
    
    if(casais.length === 0){
        opt2.classList.add('hide')
        document.getElementById("teste2").innerHTML = ""
        reinicioBtn.classList.add('visible')

    } 
    console.log("casasissada " + casais)

}

function reinicio(){
// escolhido = document.getElementById('escolhido').innerHTML = "BORA ESCOLHER OUTRO CASAL?"
window.location.reload()
    
}
 


// function iniciarJogo(){

//     const inicio = document.querySelectorAll(".tela")
//     inicio.forEach(function(pedro){pedro.classList.remove("ativa")}
// )
    
// }

// function telaInicio(){
// iniciarJogo()
// document.getAnimations("quiz").classList.add("ativa")

// }


