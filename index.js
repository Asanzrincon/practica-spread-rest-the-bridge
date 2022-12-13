// 1. EJERCICIOS DESTRUCTURING

// 1. Dado el siguiente objeto:
const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
  ];
//Extrae la empleada Ana completa
const [Luis, Ana, Andrea] = empleados;
console.log(Ana);
//Extrae el email del empleado Luis 
console.log(Luis.email);
// 2. Usa destructuracioón para intercambiar los valores de a y b

/* // Inicialmente
let a = 5;
let b = 3;

// Al final
let a = 3;
let b = 5; */

let a = 5;
let b = 3;

[b, a]  = [a, b];
console.log(a, b);

// 3. Dado el siguiente objeto:
const HIGH_TEMPERATURES = {
    yesterday: 30,
    today: 35,
    tomorrow: 32,
  };
// Cambiar las siguientes líneas para guardar mediante destructuración los valores de temperaturas en las variables maximaHoy y maximaManana
/* 
const maximaHoy = HIGH_TEMPERATURES.today;
const maximaManana = HIGH_TEMPERATURES.tomorrow;
console.log(maximaHoy);
console.log(maximaManana);
*/
const {yesterday, today, tomorrow} = HIGH_TEMPERATURES;
console.log(today);
console.log(tomorrow);

// 2. EJERCICIOS SPREAD/REST

// 1. Escribe una funcion llamada sumEveryOther que pueda recibir cualquier cantidad de numeros y devuelva la suma de todos los demás argumentos.

/* sumEveryOther(6, 8, 2, 3, 1); //20
sumEveryOther(11, 3, 12); //26 */

function sumEveryOther(...rest){
    let total = 0;

    for (let i = 0; i < rest.length; i++) {
      total += rest[i];
    }
    return total;
}

// 2. Escribe una funcion llamada addOnlyNums que pueda recibir cualquier número de argumentos incluyendo numeros y strings y retorne la suma solo de los números.

// addOnlyNums(1, "perro", 2, 4); //7

function addOnlyNums(...rest){
    let total = 0;
    for (let i = 0; i < rest.length; i++) {
        if (rest[i] > 0 || rest[i] < 0){
            total += rest[i];
        }
      }
    return total;
}

// ---- ¡Duda! ----

function addOnlyNums(...rest){
    let total = 0;
    for (let i = 0; i < rest.length; i++) {
        if (typeof rest[i] == 'number') {
            total += rest[i];
        }
      }
    return total;
}


// 3. Escribe una función llamada countTheArgs que pueda recibir cualquier número de argumentos y devuelva un número que indique cuántos argumentos ha recibido. 

function countTheArgs (...rest){
    return rest.length;
}

// 4. Escribe una función llamada combineTwoArrays que reciba dos array cómo argumentos y devuelva solo un array que combine los dos (usando spread operator).

function combineTwoArrays(arr1, arr2){
    return [...arr1, ...arr2];
}

// 5. Escriba una función llamada onlyUniques que acepte cualquier número de argumentos y devuelva un array de elementos únicos, sin repetidos.

function onlyUniques (...rest){
    return [...new Set(onlyUniques)];
}

// 6. Escriba una función llamada combineAllArrays que pueda recibir cualquier cantidad de arrays como argumentos y los combine todos en un solo array.

/* combineAllArrays([3, 6, 7, 8], [2, 7, 3, 1]); // [3, 6, 7, 8, 2, 7, 3, 1]
combineAllArrays([2, 7, 3, 1], [2, 7, 4, 12], [2, 44, 22, 7, 3, 1]); // [2, 7, 3, 1, 2, 7, 4, 12, 2, 44, 22, 7, 3, 1] */

function combineAllArrays(...arrays) {
    let result = [];
    arrays.forEach(array => {
        result.push(...array);
    });
    return result;
}

// 7. Escriba una función llamada sumAndSquare que reciba cualquier número de argumentos, los eleve al cuadrado y devuelva la suma.
    

function sumAndSquare(...rest){
    let total = 0;

    for (let i = 0; i < rest.length; i++) {
      total += Math.pow(rest[i], 2) ;
    }
    return total;
}
