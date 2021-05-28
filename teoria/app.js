//Arrays

/*
Sintaxis
-Este tipo de dato nos permite guardar múltiples valores en una sola variable
-Podemos ver este tipo de datos como una colección
-La forma de crear un array es utilizando los corchetes y separar los valores utilzando comas

-La coma es el separador de elementos dentro de un array
-Si declaro el array con let puedo modificarlo
*/

const vacio = []; //podemos declarar un arreglo vacio
const frutas = ["manzada", "naranja", "platano", "pera", "mango"]; //strings
const edades = [1, 2, 3, 4, 5, 10, 8]; //numeros
const booleanos = [true, true, false, true]; //booleanos

//Arrays almacena strings, numbers y booleanos
//Dentro de los corchetes van todos los elementos del array


/*
Indice:
-Accede a los elementos de un array
-Es la posicion en la que se encuentra el elemento y se cuenta desde 0

-Si queremos acceder a "platano" del arrays frutas debemos decir:



*/

//Ejemplo:
console.log(frutas[2]) 



/*
Reemplazar o agregar elementos:
-Para poder añadir elementos tenemos el metodo push
la estructura agrega un elemento al final de la lista de esta forma:

*/

//Ejemplo:

frutas.push("Fresa", "Naranja", "Melón")
edades.push(36)
console.log(frutas)
console.log(edades)

/*
Para agregar al principio se usa el metodo unshift
-Agrega al principio de la lista de los elementos dentro de un array

*/

//Ejemplo:
frutas.unshift("Coco", "Uvas", "Moras")
console.log("Frutas unshift", frutas);

/*
Array tienen la propiedad length (Inicia en 1) (Longitud del arreglo)
length = se cuentan desde el 1
las posiciones dentro del array = se cuentan desde 0

*/

//Ejemplo:
const ultimoElemento = frutas[frutas.length -1] //nos da el elemento Melon porque es el ultimo elemento del arreglo
console.log(ultimoElemento)

/*
ciclo for:
-Deberia tener un inicializador (i)
-Se ejecuta la expresión de iniciación expresiónInicial, si existe. Esta expresión normalmente inicia uno o más contadores de bucle, pero la sintaxis permite una expresión de cualquier grado de complejidad. 
Esta expresión también puede declarar variables.
-el bucle se repita según cuantos elementos tiene el arreglo
- ++ significa que en cada vuelta del bucle se incrementa 1

*/

//Ejemplo:
const numerosArrays = [23, 24, 3, 25, 8];
//numerosArray.length va a ser igual a 5 elementos

//Visto desde condicionales:
const obtenerMenor = (numeros) => {
    let menor = Infinity;
    for (let i=0; i < numeros.length; i++){
      if(numeros[i]<menor){
       menor = numeros[i];
      }
    }
    return menor;
  }
  
    