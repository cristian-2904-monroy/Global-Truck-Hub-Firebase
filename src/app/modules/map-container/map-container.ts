import { Component } from '@angular/core';
// Importa el decorador Component para poder crear un componente en Angular

@Component({
  selector: 'app-map-container',
  // Define el nombre del selector HTML para usar este componente

  standalone: true,
  // Indica que el componente es independiente y no necesita módulo

  templateUrl: './map-container.html',
  // Archivo HTML que contiene la vista del mapa

  styleUrl: './map-container.css',
  // Archivo CSS donde se definen los estilos del componente
})
export class MapContainer {}
// Clase del componente del mapa (no tiene lógica adicional por ahora)