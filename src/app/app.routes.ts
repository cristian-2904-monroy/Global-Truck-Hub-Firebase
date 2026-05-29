import { Routes } from '@angular/router';

import { HomeContainer } from './modules/home-container/home-container';

import { ComponenteCatalogo } from './modules/componente-catalogo/componente-catalogo';

import { ComponenteCotizacion } from './modules/componente-cotizacion/componente-cotizacion';

import { ContactoContainer } from './modules/contacto-container/contacto-container';

export const routes: Routes = [

  // Si la URL está vacía, redirige automáticamente a /home
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  // Ruta principal que muestra la página de inicio
  {
    path: 'home',
    component: HomeContainer
  },

  // Ruta que muestra el catálogo de productos
  {
    path: 'catalogo',
    component: ComponenteCatalogo
  },

  // Ruta de cotización que recibe el nombre del camión seleccionado
  // Ejemplo:
  // /cotizacion/Kenworth%20T880
  { 
    path: 'cotizacion/:id', 
    component: ComponenteCotizacion 
  },

  // Ruta que muestra el formulario de contacto
  {
    path: 'contacto',
    component: ContactoContainer
  },

  // Ruta comodín: si la URL no existe, redirige a home
  {
    path: '**',
    redirectTo: 'home'
  }

];
