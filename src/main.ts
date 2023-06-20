import "./style.css";

// Variabili - variables
let puntosTotales: number = 0;


// Elementi del DOM - elementos del DOM
/*const scoreElement: HTMLElement = document.getElementById('score');*/
const btnPedir = document.getElementById('btn_pedir');
const btnNuevaPartida = document.getElementById('btn_nueva_partida');
const btnPlantarse = document.getElementById('btn_plantarse');
const btnHistorial = document.getElementById('btn_historial');

// Funzioni - funciones

function dameNumeroAleatorio (): number{
  return Math.floor(Math.random() * 10) + 1;
}

function obtenerNumeroDeCarta (numeroaleatorio: number): number{
  return numeroaleatorio > 7 ? numeroaleatorio + 2 : numeroaleatorio;
}





function obtenerUrlCarta (carta: number): string {
  let imgUrl: string= 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas';
  switch (carta) {
    case 1:
      imgUrl+= '/copas/1_as-copas.jpg'
      break;
    case 2:
      imgUrl += '/copas/2_dos-copas.jpg';
      break;
    case 3:
      imgUrl += '/copas/3_tres-copas.jpg';
      break;
    case 4:
      imgUrl += '/copas/4_cuatro-copas.jpg';
      break;
    case 5:
      imgUrl += '/copas/5_cinco-copas.jpg';
      break;
    case 6:
      imgUrl += '/copas/6_seis-copas.jpg';
      break;
    case 7:
      imgUrl += '/copas/7_siete-copas.jpg';
      break;
    case 10:
      imgUrl += '/copas/10_sota-copas.jpg';
      break;
    case 11:
      imgUrl += '/copas/11_caballo-copas.jpg';
      break;
    case 12:
      imgUrl += '/copas/12_rey-copas.jpg';
      break;
    default:
      imgUrl += '/back.jpg';
      break;
  }

  return imgUrl
}

function mostrarCarta (carta: number) {
  const urlCarta = obtenerUrlCarta(carta);
  const elementoImg = document.getElementById("card-img");
  if (elementoImg && elementoImg instanceof HTMLImageElement){
    elementoImg.src = urlCarta;
  }
}

function dameCarta (): void {
  const numeroAleatorio = dameNumeroAleatorio();
  const carta = obtenerNumeroDeCarta(numeroAleatorio);
  mostrarCarta(carta);
  const puntos = damePuntuacion(carta);
  sumaPuntuacion(puntos);
  finalDeLaMano()
  
}

function invocarBotones (valorHistorial: boolean, valorNuevaPartida: boolean, valorPedirCarta: boolean, valorPlantarse: boolean) {
  deshabilitarBotonHistorial(valorHistorial);
  deshabilitarBotonNuevaPartida(valorNuevaPartida);
  deshabilitarBotonPedirCarta(valorPedirCarta);
  deshabilitarBotonPlantarse(valorPlantarse);
}


function nuevaPartida () {
  puntosTotales = 0;
  mostrarMensaje ('');
  mostrarCarta(0);
  invocarBotones(true, false, false, false);

}

function plantarse () {
mostrarResultadoMeèPlantado();
invocarBotones (false, false, true, false);
}

function mostrarMensaje (mensaje: string) {
  const elementoPuntuacion = document.getElementById("score");
  if (elementoPuntuacion !== null && elementoPuntuacion !== undefined && elementoPuntuacion instanceof HTMLDivElement){
    elementoPuntuacion.innerText = mensaje
  }

}

function revisarMano () {
  if (puntosTotales === 7.5 ) {
    ganarPartida()
  }
  if ( puntosTotales > 7.5 ) {
   gameOver();
  }
}

function ganarPartida () {
  mostrarMensaje (`¡ Lo has clavado! ¡Enhorabuena ! ${puntosTotales}`);
  invocarBotones (true, false, true, true)
}

function gameOver () {
  mostrarMensaje (`Game Over! ${puntosTotales}`);
  invocarBotones(true, false, true, true);
}

