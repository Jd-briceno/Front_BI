# Frontend para Clasificación de Texto

Este es el Frontend para la aplicación de clasificación de texto.

## Autores
- Juan David Briceño - 201812887
- Daniel Clavijo - 202122209
- Carlos Medina - 202112046

## Requisitos previos

Asegúrate de tener Node.js y npm (Node Package Manager) instalados en tu sistema. Puedes descargarlos desde [nodejs.org](https://nodejs.org/).

## Configuración

1. Clona este repositorio o descarga los archivos del frontend.

2. Navega al directorio del proyecto en tu terminal.

3. Instala las dependencias del proyecto:
   ```
   npm install
   ```

## Ejecución

Para iniciar la aplicación en modo de desarrollo:

```
npm start
```

La aplicación estará disponible en `http://localhost:3000`.

## Estructura del proyecto

- `src/`: Contiene el código fuente de la aplicación.
  - `components/`: Componentes React de la aplicación.
  - `App.js`: Componente principal de la aplicación.
  - `index.js`: Punto de entrada de la aplicación.

## Características principales

- Página de inicio con selección de rol (Analista de Datos / Científico de Datos).
- Interfaz para Analista de Datos para clasificar textos.
- Interfaz para Científico de Datos para reentrenar el modelo.

## Conexión con el Backend

Esta aplicación frontend está diseñada para trabajar con un backend específico. Asegúrate de que el backend esté en ejecución en `http://localhost:8000` antes de utilizar las funcionalidades de clasificación y reentrenamiento.


## Solución de problemas

Si encuentras problemas al ejecutar la aplicación:

1. Asegúrate de haber instalado todas las dependencias con `npm install`.
2. Verifica que el backend esté en ejecución y accesible.
3. Limpia la caché de npm: `npm clean-cache --force`.
4. Si el problema persiste, elimina la carpeta `node_modules` y el archivo `package-lock.json`, luego vuelve a ejecutar `npm install`.

## Notas adicionales

- Esta aplicación utiliza React Router para la navegación entre componentes.
- Se recomienda usar la última versión estable de Node.js para evitar problemas de compatibilidad.
