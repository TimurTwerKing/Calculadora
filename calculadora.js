// pantalla = screan
// botones = keys

const pantalla = document.querySelector(".screen");
const botones = document.querySelectorAll(".btn, .operator");

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonApretado = boton.value;  // Guardado del contenido del boton pulsado

        // Limpia la pantalla si se presiona 'C'
        if (boton.value === "C") {
            pantalla.value = "0";
            return;
        }

        // Borra el ultimo caracter o el error reseteando a "0"
        if (boton.value === "←") {
            if (pantalla.value.length === 1 || pantalla.value === "Syntax ERROR") {
                pantalla.value = "0";
            } else {
                pantalla.value = pantalla.value.slice(0, -1);
            }
            return;
        }

        // Da el resultado cuando se presiona '='
        if (boton.value === "=") {
            try {
                if (pantalla.value.includes("^")) {// Calcula la potencia
                    const partes = pantalla.value.split("^");
                    const base = parseFloat(partes[0]);
                    const exponente = parseFloat(partes[1]);
                    const resultado = Math.pow(base, exponente);
                    pantalla.value = resultado;
                    return;
                }
                pantalla.value = eval(pantalla.value);
            } catch {
                pantalla.value = "Syntax ERROR";
            }
            return;
        }

        // Agrega el valor del boton presionado a la pantalla
        if (pantalla.value === "0") {
            if (botonApretado === ".") {// Permite agregar decimal después del cero inicial
                pantalla.value += botonApretado;
            } else {
                pantalla.value = botonApretado;
            }
        } else {
            pantalla.value += botonApretado;
        }
    });
});