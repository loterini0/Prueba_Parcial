function habilitarBoton() {
  correo = document.getElementById("correo").value.trim();
  document.getElementById("enviar").disabled = correo === "";
}

function validarEdad() {
  edad = document.getElementById("edad").value;
  if (edad < 0) {
    alert("La edad no puede ser negativa.");
    document.getElementById("edad").value = "";
  }
}

function enviarFormulario(e) {
  nombre = document.getElementById("nombre").value;
  apellido = document.getElementById("apellido").value;
  correo = document.getElementById("correo").value;
  edad = document.getElementById("edad").value;

  tarjeta = `
    <div class="card mb-3">
      <div class="card-body">
        <h5 class="card-title">${nombre} ${apellido}</h5>
        <p class="card-text">Correo: ${correo}<br>Edad: ${edad}</p>
      </div>
    </div>
  `;

  document.getElementById("resultado").innerHTML += tarjeta;
  document.getElementById("enviar").disabled = true;
}