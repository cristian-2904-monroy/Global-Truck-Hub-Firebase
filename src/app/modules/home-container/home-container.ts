import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-home-container',

  standalone: true,

  imports: [],

  templateUrl: './home-container.html',

  styleUrl: './home-container.css',
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
