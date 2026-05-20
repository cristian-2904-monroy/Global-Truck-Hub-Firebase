import { Injectable } from '@angular/core';
// Importa el decorador Injectable para poder crear un servicio en Angular

@Injectable({
  providedIn: 'root'
  // Hace que el servicio sea global y se pueda usar en toda la aplicación sin registrarlo en módulos
})
export class RedesSocialesServices {
  // Clase del servicio que maneja la información de redes sociales

  // Lista de redes sociales disponibles en la aplicación
  public listaRedes = [

    {
      nombre: 'Facebook',
      // Nombre visible de la red social

      icono: 'bi bi-facebook',
      // Clase del ícono de Bootstrap Icons

      url: '#',
      // Enlace (actualmente de prueba)

      color: '#1877F2'
      // Color oficial de Facebook
    },

    {
      nombre: 'Instagram',
      icono: 'bi bi-instagram',
      url: '#',
      color: '#E4405F'
      // Color característico de Instagram
    },

    {
      nombre: 'Twitter',
      icono: 'bi bi-twitter-x',
      url: '#',
      color: '#000000'
      // Representa la nueva identidad de Twitter (X)
    },

    {
      nombre: 'YouTube',
      icono: 'bi bi-youtube',
      url: '#',
      color: '#FF0000'
      // Color oficial de YouTube
    }

  ];
}