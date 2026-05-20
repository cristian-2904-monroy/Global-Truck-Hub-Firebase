import { Component, signal } from '@angular/core';
// Importa Component para crear el componente principal y signal (aunque aquí no se está usando aún)

import { ContainerNav } from "./components/container-nav/container-nav";
// Importa el componente de la barra de navegación

import { FooterContainer } from "./components/footer-container/footer-container";
// Importa el componente del pie de página

import { RouterOutlet } from '@angular/router';
// Permite renderizar las vistas según la ruta activa

@Component({
  selector: 'app-root',
  // Define el selector principal de la aplicación

  standalone: true,
  // Indica que el componente es independiente (no usa módulos tradicionales)

  imports: [ContainerNav, FooterContainer, RouterOutlet],
  // Registra los componentes y directivas que se usan en este componente

  templateUrl: './app.html',
  // Archivo HTML que define la estructura visual principal

  styleUrl: './app.css'
  // Archivo CSS con los estilos globales del componente raíz
})
export class App {
  // Clase principal de la aplicación

}