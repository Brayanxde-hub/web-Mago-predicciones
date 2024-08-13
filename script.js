function preguntar() {
    var pregunta = document.getElementById('preguntaEntrada');
    var respuestaElemento = document.getElementById('respuestaMagica');

    var preguntaTexto = pregunta.value.trim();
    if (preguntaTexto.length === 0) {
        alert('Por favor, escriba una pregunta');
        return;
    }

    var respuestas = [
        "Sí",
        "No",
        "Tal vez...",
        "Es probable...",
        "Definitivamente no.",
        "Pregúntame otra vez."
    ];

    respuestaElemento.textContent = 'Estoy viendo el futuro...';
    respuestaElemento.style.backgroundColor = '#2a2e38'; // Color inicial mientras se "calcula" la respuesta
    respuestaElemento.style.color = '#fff';

    setTimeout(function () {
        var randomIndex = Math.floor(Math.random() * respuestas.length);
        var randomRespuesta = respuestas[randomIndex];
        respuestaElemento.textContent = randomRespuesta;

        // Cambiar el color de fondo según la respuesta
        if (randomRespuesta === "Sí") {
            respuestaElemento.style.backgroundColor = "green";
        } else if (randomRespuesta === "No") {
            respuestaElemento.style.backgroundColor = "red";
        } else {
            respuestaElemento.style.backgroundColor = "#4b6584"; // Color para otras respuestas
        }

        // Limpiar el campo de texto
        pregunta.value = '';
    }, 1500);
}
