import { Component, input } from '@angular/core';
// Importa Component para crear el componente.
// También trae input, utilizado para recibir datos desde otros componentes.

import { CurrencyPipe } from '@angular/common';
// Importa el pipe encargado de formatear valores numéricos como monedas.

import { Router } from '@angular/router';
// Trae el servicio Router para permitir la navegación entre páginas.

@Component({
  selector: 'app-tarjeta-camion',
  // Define la etiqueta HTML utilizada para insertar esta tarjeta en otras vistas.

  standalone: true,
  // Permite que el componente funcione sin depender de un módulo Angular tradicional.

  imports: [CurrencyPipe],
  // Registra el pipe de moneda para utilizarlo directamente dentro del HTML.

  templateUrl: './tarjeta-camion.html',
  // Conecta el archivo que contiene la estructura visual de la tarjeta.

  styleUrl: './tarjeta-camion.css'
  // Vincula la hoja de estilos encargada del diseño visual del componente.
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