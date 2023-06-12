import "./style.css";

// Variabili - variables
let score: number = 0;


// Elementi del DOM - elementos del DOM
const scoreElement: HTMLElement = document.getElementById('score');
const btnPedir: HTMLButtonElement = document.getElementById('btn-pedir');
const btnPlantarse: HTMLButtonElement = document.getElementById('btn-plantarse');
const btnNuevaPartida: HTMLButtonElement = document.getElementById('btn-nueva-partida');
const btnHistorial: HTMLButtonElement = document.getElementById('btn-historial');

// Funzioni - funciones
function muestraPuntuacion(): void {
  scoreElement.textContent = `Puntuación: ${score}`;
}

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
      imgUrl+= '/1_as-copas.jpg'
      break;
    case 2:
      imgUrl += '/2_dos-copas.jpg';
      break;
    case 3:
      imgUrl += '/3_tres-copas.jpg';
      break;
    case 4:
      imgUrl += '/4_cuatro-copas.jpg';
      break;
    case 5:
      imgUrl += '/5_cinco-copas.jpg';
      break;
    case 6:
      imgUrl += '/6_seis-copas.jpg';
      break;
    case 7:
      imgUrl += '/7_siete-copas.jpg';
      break;
    case 10:
      imgUrl += '/10_sota-copas.jpg';
      break;
    case 11:
      imgUrl += '/11_caballo-copas.jpg';
      break;
    case 12:
      imgUrl += '/12_rey-copas.jpg';
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
}



function damePuntuacion (carta: number){
  return carta <= 7 ? carta : 0.5
}

function sumaPuntuacion(puntos: number): void {
  score += puntos;
}

function win (){
  if (score == 7.5 && scoreElement!== null) {
    
    scoreElement.innerHTML = "Great: You Win!!!";
  }
}

function lose (){
  if (score > 7.5 && scoreElement!== null) {
    scoreElement.innerHTML = "You Lose - Game Over";
  }
}

function gameOverMessage(): void {
  btnPedir.disabled = true;
  btnPlantarse.disabled = true;
  btnNuevaPartida.disabled = false;
  btnHistorial.disabled = false;
  alert('Game Over');
}

function checkGameOver(): void {
  if (score > 7.5) {
    gameOverMessage();
  }
}

function evaluarResultado(): void {
  if (score < 4) {
    alert('Has sido muy conservador');
  } else if (score < 6) {
    alert('Te ha entrado el canguelo eh?');
  } else if (score <= 7) {
    alert('Casi casí...');
  } else if (score === 7.5) {
    alert('¡Lo has clavado! ¡Enhorabuena!');
  }
}

// Event listeners per gestire eventi nel DOM - event listeners para manejar eventos en el DOM
document.addEventListener('DOMContentLoaded', function() {
  muestraPuntuacion();
});

if (btnPedir!== null && btnPedir!== undefined && btnPedir instanceof HTMLButtonElement){
  btnPedir.addEventListener('click', function() {
 
    /*console.log('Carta:', carta);
    mostrarCarta(carta);
    sumaPuntuacion(carta);
    checkGameOver();*/
  });
}


if (btnPlantarse!== null && btnPlantarse!== undefined && btnPlantarse instanceof HTMLButtonElement){
  btnPlantarse.addEventListener('click', function() {
  evaluarResultado();
  gameOverMessage();
});
}

if (btnNuevaPartida!== null && btnNuevaPartida!== undefined && btnNuevaPartida instanceof HTMLButtonElement){
  btnNuevaPartida.addEventListener('click', function() {
  score = 0;
  muestraPuntuacion();
  cardImg.src = 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg';
  btnPedir.disabled = false;
  btnPlantarse.disabled = false;
  btnNuevaPartida.disabled = true;
  btnHistorial.disabled = true;
});
}
  /*gameOver = false;*/
  

if (btnHistorial!== null && btnHistorial!== undefined && btnHistorial instanceof HTMLButtonElement){
  btnHistorial.addEventListener('click', function() {
  evaluarResultado();
});
}