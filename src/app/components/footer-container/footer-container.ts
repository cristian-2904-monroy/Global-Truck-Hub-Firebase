import { Component } from '@angular/core';
// Importa el decorador Component, necesario para crear componentes en Angular.

import { RedesSociales } from '../redes-sociales/redes-sociales';
// Trae el componente encargado de mostrar los íconos y enlaces de redes sociales.

@Component({
  // Define la configuración principal del componente.

  selector: 'app-footer-container',
  // Establece el nombre de la etiqueta HTML utilizada para insertar este footer.

  standalone: true,
  // Indica que el componente funciona de forma independiente sin usar módulos tradicionales.

  imports: [RedesSociales],
  // Registra el componente de redes sociales para poder usarlo dentro del HTML.

  templateUrl: './footer-container.html',
  // Conecta el archivo que contiene la estructura visual del footer.

  styleUrl: './footer-container.css',
  // Vincula la hoja de estilos que controla la apariencia del pie de página.
})

export class FooterContainer {}
// Declara la clase principal del componente FooterContainer.
// En este caso la lógica es mínima porque el contenido está definido directamente en la plantilla HTML.