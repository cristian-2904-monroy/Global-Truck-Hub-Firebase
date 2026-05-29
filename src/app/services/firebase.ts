import { Injectable, inject } from '@angular/core';
import {
  Firestore,
  collection,
  addDoc,
  collectionData
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private firestore = inject(Firestore);//Inyección del servicio Firestore, es como pedir la conexion a la base de datos

   //Metodo asíncrono para guardar una cotización
  async guardarCotizacion(data: any) {
    //Obtiene referencia a la colección 'cotizaciones'
    const coleccion = collection(this.firestore, 'cotizaciones');
    return await addDoc(coleccion, data);// Agrega un nuevo documento con los datos y espera la respuesta
  }

  //Metodo para obtener todas las cotizaciones(en tiempo real)
  obtenerCotizaciones(): Observable<any[]> {
    const coleccion = collection(this.firestore, 'cotizaciones');
    //collectionData devuelve un Observable que muestra los datos de la colección
    //{ idField: 'id' } incluye el ID del documento en cada objeto
    return collectionData(coleccion, {
      idField: 'id'
    }) as Observable<any[]>;
  }
}
