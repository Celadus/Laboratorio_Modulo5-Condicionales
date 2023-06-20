import "./style.css";

// Variabili - variables
let score: number = 0;


// Elementi del DOM - elementos del DOM
/*const scoreElement: HTMLElement = document.getElementById('score');*/
const btnPedir = document.getElementById('btn_pedir');
const btnNuevaPartida = document.getElementById('btn_nueva_partida');
const btnPlantarse = document.getElementById('btn_plantarse');
const btnHistorial = document.getElementById('btn_historial');

// Funzioni - funciones

function damenumeroaleatorio(): number{
  return Math.floor(Math.random() * 10) + 1;
}

function obtenernumerodecarta(numeroaleatorio:number): number{
  return numeroaleatorio > 7 ? numeroaleatorio + 2 : numeroaleatorio;
}





function obtenerurlcarta(carta: number): string {
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

function mostrarCarta(carta:number){
  const urlcarta=obtenerurlcarta(carta);
  const elementoimg=document.getElementById("card-img");
  if (elementoimg && elementoimg instanceof HTMLImageElement){
    elementoimg.src = urlcarta;
  }
}

function dameCarta(): void {
  const numeroaleatorio=damenumeroaleatorio();
  const carta=obtenernumerodecarta(numeroaleatorio);
  mostrarCarta(carta);
  const puntos=damePuntuacion(carta);
  sumaPuntuacion(puntos);
  finaldelamano()
  
}

function nuevapartida(){
  score = 0;
  mostrarmensaje ('')
  mostrarCarta(0)
  deshabilitarBotonHistorial(false);
  deshabilitarBotonNuevaPartida(true);
  deshabilitarBotonPedirCarta(false);
  deshabilitarBotonPlantarse(true);

}

function plantarse(){
mostrarresultadomeèplantado()
deshabilitarBotonPedirCarta(true);
deshabilitarBotonPlantarse(true);
deshabilitarBotonHistorial(false);
}

function mostrarmensaje(mensaje: string){
  const elementopuntuacion = document.getElementById("score");
  if (elementopuntuacion !== null && elementopuntuacion !== undefined && elementopuntuacion instanceof HTMLDivElement){
    elementopuntuacion.innerText = mensaje
  }

}

function revisarmano(){
  if (score === 7.5 ) {
    ganarPartida()
  }
  if ( score > 7.5 ) {
   gameOver();
  }
}

function ganarPartida (){
  mostrarmensaje (`¡ Lo has clavado! ¡Enhorabuena ! ${score}`);
  deshabilitarBotonPedirCarta (true);
  deshabilitarBotonNuevaPartida(false);
  deshabilitarBotonPlantarse (true);
  deshabilitarBotonHistorial (true);
}

function gameOver (){
  mostrarmensaje (`Game Over! ${score}`);
  deshabilitarBotonPedirCarta (true);
  deshabilitarBotonNuevaPartida(false);
  deshabilitarBotonPlantarse (true);
}

function finaldelamano(){
  mostrarmensaje(`${score}`)
  revisarmano()
}

function damePuntuacion (carta: number){
  return carta <= 7 ? carta : 0.5
}

function sumaPuntuacion(puntos: number): void {
  score += puntos;
}


function mostrarresultadomeèplantado(): void {
  if (score < 4) {
    mostrarmensaje(`¡ Has sido muy conservador! ¡Enhorabuena ! ${score}`);
  } else if (score < 6) {
    mostrarmensaje(`Te ha entrado el canguelo eh? ${score}`);
  } else if (score <= 7) {
    mostrarmensaje(`Casi casi... ${score}`);
  } else if (score <= 7) {
  } else if (score === 7.5) {
    mostrarmensaje('¡Lo has clavado! ¡Enhorabuena!');
  }
}

function historial(){
  const numeroaleatorio=damenumeroaleatorio();
  const carta=obtenernumerodecarta(numeroaleatorio);
  mostrarCarta(carta);
  const puntos=damePuntuacion(carta);
  sumaPuntuacion(puntos);
  monstrarmensajefuturo(score);
  deshabilitarBotonNuevaPartida (false);
  deshabilitarBotonPedirCarta(false);
  deshabilitarBotonHistorial(true);
  deshabilitarBotonPlantarse(false);

}

function monstrarmensajefuturo (score : number) {
  if (score === 7.5) {
    mostrarmensaje(`Habrías ganado el juego ${score}`)
  }
  if (score <7.5) {
    mostrarmensaje(`No habrías ganado pero estarías cerca de ganar ${score}`)
  } else {
  mostrarmensaje(`Habrias perdido! ${score}`)
  }

}

function deshabilitarBotonPedirCarta (estadeshabilitado : boolean) {
const botonPedir = document.getElementById("btn_pedir");
if (botonPedir !== null && botonPedir !== undefined && botonPedir instanceof HTMLButtonElement){
  botonPedir.disabled = estadeshabilitado
}
}

function deshabilitarBotonNuevaPartida (estadeshabilitado : boolean) {
  const botonNuevaPartida = document.getElementById ("btn_nueva_partida");
  if (botonNuevaPartida !== null && botonNuevaPartida !== undefined && botonNuevaPartida instanceof HTMLButtonElement){
    botonNuevaPartida.disabled = estadeshabilitado
  }
}

function deshabilitarBotonPlantarse (estadeshabilitado : boolean ) {
  const botonPlantarse = document.getElementById ("btn_plantarse");
  if (botonPlantarse !== null && botonPlantarse !== undefined && botonPlantarse instanceof HTMLButtonElement){
    botonPlantarse.disabled = estadeshabilitado
  }
}

function deshabilitarBotonHistorial (estadeshabilitado : boolean) {
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
  btnNuevaPartida.addEventListener('click', nuevapartida);
}

if (btnPlantarse !== null && btnPlantarse !== undefined && btnPlantarse instanceof HTMLButtonElement){
  btnPlantarse.addEventListener('click', plantarse);
}



if (btnHistorial !== null && btnHistorial !== undefined && btnHistorial instanceof HTMLButtonElement){
  btnHistorial.addEventListener('click', historial);
}