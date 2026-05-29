import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CamionesService } from '../../services/camiones.service';
import { FichaTecnica } from '../ficha-tecnica/ficha-tecnica'; //Importante

@Component({
  selector: 'app-componente-cotizacion',
  standalone: true,
  imports: [CommonModule, FormsModule, FichaTecnica],
  templateUrl: './componente-cotizacion.html',
  styleUrl: './componente-cotizacion.css',
})
export class ComponenteCotizacion implements OnInit {
  camionSeleccionado: any = { precio: 0 };//objeto que almacena los datos del camión seleccionado
  cuotaInicial = 0;//Valor ingresado por el usuario como cuota inicial
  mesesPlazo = 12;//plazo del crédito en meses (por defecto 12)
  iva = 0;//calculo del IVA (19% del precio)
  totalConIva = 0;//Precio total con impuestos incluidos
  valorCuota = 0;//Resultado de la cuota mensual a financiar

  constructor(
    //ActivatedRoute: permite leer los parámetros de la URL (ej: el id del camión)
    private route: ActivatedRoute,
    //Servicio que maneja las operaciones con Firestore (obtener camión por ID
    private camionesService: CamionesService,
    private cdr: ChangeDetectorRef,
    //ViewportScroller: controla el desplazamiento hacia arriba de la página
    private viewportScroller: ViewportScroller
  ) {}

  ngOnInit(): void {
    this.viewportScroller.scrollToPosition([0, 0]);  //fuerza scroll hacia arriba
    console.log('Cotización iniciada');
    //Obtiene el parámetro 'id' de la URL (ej. /cotizacion/camion1)
    const id = this.route.snapshot.paramMap.get('id');
    console.log('ID recibido:', id);
    if (id) {//Si se recibió un ID, consulta el servicio para obtener los datos del camión
      this.camionesService.obtenerCamionPorId(id).subscribe({
        // next: se ejecuta cuando el servicio devuelve los datos correctamente
        next: (camion: any) => {
          console.log('Camión recibido:', camion);
          if (camion) {
            this.camionSeleccionado = camion;//asigna el camión obtenido a la propiedad 'camionSeleccionado'
            this.cdr.detectChanges();//Forzar actualización de la vista
            this.ejecutarCalculos();//Calcula los valores iniciales del simulador
          } else {
            console.error('Camión no encontrado con id:', id);
          }
        },
        //error: se ejecuta si ocurre un problema en la consulta a Firestore
        error: (err) => console.error('Error al obtener camión:', err),
      });
    } else {
      console.error('No se recibió id en la URL');
    }
  }

  //ejecutarCalculos: método que actualiza los valores del simulador
  //Se ejecuta al cargar los datos y cada vez que el usuario modifica la cuota inicial o los meses
  ejecutarCalculos(): void {
    console.log('Calculando...');
    //Obtiene el precio del camión
    const precio = this.camionSeleccionado?.precio || 0;
    //Calculo del IVA (19% del precio)
    this.iva = precio * 0.19;
    //Total con impuestos = precio + IVA
    this.totalConIva = precio + this.iva;
    //Monto a financiar = total con impuestos - cuota inicial del usuario
    const valorAFinanciar = this.totalConIva - this.cuotaInicial;

    //evita división por cero o números negativos
    if (this.mesesPlazo > 0 && valorAFinanciar >= 0) {
      //Cuota mensual = monto a financiar / cantidad de meses
      this.valorCuota = valorAFinanciar / this.mesesPlazo;
    } else {
      this.valorCuota = 0;
    }
  }

  //método llamado desde el botón "Imprimir o guardar como PDF", que permite imprimir o guardar como PDF
  imprimirCotizacion(): void {
    window.print();
  }
}
