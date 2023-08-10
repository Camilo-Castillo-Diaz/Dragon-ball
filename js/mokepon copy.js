let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3
// function iniciarJuego () {}para leerr el js

    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display = "none " // ocultar el html 
    let sectionreiniciar= document.getElementById("reiniciar")
    sectionreiniciar.style.display = "none"


    let botonMascotaJugador = document.getElementById('boton-mascota') // buscar un elemento id en html
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)// para darle funcion de click al boton


    let botonhameja = document.getElementById("boton-hameja")// buscar un elemento id en html
    botonhameja.addEventListener("click",ataqueHameja)//para darle funcion de click al boton
    let botonkaioken = document.getElementById("kaio ken")// buscar un elemento id en html
    botonkaioken.addEventListener("click",ataquekaioken)//para darle funcion de click al boton
    let botonhakai =  document.getElementById("hakai")// buscar un elemento id en html
    botonhakai.addEventListener("click",ataqueHakai)//para darle funcion de click al boton
    let botonReiniciar = document.getElementById("boton-reiniciar")
    botonReiniciar.addEventListener("click", reiniciarJuego)



function seleccionarMascotaJugador() {
    let sectionSeleccionarMascota = document.getElementById("seleccionar-personaje")
    sectionSeleccionarMascota.style.display = "none " // esconde una parte de html

    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display = "flex " // muestra la pgaina html

    let inputgoku=document.getElementById("goku")// buscar un elemento id en html
    let inputvegeta = document.getElementById("vegeta")// buscar un elemento id en html
    let inputgohan = document.getElementById("gohan")// buscar un elemento id en html
    let spanMascotaJugador=document.getElementById("mascota-jugador")// buscar un elemento id en html

    if(inputgoku.checked){// al seleccionar un input
        spanMascotaJugador.innerHTML= " goku " // cambia el contenido de html 
    } else if (inputvegeta.checked){ // al seleccionar un input
        spanMascotaJugador.innerHTML= " vegeta "// cambia el contenido de html 
    } else if(inputgohan.checked){// al seleccionar un input
        spanMascotaJugador.innerHTML= " gohan "// cambia el contenido de html 
    }else{
        alert("por favor seleccionar uno ")
    }
    
        seleccionarMascotaEnemigo()

    }

function seleccionarMascotaEnemigo(){
    let mascotaAleatorio = aleatorio(1,3)
    let spanMascotaEnemigo=document.getElementById("mascota-enemigo")// buscar un elemento id en html

    if (mascotaAleatorio == 1) {
        spanMascotaEnemigo.innerHTML= "goku"// cambia el contenido de html
    }else if (mascotaAleatorio == 2){
        spanMascotaEnemigo.innerHTML = "vegeta"// cambia el contenido de html
    }else{
        spanMascotaEnemigo.innerHTML = "gohan"// cambia el contenido de html
       }
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
    let spanVidasJugador = document.getElementById("vidas-jugador")
    let spanVidasEnemigo = document.getElementById("vidas-enemigo")

 
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
 let sectionMensajes= document.getElementById("resultado")// buscar un elemento id en html
 let ataqueDelJugador= document.getElementById("ataque-Jugador")// buscar un elemento id en html
 let ataqueDelEnemigo= document.getElementById("ataque-Enemigo")// buscar un elemento id en html

let nuevoAtaqueJugador = document.createElement("p")// crear nuevos elemtos de js a html
let nuevoAtaqueEnemigo = document.createElement("p")// crear nuevos elemtos de js a html

sectionMensajes.innerHTML = resultado
nuevoAtaqueJugador.innerHTML = ataqueJugador
nuevoAtaqueEnemigo.innerHTML = ataqueEnemigo



// let parrafo = document.createElement("p")// crear nuevos elemtos de js a html
// parrafo.innerHTML="tu personaje  ataco con " + ataqueJugador + ", y el enemigo con " + ataqueEnemigo + "-"+resultado

ataqueDelJugador.appendChild(nuevoAtaqueJugador) // agarrar elementos de js para aplicarselos a html
ataqueDelEnemigo.appendChild(nuevoAtaqueEnemigo) // agarrar elementos de js para aplicarselos a html

}

function crearMensajeFinal(resultadoFinal){
    let sectionMensajes= document.getElementById("resultado")// buscar un elemento id en html
    sectionMensajes.innerHTML = resultadoFinal
//    let parrafo = document.createElement("p")// crear nuevos elemtos de js a html
//    parrafo.innerHTML= resultadoFinal
//    sectionMensajes.appendChild(parrafo) // agarrar elementos de js para aplicarselos a html

   let botonhameja = document.getElementById("boton-hameja")// buscar un elemento id en html
   botonhameja.disabled = true
   let botonkaioken = document.getElementById("kaio ken")// buscar un elemento id en html
   botonkaioken.disabled = true
   let botonhakai =  document.getElementById("hakai")// buscar un elemento id en html
   botonhakai.disabled= true // bloquea boton

   let sectionreiniciar= document.getElementById("reiniciar")
   sectionreiniciar.style.display = "block"
   }
    
function aleatorio(min,max){
    return Math.floor(Math.random()*(max - min + 1)+ min ) // crear numeros aleatorios de 1 y 0
    }
    function reiniciarJuego(){
        location.reload() // reinica la pagina 
    }
    



// window.addEventListener("load" ,iniciarJuego) para llamar el js en la funcion iniciar juego
