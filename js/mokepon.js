const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
const sectionreiniciar= document.getElementById("reiniciar")
const botonMascotaJugador = document.getElementById('boton-mascota') // buscar un elemento id en html
const botonReiniciar = document.getElementById("boton-reiniciar")
sectionreiniciar.style.display = "none"


const sectionSeleccionarMascota = document.getElementById("seleccionar-personaje")
const spanMascotaJugador=document.getElementById("mascota-jugador")// buscar un elemento id en html

const spanMascotaEnemigo=document.getElementById("mascota-enemigo")// buscar un elemento id en html

const spanVidasJugador = document.getElementById("vidas-jugador")
const spanVidasEnemigo = document.getElementById("vidas-enemigo")

const sectionMensajes= document.getElementById("resultado")// buscar un elemento id en html
const ataqueDelJugador= document.getElementById("ataque-Jugador")// buscar un elemento id en html
const ataqueDelEnemigo= document.getElementById("ataque-Enemigo")// buscar un elemento id en html
const contenedorTarjetas = document.getElementById("contenedorTarjetas")
const contenedorAtaques = document.getElementById("contenedorAtaques")

let dragones =[]
let ataqueJugador =[]
let ataqueEnemigo =[]
let opcionesDeDragones
let inputgoku
let inputvegeta 
let  inputgohan 
let mascotaJugador
let ataquesDragon
let botonhameja
let botonkaioken
let botonhakai
let botones =[]
let ataquesJugador = []
let ataqueDragonEnemigo 
let indexAtaqueEnemigo
let indexAtaqueJugador
let victoriasJugador = 0
let victoriasEnemigo= 0
let vidasJugador = 3
let vidasEnemigo = 3

class Dragon{
    constructor(nombre, foto, vida , ){
        this.nombre = nombre
        this.foto= foto
        this.vida = vida
        this.ataques= []
    }
}
let goku = new Dragon("Goku","./img/aebb2aba5805a17893f72429b5995ee2.jpg", 5)
let vegeta = new Dragon ("Vegeta","./img/Vegeta.png",5)
let gohan = new Dragon("Gohan","./img/27b74e143820875.6281f1f3be8d4.jpg", 5)

goku.ataques.push(
{nombre :"🔥" , id: "boton-hameja"},
{nombre :"🔥" , id: "boton-hameja"},
{nombre :"🔥" , id: "boton-hameja"},
{nombre :"💥" , id:"kaio-ken"},
{nombre :"💦" , id:"hakai"},

)
vegeta.ataques.push(
    {nombre :"💥" , id:"kaio-ken"},
    {nombre :"💥" , id:"kaio-ken"},
    {nombre :"💥" , id:"kaio-ken"},
    {nombre :"💦" , id:"hakai"},
    {nombre :"🔥" , id: "boton-hameja"},

)
gohan.ataques.push(
    {nombre :"🔥" , id: "boton-hameja"},
    {nombre :"🔥" , id: "boton-hameja"},
    {nombre :"🔥" , id: "boton-hameja"},
    {nombre :"💦" , id:"hakai"},
    {nombre :"💥" , id:"kaio-ken"},
 )
 dragones.push(goku,vegeta,gohan)




function iniciarJuego () {


    sectionSeleccionarAtaque.style.display = "none " // ocultar el html 
    // sectionreiniciar.style.display = "none"

    dragones.forEach((Dragon) =>{
     opcionesDeDragones =`
     <input type="radio" name ="personaje " id=${Dragon.nombre}>
     <label class="tarjeta-dragon" for=${Dragon.nombre}>
         <p>${Dragon.nombre}</p>
         <img src=${Dragon.foto} alt=${Dragon.nombre}>
     </label>
     `
     contenedorTarjetas.innerHTML += opcionesDeDragones

     inputgoku=document.getElementById("Goku")// buscar un elemento id en html
     inputvegeta = document.getElementById("Vegeta")// buscar un elemento id en html
     inputgohan = document.getElementById("Gohan")// buscar un elemento id en html
    })

    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)// para darle funcion de click al boton



    botonReiniciar.addEventListener("click", reiniciarJuego)
}



function seleccionarMascotaJugador() {
    sectionSeleccionarMascota.style.display = "none " // esconde una parte de html
    sectionSeleccionarAtaque.style.display = "flex " // muestra la pgaina html

    if(inputgoku.checked){// al seleccionar un input
        spanMascotaJugador.innerHTML= inputgoku.id // cambia el contenido de html 
        mascotaJugador = inputgoku.id
    } else if (inputvegeta.checked){ // al seleccionar un input
        spanMascotaJugador.innerHTML=inputvegeta.id// cambia el contenido de html 
        mascotaJugador =inputvegeta.id
    } else if(inputgohan.checked){// al seleccionar un input
        spanMascotaJugador.innerHTML= inputgohan.id//cambia el contenido de html
        mascotaJugador = inputgohan.id
    }else{
        alert("por favor seleccionar uno ")
    }
    extraerAtaques(mascotaJugador)
    seleccionarMascotaEnemigo()
    }

    function extraerAtaques(mascotaJugador){
     let ataques 
     for (let i = 0;i < dragones.length; i++) {
        if(mascotaJugador === dragones[i].nombre){
         ataques = dragones[i].ataques
        }
     }
     console.log(ataques)
     mostrarAtaques(ataques)
    }
    function mostrarAtaques(ataques){
     ataques.forEach((ataque)=>{
        ataquesDragon =`
        <button id=${ataque.id} class="boton-ataque BAtaque">${ataque.nombre}</button>
        `
        contenedorAtaques.innerHTML +=ataquesDragon
     })
      botonhameja = document.getElementById("boton-hameja")// buscar un elemento id en html
      botonkaioken = document.getElementById("kaio-ken")// buscar un elemento id en html
      botonhakai =  document.getElementById("hakai")// buscar un elemento id en html
      botones = document.querySelectorAll(".BAtaque")
    //   console.log (botones)


      botonhameja.addEventListener("click",ataqueHameja)//para darle funcion de click al boton
      botonkaioken.addEventListener("click",ataquekaioken)//para darle funcion de click al boton
      botonhakai.addEventListener("click",ataqueHakai)//para darle funcion de click al boton

    }
