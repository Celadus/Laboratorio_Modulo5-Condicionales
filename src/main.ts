import "./style.css";

// Variabili - variables
let score: number = 0;
let gameOver: boolean = false;

// Elementi del DOM - elementos del DOM
const scoreElement: HTMLElement = document.getElementById('score')!;
const cardImg: HTMLImageElement = document.getElementById('card-img') as HTMLImageElement;
const btnPedir: HTMLButtonElement = document.getElementById('btn-pedir') as HTMLButtonElement;
const btnPlantarse: HTMLButtonElement = document.getElementById('btn-plantarse') as HTMLButtonElement;
const btnNuevaPartida: HTMLButtonElement = document.getElementById('btn-nueva-partida') as HTMLButtonElement;
const btnHistorial: HTMLButtonElement = document.getElementById('btn-historial') as HTMLButtonElement;

// Funzioni - funciones
function muestraPuntuacion(): void {
  scoreElement.textContent = `Puntuación: ${score}`;
}

function dameCarta(): number {
  if (gameOver) return 0;

  const carta: number = Math.floor(Math.random() * 10) + 1;
  return carta > 7 ? carta + 2 : carta;
}

function mostrarCarta(carta: number): void {
  let imgUrl: string;
  switch (carta) {
    case 1:
      imgUrl = 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg';
      break;
    case 2:
      imgUrl = 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg';
      break;
    case 3:
      imgUrl = 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg';
      break;
    case 4:
      imgUrl = 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg';
      break;
    case 5:
      imgUrl = 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg';
      break;
    case 6:
      imgUrl = 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg';
      break;
    case 7:
      imgUrl = 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg';
      break;
    case 10:
      imgUrl = 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg';
      break;
    case 11:
      imgUrl = 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg';
      break;
    case 12:
      imgUrl = 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg';
      break;
    default:
      imgUrl = 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg';
      break;
  }

  cardImg.src = imgUrl;
}

function sumaPuntuacion(carta: number): void {
  score += carta;
  muestraPuntuacion();
}

function gameOverMessage(): void {
  gameOver = true;
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

btnPedir.addEventListener('click', function() {
  const carta: number = dameCarta();
  console.log('Carta:', carta);
  mostrarCarta(carta);
  sumaPuntuacion(carta);
  checkGameOver();
});

btnPlantarse.addEventListener('click', function() {
  evaluarResultado();
  gameOverMessage();
});

btnNuevaPartida.addEventListener('click', function() {
  score = 0;
  gameOver = false;
  muestraPuntuacion();
  cardImg.src = 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg';
  btnPedir.disabled = false;
  btnPlantarse.disabled = false;
  btnNuevaPartida.disabled = true;
  btnHistorial.disabled = true;
});

btnHistorial.addEventListener('click', function() {
  evaluarResultado();
});
