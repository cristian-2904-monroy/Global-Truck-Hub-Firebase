import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import {
  Firestore,
  collection,
  collectionData,
  doc,
  docData
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CamionesService {

  private firestore = inject(Firestore);
  private coleccionCamiones = collection(this.firestore, 'camiones');

  obtenerCamiones(): Observable<any[]> {
    console.log('Obteniendo camiones desde Firestore...');
    return collectionData(this.coleccionCamiones, { idField: 'id' }) as Observable<any[]>;
  }

  obtenerCamionPorId(id: string): Observable<any> {
    const ref = doc(this.firestore, `camiones/${id}`);
    return docData(ref, { idField: 'id' }) as Observable<any>;
  }
}