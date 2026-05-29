import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';//Observable: permite manejar datos asíncronos (lo que llega de Firebase)
import {
  Firestore,//servicio principal de Firestore
  collection,//referencia a una colección
  collectionData,//obtiene datos de una colección como Observable
  doc,//referencia a un documento específico
  docData//obtiene datos de un documento como Observable
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'//el servicio está disponible en toda la app sin necesidad de importarlo en módulos
})
export class CamionesService {
  // Inyectamos Firestore usando inject()
  private firestore = inject(Firestore);
  //referencia a la colección "camiones" dentro de Firestore
  private coleccionCamiones = collection(this.firestore, 'camiones');

  //metodo para obtener todos los camiones: devuelve un Observable que muestra un arreglo de camiones
  obtenerCamiones(): Observable<any[]> {
    console.log('Obteniendo camiones desde Firestore...');
    //collectionData devuelve los datos de la coleccion en tiempo real
    //{ idField: 'id' } agrega el ID del documento como propiedad 'id' a cada objeto
    return collectionData(this.coleccionCamiones, { idField: 'id' }) as Observable<any[]>;
  }

  //metodo para obtener un camión por su ID
  obtenerCamionPorId(id: string): Observable<any> {
    //se crea una referencia al documento 'camiones/{id}'
    const ref = doc(this.firestore, `camiones/${id}`);
    //docData obtiene los datos del documento como Observable
    return docData(ref, { idField: 'id' }) as Observable<any>;
    //se usa Observable porque firestore sincroniza datos eb tiempo real. si se modifican en la base de datos
    //el Observable mostrara automaticamente el nuevo valor
  }
}
