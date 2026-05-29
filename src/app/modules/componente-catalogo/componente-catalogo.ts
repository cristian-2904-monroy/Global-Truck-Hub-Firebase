import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CamionesService } from '../../services/camiones.service';

@Component({
  selector: 'app-componente-catalogo',//Etiqueta HTML que representará este componente
  standalone: true,
  imports: [CommonModule, RouterModule],//Módulos que se usan en la plantilla
  templateUrl: './componente-catalogo.html',
  styleUrl: './componente-catalogo.css',
})
export class ComponenteCatalogo implements OnInit {
  catalogo: any[] = [];//Arreglo que contendrá los camiones agrupados
  cargando = true;  // para mostrar un mensaje de "cargando..." mientras se obtienen datos

  constructor( //constructor: se ejecuta al instanciar el componente
    private camionesService: CamionesService,
    private cdr: ChangeDetectorRef //ChangeDetectorRef: permite forzar la detección de cambios en la vista
  ) {}

  //ngOnInit: método del ciclo de vida de Angular
  //Se ejecuta después de que el componente ha sido inicializado
  //aqui se cargan los datos desde Firestore
  ngOnInit(): void {
    this.cargando = true;
    //Llamada al servicio para obtener todos los camiones
    //el servicio devuelve un Observable que muestra los datos cuando llegan
    this.camionesService.obtenerCamiones().subscribe({
      next: (camiones: any[]) => {
        console.log('Camiones recibidos:', camiones);
        //asigna los camiones al arreglo 'catalogo'
        this.catalogo = [
          {
            titulo: 'Catálogo de Camiones',
            listado: camiones
          }
        ];
        this.cargando = false;
        this.cdr.detectChanges();//Forzar actualización de la vista
      },
      //error: función que se ejecuta si ocurre un error en la obtencion de los camiones
      error: (err) => {
        console.error('Error al obtener camiones:', err);
        this.cargando = false;
        this.cdr.detectChanges();
      }
    });
  }
}