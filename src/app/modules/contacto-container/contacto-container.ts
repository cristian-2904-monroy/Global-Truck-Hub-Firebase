import { Component } from '@angular/core';

import { ContactoForm } from '../contacto-form/contacto-form';

import { MapContainer } from '../map-container/map-container';

@Component({
  selector: 'app-contacto-container',

  standalone: true,

  imports: [ContactoForm, MapContainer],

  templateUrl: './contacto-container.html',

  styleUrl: './contacto-container.css'
})
export class ContactoContainer { }
