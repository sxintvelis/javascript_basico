// ===========================================
// EJERCICIO 2 - SUMA 3 VALORES
// Leer 3 valores y sumarlos
// ===========================================

const inputUno = document.getElementById("valorUno");
const inputDos = document.getElementById("valorDos");
const inputTres = document.getElementById("valorTres");
const cajaSuma = document.getElementById("resultado");

function calcular () {
    if (inputUno.value === " " || inputDos.value === " " || inputTres.value === " ") {
        cajaSuma.textContent = "Escribe los 3 valores";
        return;
    }

    const valorUno = Number(inputUno.value);
    const valorDos = Number(inputDos.value);
    const valorTres = Number(inputTres.value);

    const sumaNum = valorUno + valorDos + valorTres;

    cajaSuma.innerHTML =
    "Suma de los 3 valores: <b>" + sumaNum + "</b><br>";
}

inputUno.addEventListener("input", calcular);
inputDos.addEventListener("input", calcular);
inputTres.addEventListener("input", calcular);