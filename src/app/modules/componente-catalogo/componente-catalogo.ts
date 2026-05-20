import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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
  cargando = true;  // Para mostrar un spinner o texto

  constructor(
    private camionesService: CamionesService,
    private cdr: ChangeDetectorRef  // Inyectar ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.cargando = true;
    this.camionesService.obtenerCamiones().subscribe({
      next: (camiones: any[]) => {
        console.log('Camiones recibidos:', camiones);
        this.catalogo = [
          {
            titulo: 'Catálogo de Camiones',
            listado: camiones
          }
        ];
        this.cargando = false;
        this.cdr.detectChanges();  // 🔄 Forzar actualización de la vista
      },
      error: (err) => {
        console.error('Error al obtener camiones:', err);
        this.cargando = false;
        this.cdr.detectChanges();
      }
    });
  }
}