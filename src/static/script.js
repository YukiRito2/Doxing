function toggleInputs() {
    const searchType = document.getElementById('search-type').value;
    const nameInputs = document.getElementById('name-inputs');
    const searchInput = document.getElementById('search-input');

    if (searchType === "name") {
        nameInputs.style.display = "block";
        searchInput.style.display = "none";
    } else {
        nameInputs.style.display = "none";
        searchInput.style.display = "block";
    }
}

function buscar() {
    const searchType = document.getElementById('search-type').value;
    let searchValue = "";

    if (searchType === "name") {
        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;
        searchValue = `${lastName} ${firstName}`;
    } else {
        searchValue = document.getElementById('search-input').value;
    }

    fetch(`/buscar?tipo=${searchType}&valor=${searchValue}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('result').innerText = data.resultado || 'No se encontró ninguna coincidencia.';
        })
        .catch(error => console.error('Error en la búsqueda:', error));
}
