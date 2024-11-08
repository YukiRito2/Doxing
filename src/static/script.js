document.addEventListener("DOMContentLoaded", function () {
  // Alternar los campos según el tipo de búsqueda
  document.getElementById("searchType").addEventListener("change", toggleFields);
});

function toggleFields() {
  const searchType = document.getElementById("searchType").value;
  document.getElementById("nameFields").style.display = searchType === "nombres" ? "block" : "none";
  document.getElementById("dniField").style.display = searchType === "dni" ? "block" : "none";
  document.getElementById("celularField").style.display = searchType === "celular" ? "block" : "none";
}

function buscar() {
  const searchType = document.getElementById("searchType").value;
  let data = { searchType: searchType };

  if (searchType === "nombres") {
    data.nombres = document.getElementById("nombres").value;
    data.apellidos = document.getElementById("apellidos").value;
  } else if (searchType === "dni") {
    data.dni = document.getElementById("dni").value;
  } else if (searchType === "celular") {
    data.celular = document.getElementById("celular").value;
  }

  // Muestra el indicador de carga y oculta el contenedor de resultados
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
      // Oculta el indicador de carga y muestra el contenedor de resultados
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
