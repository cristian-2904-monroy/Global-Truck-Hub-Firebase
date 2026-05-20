import { Component, input } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-ficha-tecnica',
  standalone: true,
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './ficha-tecnica.html',
  styleUrl: './ficha-tecnica.css'
})
export class FichaTecnica {

  // Recibe el camión seleccionado desde el componente de cotización
  camion = input<any>();

  imprimirCotizacion(): void {
    window.print();
  }
}