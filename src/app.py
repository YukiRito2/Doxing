from flask import Flask, render_template, request
import subprocess

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/buscar", methods=["POST"])
def buscar():
    search_type = request.form.get("searchType")
    archivo_csv = "C:/xampp/mysql/data/RENIEC10GB_CSV.csv"

    # Determinar el tipo de búsqueda en función de la selección del usuario
    if search_type == "dni":
        dni = request.form.get("dni")
        cadena_busqueda = dni  # Búsqueda por DNI
    elif search_type == "celular":
        celular = request.form.get("celular")
        cadena_busqueda = celular  # Búsqueda por número de celular
    else:
        nombres = request.form.get("nombres")
        apellidos = request.form.get("apellidos")
        cadena_busqueda = (
            f"{apellidos.upper()} {nombres.upper()}"  # Búsqueda por nombres y apellidos
        )

    # Ejecutar el comando rg para buscar en el CSV
    result = subprocess.run(
        ["rg", cadena_busqueda, archivo_csv], capture_output=True, text=True
    )

    # Mostrar el resultado en la página
    mensaje = (
        result.stdout
        if result.stdout
        else "No se encontraron resultados para la búsqueda."
    )
    return render_template("index.html", resultado=mensaje)


if __name__ == "__main__":
    app.run(debug=True)
