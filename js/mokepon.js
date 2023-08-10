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
let ataqueEnemigo
let opcionesDeDragones
let inputgoku
let inputvegeta 
let  inputgohan 
let mascotaJugador
let ataquesDragon
let botonhameja
let botonkaioken
let botonhakai
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
{nombre :"💥" , id:"kaio ken"},
{nombre :"💦" , id:"hakai"},

)
vegeta.ataques.push(
    {nombre :"💥" , id:"kaio ken"},
    {nombre :"💥" , id:"kaio ken"},
    {nombre :"💥" , id:"kaio ken"},
    {nombre :"💦" , id:"hakai"},
    {nombre :"🔥" , id: "boton-hameja"},

)
gohan.ataques.push(
    {nombre :"🔥" , id: "boton-hameja"},
    {nombre :"🔥" , id: "boton-hameja"},
    {nombre :"🔥" , id: "boton-hameja"},
    {nombre :"💦" , id:"hakai"},
    {nombre :"💥" , id:"kaio ken"},
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
      botonkaioken = document.getElementById("kaio ken")// buscar un elemento id en html
      botonhakai =  document.getElementById("hakai")// buscar un elemento id en html
     



      botonhameja.addEventListener("click",ataqueHameja)//para darle funcion de click al boton
      botonkaioken.addEventListener("click",ataquekaioken)//para darle funcion de click al boton
      botonhakai.addEventListener("click",ataqueHakai)//para darle funcion de click al boton
      
    }
   

function seleccionarMascotaEnemigo(){
    let mascotaAleatorio = aleatorio(0,dragones.length -1 )
    spanMascotaEnemigo.innerHTML =  dragones[mascotaAleatorio].nombre
    secuenciaAtaque()
    }

function ataqueHameja (){
    ataqueJugador="hameja"
   ataqueAleatorioEnemigo()
}
function ataquekaioken (){
    ataqueJugador="kaio ken"
    ataqueAleatorioEnemigo()
}
function ataqueHakai (){
    ataqueJugador="hakai"
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio= aleatorio(1,3)
    if(ataqueAleatorio==1){
        ataqueEnemigo = "hameja"
    }else if (ataqueAleatorio == 2){
        ataqueEnemigo="kaio ken"
    }else{
        ataqueEnemigo= "hakai"
    }
    combate()

 
}


function combate (){
    

 
    if(ataqueEnemigo==ataqueJugador){
   crearMensaje ("empate")
    }else if (ataqueJugador=="hameja"&& ataqueEnemigo=="hakai"){
      crearMensaje("ganaste")
      vidasEnemigo--
      spanVidasEnemigo.innerHTML=vidasEnemigo
  
    } else if(ataqueJugador=="kaio ken"&& ataqueEnemigo=="hameja"){
      crearMensaje("ganaste")
      vidasEnemigo--
      spanVidasEnemigo.innerHTML=vidasEnemigo
   
    } else if (ataqueJugador==="hakai" && ataqueEnemigo=="kaio ken"){
      crearMensaje("ganaste")
      vidasEnemigo--
      spanVidasEnemigo.innerHTML=vidasEnemigo

     
    } else {
      crearMensaje("perdiste")
      vidasJugador--
  spanVidasJugador.innerHTML=vidasJugador
    }
    // revisar vidas
    revisarVidas()

}
  function revisarVidas(){
    if (vidasEnemigo ==0){
     crearMensajeFinal ("felicitaciones ganaste")
    }else if (vidasJugador == 0){
     crearMensajeFinal ("lo siento... perdiste")
    }

  }


function crearMensaje(resultado){
 

let nuevoAtaqueJugador = document.createElement("p")// crear nuevos elemtos de js a html
let nuevoAtaqueEnemigo = document.createElement("p")// crear nuevos elemtos de js a html

sectionMensajes.innerHTML = resultado
nuevoAtaqueJugador.innerHTML = ataqueJugador
nuevoAtaqueEnemigo.innerHTML = ataqueEnemigo


ataqueDelJugador.appendChild(nuevoAtaqueJugador) // agarrar elementos de js para aplicarselos a html
ataqueDelEnemigo.appendChild(nuevoAtaqueEnemigo) // agarrar elementos de js para aplicarselos a html

}

function crearMensajeFinal(resultadoFinal){
   
    sectionMensajes.innerHTML = resultadoFinal

   botonhameja.disabled = true
   
   botonkaioken.disabled = true
   
   botonhakai.disabled= true // bloquea boton

   
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