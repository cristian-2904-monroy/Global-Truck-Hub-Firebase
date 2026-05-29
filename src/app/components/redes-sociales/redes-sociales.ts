import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';

import { RedesSocialesServices } from '../../services/redes-sociales';

@Component({

  selector: 'app-redes-sociales',

  standalone: true,

  imports: [CommonModule],

  templateUrl: './redes-sociales.html',

  styleUrl: './redes-sociales.css',
})

export class RedesSociales implements OnInit {
  // Declara la clase principal e implementa el ciclo de vida OnInit.

  public redes: any[] = [];
  // Crea un arreglo público donde se almacenará la lista de redes sociales.

  constructor(private servicio: RedesSocialesServices) {}
  // Inyecta el servicio de redes sociales para acceder a los datos desde el componente.

  ngOnInit(): void {
    // Este método se ejecuta automáticamente cuando el componente termina de cargarse.

    this.redes = this.servicio.listaRedes;
    // Copia la lista de redes sociales del servicio al arreglo utilizado en la vista.
  }
}