function secuenciaAtaque(){
    botones.forEach((boton)=>{
    boton.addEventListener("click",(e)=>{
      if (e.target.textContent ==="🔥") {
        ataquesJugador.push("hameja")
        console.log(ataquesJugador)
        boton.style.background="#112f58" 
        boton.disabled=true
      }else if(e.target.textContent ==="💦"){
        ataquesJugador.push("Kaioken")
        console.log(ataquesJugador)
        boton.style.background="#112f58" 
        boton.disabled=true

      }else {
        ataquesJugador.push("hakai")
        console.log(ataquesJugador)
        boton.style.background="#112f58" 
        boton.disabled=true

      }
      ataqueAleatorioEnemigo()
    })
    })
    
}

function seleccionarMascotaEnemigo(){
    let mascotaAleatorio = aleatorio(0,dragones.length -1 )
    spanMascotaEnemigo.innerHTML =  dragones[mascotaAleatorio].nombre
     ataqueDragonEnemigo = dragones[mascotaAleatorio].ataques
    secuenciaAtaque()
    }

function ataqueHameja (){
    ataqueJugador="hameja"
   ataqueAleatorioEnemigo()
}
function ataquekaioken (){
    ataqueJugador="kaio-ken"
    ataqueAleatorioEnemigo()
}
function ataqueHakai (){
    ataqueJugador="hakai"
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio= aleatorio(0,ataqueDragonEnemigo.length-1)
    if(ataqueAleatorio==0 || ataqueAleatorio==1){
        ataqueEnemigo.push("hameja")
    }else if (ataqueAleatorio == 3 || ataqueAleatorio == 4){
        ataqueEnemigo.push("kaio-ken")
    }else{
        ataqueEnemigo.push("hakai")
    }
    console.log( ataqueEnemigo)
    iniciarPelea()

}
 function iniciarPelea(){
    if (ataquesJugador.length === 5) {
        combate ()
 }
}
function indexAmbosOponentes(jugador,enemigo){
    indexAtaqueJugador = ataquesJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}

function combate (){
   for (let index = 0; index < ataquesJugador.length; index++) {
    if (ataquesJugador[index] ===ataqueEnemigo[index]) {
        indexAmbosOponentes(index,index)
        crearMensaje ("empate")
        
    } else if (ataquesJugador[index] ==="hameja" && ataqueEnemigo[index]==="hakai"){
        indexAmbosOponentes(index,index)
        crearMensaje("ganaste")
        victoriasJugador++
        spanVidasJugador.innerHTML = victoriasJugador
    }else if (ataquesJugador[index] ==="hakai" && ataqueEnemigo[index]==="hameja"){
        indexAmbosOponentes(index,index)
        crearMensaje("ganaste")
        victoriasJugador++
        spanVidasJugador.innerHTML = victoriasJugador
    }else if (ataquesJugador[index] ==="kaioken" && ataqueEnemigo[index]==="hakai"){
        indexAmbosOponentes(index,index)
        crearMensaje("ganaste")
        victoriasJugador++
        spanVidasJugador.innerHTML = victoriasJugador
    } else{
        indexAmbosOponentes(index,index)
        crearMensaje("perdiste")
       victoriasEnemigo ++
        spanVidasEnemigo.innerHTML = victoriasEnemigo
    }
        
    // 59
    }


    // revisar vidas
    revisarVidas()

}
  function revisarVidas(){
    if (victoriasJugador === victoriasEnemigo){
     crearMensajeFinal ("esto fue un empate")
    }else if (victoriasJugador > victoriasEnemigo){
     crearMensajeFinal ("ganaste")
    }else{
        crearMensajeFinal("perdiste!!")
    }

  }


function crearMensaje(resultado){


let nuevoAtaqueJugador = document.createElement("p")// crear nuevos elemtos de js a html
let nuevoAtaqueEnemigo = document.createElement("p")// crear nuevos elemtos de js a html

sectionMensajes.innerHTML = resultado
nuevoAtaqueJugador.innerHTML = indexAtaqueJugador
nuevoAtaqueEnemigo.innerHTML = indexAtaqueEnemigo


ataqueDelJugador.appendChild(nuevoAtaqueJugador) // agarrar elementos de js para aplicarselos a html
ataqueDelEnemigo.appendChild(nuevoAtaqueEnemigo) // agarrar elementos de js para aplicarselos a html

}

function crearMensajeFinal(resultadoFinal){

    sectionMensajes.innerHTML = resultadoFinal


   // bloquea boton


   sectionreiniciar.style.display = "block"
   }


    function reiniciarJuego(){
        location.reload() // reinica la pagina 
    }
    function aleatorio(min,max){
        return Math.floor(Math.random()*(max - min + 1)+ min ) // crear numeros aleatorios de 1 y 0
        }




window.addEventListener("load" ,iniciarJuego) 
// 54