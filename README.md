# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

como instale vite:

1. crear y abrir carpeta vacia
2. ejecutar comando de react con vite "npm create vite@latest my-app -- --template react"
3. despues de ejecutar "npm run-dev" vas a tener el siguiente error:
   El error "No se encuentra el paquete '@vitejs/plugin-react' importado desde C:\Users\usuario\node_modules\.vite-temp\vite.config.js.timestamp-1756337989002-22e7c091058d.mjs" indica que Vite no puede localizar el @vitejs/plugin-reactpaquete, lo cual es esencial para un proyecto de React que lo use. Esto suele significar que el paquete no está instalado o no se reconoce correctamente en las dependencias del proyecto.

Para resolver esto, siga estos pasos:
Instalar el complemento : Asegúrate de @vitejs/plugin-reactque esté instalado en el directorio raíz de tu proyecto devDependencies. Abre la terminal en el directorio raíz del proyecto y ejecuta:
Código

    "npm install @vitejs/plugin-react --save-dev"

Limpiar y reinstalar las dependencias : si el paquete ya estaba instalado pero no fue reconocido, intente una reinstalación limpia de su node_modules.
Código

    "rm -rf node_modules"
    "npm install"

Esto elimina la node_modulescarpeta existente y luego reinstala todas las dependencias enumeradas en su package.json.
Verificar vite.config.jsla importación: Confirme que la declaración de importación @vitejs/plugin-reacten su vite.config.jsarchivo sea correcta y coincida con el nombre del paquete instalado. Por ejemplo:
JavaScript:

    "import { defineConfig } from 'vite';
    import react from '@vitejs/plugin-react';

    export default defineConfig({
      plugins: [react()],
    });"

Después de realizar estos pasos, intente iniciar nuevamente su servidor de desarrollo utilizando npm run dev.
