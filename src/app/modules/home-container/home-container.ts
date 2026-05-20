import { Component } from '@angular/core';
// Importa el decorador Component para definir un componente en Angular

import { Router } from '@angular/router';
// Importa el servicio Router para poder navegar entre rutas

@Component({
  selector: 'app-home-container',
  // Nombre del selector que se usará en el HTML para este componente

  standalone: true,
  // Indica que es un componente independiente (no depende de módulos)

  imports: [],
  // Aquí se incluirían otros módulos o componentes si fueran necesarios (en este caso está vacío)

  templateUrl: './home-container.html',
  // Archivo HTML que define la vista del componente

  styleUrl: './home-container.css',
  // Archivo CSS con los estilos del componente
})
export class HomeContainer {
  // Clase principal del componente Home

  constructor(private router: Router) {}
  // Inyecta el Router para poder navegar entre páginas

  IrCatalogo() {
    // Método que se ejecuta al llamar la acción desde la vista

    this.router.navigate(['/catalogo']);
    // Redirige al usuario a la ruta /catalogo
  }
}