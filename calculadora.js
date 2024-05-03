// pantalla = screan
// botones = keys

const pantalla = document.querySelector(".screen");
const botones = document.querySelectorAll(".btn, .operator");

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonApretado = boton.value;  // Usar value ya que es un elemento input

        // Limpia la pantalla si se presiona 'C'
        if (boton.value === "C") {
            pantalla.value = "0";
            return;
        }

        // Borra el último carácter o muestra '0' si es necesario
        if (boton.value === "←") {
            if (pantalla.value.length === 1 || pantalla.value === "Syntax ERROR") {
                pantalla.value = "0";
            } else {
                pantalla.value = pantalla.value.slice(0, -1);
            }
            return;
        }

        // Evalúa la expresión cuando se presiona '='
        if (boton.value === "=") {
            try {
                pantalla.value = eval(pantalla.value);
            } catch {
                pantalla.value = "Syntax ERROR";
            }
            return;
        }

        // Agrega el valor del botón presionado a la pantalla
        if (pantalla.value === "0") {
            if (botonApretado === ".") {
                // Permite agregar decimal después del cero inicial
                pantalla.value += botonApretado;
            } else {
                pantalla.value = botonApretado;
            }
        } else {
            pantalla.value += botonApretado;
        }

    });
});










































