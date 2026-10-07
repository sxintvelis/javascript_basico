let a, b;
let c, d;

let suma, resta, mult, div, residuo, potencia;

//obtener los datos a través del usuario
a = prompt("Ingrese un número: ");
b = prompt("Ingrese otro número: ");

//Resultados de las operaciones
suma = Number(a) + Number(b); //Aquí la operación da un error debido a que se concatenan los datos
document.write("La suma es: ", suma, "<br>");
console.log("La suma es: ", suma);

resta = Number(a) - Number(b);
document.write("La resta es: ", resta, "<br>");
console.log("La resta es: ", resta);

mult = a * b;
document.write("La multiplicación es: ", mult, "<br>");
console.log("La multiplicación es: ", mult);

residuo = a % b;
document.write("El residuo es: ", residuo, "<br>");
console.log("El residuo es: ", residuo);

div = a / b;
document.write("La división es: ", div, "<br>");
console.log("La división es: ", div);

potencia = a ** b;
document.write("La potencia es: ", potencia, "<br>");
console.log("La potencia es: ", potencia);


//obtenemos los datos a través del usuario
c = parseInt(prompt("Ingrese un número: "));
d = parseInt(prompt("Ingrese otro número: "));

suma = c + d;
resta = c - d;
mult = c * d;
residuo = c % d;
div = c / d;
potencia = c ** d;

document.writeln("Los resultados de las operaciones con parseInt son: ",
    "<br>",
    "Suma: ", suma, "<br>",
    "<br>",
    "Resta: ", resta, "<br>",
    "<br>",
    "Multiplicación: ", mult, "<br>",
    "<br>",
    "Residuo: ", residuo, "<br>",
    "<br>",
    "División: ", div, "<br>",
    "<br>",
    "Potencia: ", potencia, "<br>");

console.log("Las operaciones resueltas son: ",
    "Suma: ", suma,
    "Resta: ", resta,
    "Multiplicación: ", mult,
    "División: ", div,
    "Residuo: ", residuo,
    "Potencia: ", potencia);
