import { Component, input } from '@angular/core';
// Importa Component para crear componentes Angular.
// También trae input, utilizado para recibir datos desde otros componentes.

import { RouterModule } from '@angular/router';
// Importa las herramientas de enrutamiento necesarias para navegar entre páginas.

@Component({
  // Configura las propiedades principales del componente.

  selector: 'app-nav-button',
  // Define la etiqueta HTML utilizada para insertar este botón en otras vistas.

  standalone: true,
  // Permite que el componente funcione sin depender de un módulo Angular tradicional.

  imports: [RouterModule],
  // Habilita las directivas de navegación como routerLink dentro del HTML.

  templateUrl: './nav-button.html',
  // Conecta el archivo que contiene la estructura visual del botón.

  styleUrl: './nav-button.css'
  // Vincula los estilos personalizados aplicados al componente.
})

export class NavButton {

  link = input<string>('');
  // Recibe dinámicamente la ruta hacia la que navegará el botón.

  texto = input<string>('');
  // Obtiene el texto que será mostrado dentro del botón de navegación.
}