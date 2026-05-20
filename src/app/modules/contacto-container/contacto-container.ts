import { Component } from '@angular/core';
// Importa el decorador Component desde Angular, necesario para crear componentes

import { ContactoForm } from '../contacto-form/contacto-form';
// Importa el componente del formulario de contacto

import { MapContainer } from '../map-container/map-container';
// Importa el componente que contiene el mapa

@Component({
  selector: 'app-contacto-container',
  // Define el nombre del selector HTML que se usará para este componente

  standalone: true,
  // Indica que es un componente independiente (no necesita un módulo)

  imports: [ContactoForm, MapContainer],
  // Declara los componentes que se van a usar dentro de este componente

  templateUrl: './contacto-container.html',
  // Archivo HTML que contiene la estructura visual del componente

  styleUrl: './contacto-container.css'
  // Archivo CSS donde están los estilos del componente
})
export class ContactoContainer { }
// Clase principal del componente; actualmente no contiene lógica adicional