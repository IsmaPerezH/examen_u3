
    function mostrarMensaje() {
      const nombre = document.getElementById("nombre").value;
      const edad = document.getElementById("edad").value;
      const mensaje = document.getElementById("mensajeNombreEdad");

      if (nombre && edad) {
        mensaje.textContent = `Hola, ${nombre}. Tienes ${edad} años.`;
      } else {
        mensaje.textContent = "Por favor, llena ambos campos.";
      }
    }

    function evaluarTemperatura() {
      const temp = parseFloat(document.getElementById("temperatura").value);
      const mensaje = document.getElementById("mensajeTemperatura");

      if (isNaN(temp)) {
        mensaje.textContent = "Introduce una temperatura válida.";
        return;
      }

      if (temp < 15) {
        mensaje.textContent = "Día frío";
      } else if (temp <= 30) {
        mensaje.textContent = "Día templado";
      } else {
        mensaje.textContent = "Día caluroso";
      }
    }
