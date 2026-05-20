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

  private firestore = inject(Firestore);

  async guardarCotizacion(data: any) {
    const coleccion = collection(this.firestore, 'cotizaciones');
    return await addDoc(coleccion, data);
  }

  obtenerCotizaciones(): Observable<any[]> {
    const coleccion = collection(this.firestore, 'cotizaciones');

    return collectionData(coleccion, {
      idField: 'id'
    }) as Observable<any[]>;
  }
}
