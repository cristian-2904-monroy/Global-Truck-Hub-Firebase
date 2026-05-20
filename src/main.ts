import { bootstrapApplication } from '@angular/platform-browser';
// Importa la función que permite iniciar la aplicación Angular en el navegador

import { appConfig } from './app/app.config';
// Importa la configuración global de la aplicación (rutas, providers, etc.)

import { App } from './app/app';
// Importa el componente raíz de la aplicación

bootstrapApplication(App, appConfig)
  // Inicia la aplicación Angular usando el componente principal y su configuración

  .catch((err) => console.error(err));
// Captura y muestra en consola cualquier error que ocurra durante el arranque