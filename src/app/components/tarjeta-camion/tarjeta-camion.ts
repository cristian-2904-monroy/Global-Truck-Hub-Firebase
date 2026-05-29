import { Component, input } from '@angular/core';

import { CurrencyPipe } from '@angular/common';

import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjeta-camion',

  standalone: true,

  imports: [CurrencyPipe],

  templateUrl: './tarjeta-camion.html',

  styleUrl: './tarjeta-camion.css'
})
export class TarjetaCamion {

  camion = input.required<any>();
  // Recibe de forma obligatoria la información del camión.

  constructor(private router: Router) {}
  // Inyecta el Router para navegar a otras páginas.

  irACotizacion(): void {
    // Redirige al componente de cotización enviando el nombre del camión.

    this.router.navigate([
      '/cotizacion',
      this.camion().nombre
    ]);
  }
}
