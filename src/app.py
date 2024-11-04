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
        cadena_busqueda = dni
    elif search_type == "celular":
        celular = request.form.get("celular")
        cadena_busqueda = celular
    else:
        nombres = request.form.get("nombres")
        apellidos = request.form.get("apellidos")
        cadena_busqueda = f"{apellidos.upper()} {nombres.upper()}"

    # Ejecutar el comando rg para buscar en el CSV
    result = subprocess.run(
        ["rg", cadena_busqueda, archivo_csv], capture_output=True, text=True
    )

    if result.stdout:
        # Separar la línea encontrada por los delimitadores de tu archivo CSV
        # En tu caso, parece ser un delimitador ";"
        lines = result.stdout.strip().split("\n")
        formatted_results = []

        for line in lines:
            data = line.split(";")
            # Formato de salida de acuerdo a los encabezados de tu archivo
            formatted_result = (
                f'documento: "{data[0]}"\n'
                f'apellido paterno: "{data[1]}"\n'
                f'apellido materno: "{data[2]}"\n'
                f'nombres: "{data[3]}"\n'
                f'nacimiento: "{data[4]}"\n'
                f'edad: "{data[5]}"\n'
                f'ubigeo: "{data[6]}"\n'
                f'ubicacion: "{data[7]}"\n'
                f'direccion: "{data[8]}"\n'
                f'sexo: "{data[9]}"\n'
                f'estado: "{data[10]}"\n'
                f'sueldo: "{data[11]}"\n'
                f'credito: "{data[12]}"\n'
                f'madre: "{data[13]}"\n'
                f'padre: "{data[14]}"\n'
                f'departamento: "{data[15]}"\n'
                f'provincia: "{data[16]}"\n'
                f'distrito: "{data[17]}"\n'
                f'telefono: "{data[18]}"\n'
                f'patmatnom: "{data[19]}"\n'
                f'caducidad: "{data[20]}"\n'
                f'cui: "{data[21]}"\n'
                f'emision: "{data[22]}"\n'
                f'estatura: "{data[23]}"\n'
                f'inscripcion: "{data[24]}"\n'
                f'instruccion: "{data[25]}"\n'
                f'restriccion: "{data[26]}"\n'
            )
            formatted_results.append(formatted_result)

        mensaje = "\n\n".join(formatted_results)
    else:
        mensaje = "No se encontraron resultados para la búsqueda."

    return render_template("index.html", resultado=mensaje)


if __name__ == "__main__":
    app.run(debug=True)
