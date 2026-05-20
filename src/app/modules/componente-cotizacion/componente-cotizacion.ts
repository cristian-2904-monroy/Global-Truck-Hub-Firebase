import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CamionesService } from '../../services/camiones.service';
import { FichaTecnica } from '../ficha-tecnica/ficha-tecnica'; //Importante

@Component({
  selector: 'app-componente-cotizacion',
  standalone: true,
  imports: [CommonModule, FormsModule, FichaTecnica], //Agregado FichaTecnica
  templateUrl: './componente-cotizacion.html',
  styleUrl: './componente-cotizacion.css',
})
export class ComponenteCotizacion implements OnInit {
  camionSeleccionado: any = { precio: 0 };
  cuotaInicial = 0;
  mesesPlazo = 12;
  iva = 0;
  totalConIva = 0;
  valorCuota = 0;

  constructor(
    private route: ActivatedRoute,
    private camionesService: CamionesService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    console.log('Cotización iniciada');
    // Cambiamos 'nombre' por 'id' para que coincida con la ruta
    const id = this.route.snapshot.paramMap.get('id');
    console.log('ID recibido:', id);
    if (id) {
      this.camionesService.obtenerCamionPorId(id).subscribe({
        next: (camion: any) => {
          console.log('Camión recibido:', camion);
          if (camion) {
            this.camionSeleccionado = camion;
            this.cdr.detectChanges(); //Forzar actualización de la vista
            this.ejecutarCalculos();
          } else {
            console.error('Camión no encontrado con id:', id);
          }
        },
        error: (err) => console.error('Error al obtener camión:', err),
      });
    } else {
      console.error('No se recibió id en la URL');
    }
  }

  ejecutarCalculos(): void {
    console.log('Calculando...');
    const precio = this.camionSeleccionado?.precio || 0;
    this.iva = precio * 0.19;
    this.totalConIva = precio + this.iva;
    const valorAFinanciar = this.totalConIva - this.cuotaInicial;
    if (this.mesesPlazo > 0 && valorAFinanciar >= 0) {
      this.valorCuota = valorAFinanciar / this.mesesPlazo;
    } else {
      this.valorCuota = 0;
    }
  }
  imprimirCotizacion(): void {
    window.print();
  }
}
