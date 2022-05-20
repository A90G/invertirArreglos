/*Almacene en un arreglo de tamaño N los números ingresados
por el usuario
La dimensión N también es ingresada por el usuario
Muestre los números del arreglo pero del último al primero
*/
let dimensionArreglo: number = Number(
  prompt(`Ingrese la dimensión del arreglo:`)
);
let arreglo: number[] = new Array(dimensionArreglo);
let indice: number;

for (indice = 0; indice < dimensionArreglo; indice++) {
  arreglo[indice] = Number(
    prompt(`Indique el nro que va en la posición ${indice}:`)
  );
  console.log(`El número en la posición ${indice} es: ${arreglo[indice]}`);
}
for (indice = dimensionArreglo - 1; indice >= 0; indice--) {
  console.log(
    `Los números ingresados del último al primero son: posición ${indice} "${arreglo[indice]}"`
  );
}