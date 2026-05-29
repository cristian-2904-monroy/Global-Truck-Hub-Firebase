import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
//Importaciones necesarias para Firebase desde AngularFire
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideAuth, getAuth } from '@angular/fire/auth';

//Importamos la configuración de Firebase desde environment.ts
import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    //inicializa la aplicación de Firebase con las credenciales del environment
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    //configura Firestore como servicio de base de datos en tiempo real
    provideFirestore(() => getFirestore()),
    //configura la autenticación de Firebase (para futuras funcionalidades de login)
    provideAuth(() => getAuth())
  ]
};