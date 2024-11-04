# Proyecto de Búsqueda en RENIEC

Este proyecto permite realizar búsquedas en un archivo CSV utilizando Flask y `ripgrep` para una rápida búsqueda de registros de la RENIEC. El objetivo es ofrecer una aplicación web donde los usuarios puedan buscar información por diferentes criterios: nombres y apellidos, solo apellidos, DNI, o celular. Los resultados se muestran organizados y estructurados en la interfaz.

## Características

- **Búsqueda por múltiples criterios**: Permite buscar por nombres y apellidos, solo apellidos, DNI o número de celular.
- **Optimización en la búsqueda**: Se usa `ripgrep` para manejar búsquedas rápidas y eficientes en un archivo CSV grande.
- **Validación de entradas**: Elimina automáticamente los espacios en blanco en los inputs para evitar errores en las búsquedas.
- **Interfaz interactiva**: La interfaz se ajusta según el tipo de búsqueda seleccionado.

## Requisitos

Para que este proyecto funcione correctamente, se requieren los siguientes elementos:

- **Python 3.10 o superior**
- **Flask**: Framework web para manejar las solicitudes HTTP y mostrar la interfaz.
- **ripgrep**: Herramienta de búsqueda rápida en archivos grandes.
- **CSV de RENIEC**: Archivo de 10 GB ubicado en `C:/xampp/mysql/data/RENIEC10GB_CSV.csv`.

## Instalación

1. **Clona este repositorio**:
   ```bash
   git clone https://github.com/tu_usuario/reniec-busqueda.git
   cd reniec-busqueda