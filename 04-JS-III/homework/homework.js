// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  // Solución 1
  // return array(0)
  // Opción 2
  return array.shift();
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  // Tiene también tiene 2 opciones de solución
  // Opción 1
  //return array[array.length - 1]
   // Opción 2
   return array.pop();
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  //Opción 1
 // var nuevoArray = [];
  //for (var i = 0 < array.length ; i++){
  //  nuevoArray.push(array [i] + 1)
  //}
  //return nuevoArray;
  //Opción 2
  var nuevoArray = [];
  array.map(function(elemento){
    nuevoArray.push(elemento + 1)
  })
  return nuevoArray;
  
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento)
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento)
  return array
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  return palabras.join(' ')
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  //Opción 1 (for tradicional)
  //for(var i = 0 ; i < array.length ; i++){
   // if(array[i] === elemento) return true;
  //else return false;
  //}
  //Opción 2 (incluedes)
  if(array.include(elemento))return true;
  else return false;
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  //Opción 1
  //var resultado = 0;
  //for(var i = 0 ; i < arrayOfNums.length ; i++){
  //  resultado = resultado + arrayOfNums[i]
  //}
  //return resultado;
  //Opción 2 (reduce simplificada)
  //let total = arrayOfNums.reduce((a, b) => a + b, 0);
  //return total;
  //Opción 3 (reduce completa)
  return arrayOfNums.reduce(function(suma, elemento){
    return suma = suma + elemento
  },0);
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  //Opción 1 (sin reutilizar la función de arriba)
  //var suma = 0;
  //for(var i = 0 ; i < resultadosTest.length ; i++){
  //  suma = suma + resultadosTest[i]
  //}
  //return suma / resultadosTest.length
  //Opición 2 (reutiliza la función de arriba)
  return agregarNumeros(resultadosTest)/ resultadosTest.length
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  //Opción 1
 // for(var i = 0 ; i < arrayOfNums.length ; i++){
   // if(arrayOfNums[i] > arrayOfNums[i + 1]) return arrayOfNums[i];
  //}
  //Opción 2 (forEach)
  //var max = 0;
  //arrayOfNums.forEach(function(elemento) {
   // if(max < elemento){
   //   max = elemento
   // }
  //});
  //return max;
//Opción 3 (math)
return Math.max(... arrayOfNums);
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  var multiplicación = 1;
  if(arguments.length === 0) return 0
  for(var i = 0 ; i < arguments.length ; i++){
    multiplicación = multiplicación * arguments[i];
  }
  return multiplicación;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  //Opción 1
  //var contador = 0
 // for(var i = 0 ; i < array.length ; i++){
   // if(array[i] > 18){
    //  contador = contador + 1;
   // }
  //}
  //return contador;
  //Opción 2
  let nuevo = array.filter((elemento) => elemento > 18)
  return nuevo.length;

}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí
  if(numeroDeDia === 1 || numeroDeDia === 7) return "Es fin de semana";
  else return "Es dia Laboral"  
  
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  //Opción 1
  //var nombre = 'clau'
  //console.log(nombre.charAt(2))
  //Opción 2
  numero = num.toString();
  if(num.charAr(0) === '9') return true;
  else return false;
  
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí 
  for(var i = 0 ; i < array.length ; i++){
    if(array[i] === array[i + 1]) return true;
    else return false;
  }
  
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var nuevoArray = [];
  for(var i = 0 ; i < array.length ; i++) {
    if(array[i] === "Enero" && array[i] === "Marzo" && array[i] === "Noviembre") {
    return nuevoArray;
  }}
 return "No se encuentran los meses pedidos"
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var array = [];
  for(var i = 0 ; i < array.length ; i ++){
    if(array[i] > 100){
      nuevoArray.push(array[i]);
    }
  }
  return nuevoArray;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var array = numero
  while(i < numero.length){
    if(i === 2){
      break;
      i++
    }
    return array
  }
  return "Se interrumpió la ejecución"
}

function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  let array = numero
  for (let i = 0; i < numero; i++){
    if(i === 5) continue;
    array += i + 2;
  }
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
