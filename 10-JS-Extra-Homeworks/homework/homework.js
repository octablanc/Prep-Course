// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto) {
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí

  return Object.entries(objeto);
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí

  var arrayString = Array.from(string);
  var obj = {};

  arrayString.forEach(valor => {
    obj[valor] = arrayString.reduce((acc, valorC) => {
      if (valorC === valor)
        acc += 1;
      return acc;
    }, 0);
  });

  return obj;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí


  var stringNuevo = '';

  for (var key in s) {
    if (s[key] === s[key].toUpperCase())
      stringNuevo += s[key];
  }

  for (var key in s) {
    if (s[key] === s[key].toLowerCase())
      stringNuevo += s[key];
  }

  return stringNuevo;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

  var nuevaString = "";
  var strArray = str.split(" ");

  strArray.forEach((valor, index) => {
    nuevaString += Array.from(valor).reverse().join("");
    if (index !== strArray.length - 1)
      nuevaString += " ";
  })

  return nuevaString;
}


function capicua(numero) {
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí

  var arregloDeNumero = Array.from(numero.toString());
  for (var i = 0; i < arregloDeNumero.length - i; i++)
    if (arregloDeNumero[i] != arregloDeNumero[(arregloDeNumero.length - 1) - i])
      return "No es capicua";

  return "Es capicua";
}


function deleteAbc(cadena) {
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí


  return cadena.replace("a", "").replace("b", "").replace("c", "");
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "ares", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

  for (var i = 0; i < arr.length; i++) {
    var min = i;
    for (var j = i+1; j< arr.length; j++) 
      if (arr[j].length < arr[min].length) 
        min = j;
    
    var aux = arr[i];
    arr[i] = arr[min];
    arr[min] = aux;
  }

  return arr;
}


function buscoInterseccion(arreglo1, arreglo2) {
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  

  return arreglo1.filter( valor => arreglo2.includes(valor));
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  deObjetoAmatriz,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};

