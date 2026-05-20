import { Component } from '@angular/core';
// Importa el decorador Component, necesario para crear componentes en Angular.

import { Logo } from "../logo/logo";
// Trae el componente encargado de mostrar el logo dentro de la barra de navegación.

import { NavButton } from "../nav-button/nav-button";
// Importa el componente reutilizable que representa cada botón del menú.

@Component({
  // Define la configuración principal del componente.

  selector: 'app-container-nav',
  // Establece el nombre de la etiqueta HTML que permitirá usar este componente.

  standalone: true,
  // Indica que este componente funciona de manera independiente sin necesidad de módulos.

  imports: [Logo, NavButton],
  // Registra los componentes que podrán utilizarse dentro de su plantilla HTML.

  templateUrl: './container-nav.html',
  // Conecta el archivo HTML donde está diseñada la estructura visual del menú.

  styleUrl: './container-nav.css',
  // Vincula la hoja de estilos que controla la apariencia del componente.
})

export class ContainerNav {}
// Declara la clase principal del componente de navegación.
// En este caso no contiene lógica porque todo el comportamiento está definido en la vista y los componentes importados.