function finalDeLaMano () {
  mostrarMensaje(`${puntosTotales}`)
  revisarMano()
}

function damePuntuacion (carta: number){
  return carta <= 7 ? carta : 0.5
}

function sumaPuntuacion (puntos: number): void {
  puntosTotales += puntos;
}


function mostrarResultadoMeèPlantado (): void {
  if (puntosTotales < 4) {
    mostrarMensaje(`¡ Has sido muy conservador! ¡Enhorabuena ! ${puntosTotales}`);
  } else if (puntosTotales >= 4 &&  puntosTotales < 6) {
    mostrarMensaje(`Te ha entrado el canguelo eh? ${puntosTotales}`);
  } else if (puntosTotales >= 6 && puntosTotales <= 7) {
    mostrarMensaje(`Casi casi... ${puntosTotales}`);
  } else if (puntosTotales === 7.5) {
    mostrarMensaje('¡Lo has clavado! ¡Enhorabuena!');
  }
}

function historial () {
  const numeroAleatorio = dameNumeroAleatorio();
  const carta = obtenerNumeroDeCarta(numeroAleatorio);
  mostrarCarta(carta);
  const puntos=damePuntuacion(carta);
  sumaPuntuacion(puntos);
  monstrarMensajeFuturo(puntosTotales);
  invocarBotones (true, false, false, false);
}

function monstrarMensajeFuturo (puntosTotales: number) {
  if (puntosTotales === 7.5) {
    mostrarMensaje(`Habrías ganado el juego ${puntosTotales}`)
  }
  if (puntosTotales <7.5) {
    mostrarMensaje(`No habrías ganado pero estarías cerca de ganar ${puntosTotales}`)
  } else {
  mostrarMensaje(`Habrias perdido! ${puntosTotales}`)
  }

}

function deshabilitarBotonPedirCarta (estadeshabilitado: boolean) {
const botonPedir = document.getElementById("btn_pedir");
if (botonPedir !== null && botonPedir !== undefined && botonPedir instanceof HTMLButtonElement){
  botonPedir.disabled = estadeshabilitado
}
}

function deshabilitarBotonNuevaPartida (estadeshabilitado: boolean) {
  const botonNuevaPartida = document.getElementById ("btn_nueva_partida");
  if (botonNuevaPartida !== null && botonNuevaPartida !== undefined && botonNuevaPartida instanceof HTMLButtonElement){
    botonNuevaPartida.disabled = estadeshabilitado
  }
}

function deshabilitarBotonPlantarse (estadeshabilitado: boolean ) {
  const botonPlantarse = document.getElementById ("btn_plantarse");
  if (botonPlantarse !== null && botonPlantarse !== undefined && botonPlantarse instanceof HTMLButtonElement){
    botonPlantarse.disabled = estadeshabilitado
  }
}

function deshabilitarBotonHistorial (estadeshabilitado: boolean) {
const botonHistorial = document.getElementById("btn_historial");
if (botonHistorial !== null && botonHistorial !== undefined && botonHistorial instanceof HTMLButtonElement){
  botonHistorial.disabled = estadeshabilitado
  }
}



// Event listeners per gestire eventi nel DOM - event listeners para manejar eventos en el DOM


if (btnPedir !== null && btnPedir !== undefined && btnPedir instanceof HTMLButtonElement){
  btnPedir.addEventListener('click', dameCarta);
}

if (btnNuevaPartida !== null && btnNuevaPartida !== undefined && btnNuevaPartida instanceof HTMLButtonElement){
  btnNuevaPartida.addEventListener('click', nuevaPartida);
}

if (btnPlantarse !== null && btnPlantarse !== undefined && btnPlantarse instanceof HTMLButtonElement){
  btnPlantarse.addEventListener('click', plantarse);
}

if (btnHistorial !== null && btnHistorial !== undefined && btnHistorial instanceof HTMLButtonElement){
  btnHistorial.addEventListener('click', historial);
}
