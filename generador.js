const round = document.querySelector('#round');

const millar1 = document.querySelector('#millar1');
const centena1 = document.querySelector('#centena1');
const decena1 = document.querySelector('#decena1');
const unidad1 = document.querySelector('#unidad1');

const millar2 = document.querySelector('#millar2');
const centena2 = document.querySelector('#centena2');
const decena2 = document.querySelector('#decena2');
const unidad2 = document.querySelector('#unidad2');

const millar3 = document.querySelector('#millar3');
const centena3 = document.querySelector('#centena3');
const decena3 = document.querySelector('#decena3');
const unidad3 = document.querySelector('#unidad3');

round.addEventListener('click', () => {
  millar1.innerHTML = crearNumeroRandom();
  centena1.innerHTML = crearNumeroRandom();
  decena1.innerHTML = crearNumeroRandom();
  unidad1.innerHTML = crearNumeroRandom();

  millar2.innerHTML = crearNumeroRandom();
  centena2.innerHTML = crearNumeroRandom();
  decena2.innerHTML = crearNumeroRandom();
  unidad2.innerHTML = crearNumeroRandom();
})

crearNumeroRandom = () => {
  return Math.floor(Math.random() * 9) + 1;
}
