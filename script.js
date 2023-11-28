var mensajes = [];

function enviarMensaje() {
    var mensajeInput = document.getElementById("mensajeInput");
    var mensaje = mensajeInput.value;

    if (mensaje.trim() !== "") {
        // Obtener la hora actual
        var fecha = new Date();
        var hora = fecha.getHours();
        var minutos = fecha.getMinutes();

        // Formatear la hora
        var horaFormateada = (hora < 10 ? "0" : "") + hora + ":" + (minutos < 10 ? "0" : "") + minutos;

        // Agregar el mensaje con remitente y hora
        mensajes.push({
            remitente: "Usuario",
            contenido: mensaje,
            hora: horaFormateada
        });

        mensajeInput.value = "";
        actualizarChat();
    }
}

function actualizarChat() {
    var chatArea = document.getElementById("chatArea");
    chatArea.innerHTML = "";

    mensajes.forEach(function (mensaje) {
        var mensajeHTML = `<p><strong>${mensaje.remitente}:</strong> ${mensaje.contenido} <span>${mensaje.hora}</span></p>`;
        var parrafo = document.createElement("div");
        parrafo.innerHTML = mensajeHTML;
        chatArea.appendChild(parrafo);
    });
}
