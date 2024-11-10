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
- **ripgrep**: Herramienta de búsqueda rápida en archivos grandes, que debe estar instalada y agregada al PATH del sistema para su correcto funcionamiento.
- **CSV de RENIEC**: Archivo ubicado en `C:/xampp/mysql/data/RENIEC10GB_CSV.csv` (puedes ubicarlo donde desees no importa donde). el archivo lo tengo yo pesa un buen por eso no lo puse XD
### Instalación de ripgrep

1. Descarga `ripgrep` desde el [https://github.com/BurntSushi/ripgrep/releases]().
2. Sigue las instrucciones para instalarlo en tu sistema operativo:
   - **Windows**: Descarga el archivo `.zip`, extrae el contenido y copia el archivo `rg.exe` a una ubicación de fácil acceso.
   - **Linux** (Ubuntu/Debian): Ejecuta el siguiente comando en la terminal:
     ```bash
     sudo apt install ripgrep
     ```

3. **Añadir ripgrep al PATH**:
   - En **Windows**:
     - Copia la ruta donde se encuentra `rg.exe`.
     - Ve a "Variables de entorno" en la configuración del sistema.
     - En "Variables del sistema", selecciona `Path`, haz clic en "Editar", y añade la ruta copiada.
     - Haz clic en "Aceptar" y reinicia cualquier terminal para aplicar los cambios.
   - En **Linux**, la instalación lo agrega automáticamente al PATH.

## Instalación del Proyecto

1. **Clona este repositorio**:
   ```bash
   git clone https://github.com/YukiRito2/Doxing.git
   cd reniec-busqueda
