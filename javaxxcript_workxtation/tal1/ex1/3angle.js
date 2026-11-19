// ================================================================
// EJERCICIO 1 - ENCONTRAR EL ÁREA DE UN TRIÁNGULO
// Leer la base y la altura y hallar el área.
// Área de un triángulo = (b*h)/2

// Después del getElementById va el mísmo ID que pongas en la estructura HTML
// Los inputs son los que van despues de declarar con const o con var
const alturaTriangulo = document.getElementById("altura");
const baseTriangulo = document.getElementById("base");
const area = document.getElementById("resultado");

function calcular() {
    // Esto es pa que si falta una de las 2 variables eso no se calcule
    if (alturaTriangulo.value === " " || baseTriangulo.value === " ") {
        area.textContent = "Escribe la base y la altura del triángulo"
        return;
    }

    // El Number() convierte en número lo que se escriba en los input
    // Porque antes eran considerados texto
    const altura = Number(alturaTriangulo.value);
    const base = Number(baseTriangulo.value);

    // Ya podes hacer el cálculo tranquilo
    const areaTriangulo = (base * altura) / 2;

    // Y mostrar el área con orgullo al usuario
    area.innerHTML =
    "El área del triángulo es: <b>" + areaTriangulo + "</b><br>"
    // Btw, innerHTML sirve para modificar texto en formate HTML y que el navegador sepa que está en HTML
}

// Esto es pa que cada vez que el usuario introduzca un valor en cualquier inputs eso se vuelva a calcular
alturaTriangulo.addEventListener("input", calcular);
baseTriangulo.addEventListener("input", calcular);