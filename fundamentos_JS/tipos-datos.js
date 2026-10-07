let nombre = 'Juan'; // Variable de tipo string
let cantidad = 10; // Variable de tipo entero o INT
let precio = 14800.58; // Variable de tipo decimal o FLOAT
let verdadero = true; // Variable de tipo booleano
let falso = false; // Variable de tipo booleano
let nulo = null; // Variable de tipo null

// Formas de concatenar o juntar variables de diferentes tipos de datos
console.log("==== Tipos de Datos ====");
console.log(nombre + " " + cantidad + " " + precio + " " + verdadero + " " + falso + " " + nulo);
console.log(nombre, " ", cantidad, " ", precio, " ", verdadero, " ", falso, " ", nulo);
console.log(`su nombre es: ${nombre}, tiene en este momento ${cantidad} centavos, el precio es de : ${precio}, su apellido de verdad es: ${verdadero} y todo esto es ${falso} porque los datos son ${nulo}`);