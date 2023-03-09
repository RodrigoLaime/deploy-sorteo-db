function agregarNumeroSiSeRepite(arreglo, nombre) {
  let objetoEncontrado = false;
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i].nombre === nombre) {
      arreglo[i].numero += 1;
      objetoEncontrado = true;
      break;
    }
  }
  if (!objetoEncontrado) {
    arreglo.push({ nombre: nombre, numero: 1 });
  }
  return arreglo;
}

let arreglo = [
  { nombre: 'Juan', numero: 0 },
  { nombre: 'María', numero: 2 },
  { nombre: 'Juan', numero: 3 }
];
arreglo = agregarNumeroSiSeRepite(arreglo, 'Juan');
console.log(arreglo);



const s = []
function suma(d) {
  d++;
  console.log(d)
}
suma(s)