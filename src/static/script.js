document.addEventListener("DOMContentLoaded", function () {
  // Inicialmente ocultar todos los campos de búsqueda
  toggleFields();
});

function toggleFields() {
  const searchType = document.getElementById("searchType").value;

  // Mostrar/ocultar campos en función del tipo de búsqueda seleccionado
  document.getElementById("nameFields").style.display = searchType === "nombres" ? "block" : "none";
  document.getElementById("lastNameOnlyField").style.display = searchType === "solo_apellidos" ? "block" : "none";
  document.getElementById("dniField").style.display = searchType === "dni" ? "block" : "none";
  document.getElementById("celularField").style.display = searchType === "celular" ? "block" : "none";
}

function buscar() {
  const searchType = document.getElementById("searchType").value;
  
  // Evitar la búsqueda si no se ha seleccionado un tipo de búsqueda
  if (!searchType) {
    alert("Por favor, seleccione un tipo de búsqueda.");
    return;
  }

  let data = { searchType: searchType };

  // Limpiar espacios en blanco en los valores de los inputs antes de enviarlos
  if (searchType === "nombres") {
    data.nombres = document.getElementById("nombres").value.trim();
    data.apellidos = document.getElementById("apellidos").value.trim();
  } else if (searchType === "solo_apellidos") {
    data.apellidos = document.getElementById("apellidosOnly").value.trim();
  } else if (searchType === "dni") {
    data.dni = document.getElementById("dni").value.trim();
  } else if (searchType === "celular") {
    data.celular = document.getElementById("celular").value.trim();
  }

  document.getElementById("loading").style.display = "block";
  document.getElementById("result").style.display = "none";
  document.getElementById("result").classList.remove("visible");

  fetch("/buscar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.text())
    .then((resultado) => {
      document.getElementById("loading").style.display = "none";
      document.getElementById("result").style.display = "block";
      document.getElementById("resultContent").innerText = resultado || "No se encontró ninguna coincidencia.";
      document.getElementById("result").classList.add("visible");
    })
    .catch((error) => {
      console.error("Error en la búsqueda:", error);
      document.getElementById("loading").style.display = "none";
      document.getElementById("resultContent").innerText = "Ocurrió un error en la búsqueda.";
      document.getElementById("result").style.display = "block";
      document.getElementById("result").classList.add("visible");
    });
}
