const round = document.querySelector('#round');
const verificar = document.querySelector('#verificar');

const unidad1 = document.querySelector('#unidad1');
const unidad2 = document.querySelector('#unidad2');


let contador = 1;

round.addEventListener('click', () => {

  console.log(`Ronda: ${contador}`);

  if (contador === 1) {
    unidad2.innerHTML = crearNumeroRandom1();
    unidad1.innerHTML = crearNumeroRandom1();
  } else if (contador === 2) {
    unidad2.innerHTML = crearNumeroRandom2();
    unidad1.innerHTML = crearNumeroRandom2();
  } else if (contador === 3) {
    unidad2.innerHTML = crearNumeroRandom3();
    unidad1.innerHTML = crearNumeroRandom3();
  } else if (contador === 4) {
    unidad2.innerHTML = crearNumeroRandom4();
    unidad1.innerHTML = crearNumeroRandom4();
  }

  resultado();
  console.log(resultado());

})

verificar.addEventListener('click', () => {
  if (resultado() == respuesta.value) {
    console.log('Correcto');
    contador++
  } else {
    console.log('Incorrecto');
  }
});

crearNumeroRandom1 = () => {
  return Math.floor(Math.random() * 9) + 1;
}
crearNumeroRandom2 = () => {
  return Math.floor(Math.random() * 99) + 1;
}
crearNumeroRandom3 = () => {
  return Math.floor(Math.random() * 999) + 1;
}
crearNumeroRandom4 = () => {
  return Math.floor(Math.random() * 9999) + 1;
}

resultado = (a, b) => {
  a = Number(unidad1.innerHTML);
  b = Number(unidad2.innerHTML);
  return a + b;
}
