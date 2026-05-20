import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CamionesService } from '../../services/camiones.service';

@Component({
  selector: 'app-componente-catalogo',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './componente-catalogo.html',
  styleUrl: './componente-catalogo.css',
})

export class ComponenteCatalogo implements OnInit {

  catalogo: any[] = [];

  constructor(
    private camionesService: CamionesService
  ) {}

  ngOnInit(): void {

    this.camionesService
      .obtenerCamiones()
      .subscribe((camiones: any[]) => {

        this.catalogo = [
          {
            titulo: 'Catálogo de Camiones',
            listado: camiones
          }
        ];

      });

  }

}
