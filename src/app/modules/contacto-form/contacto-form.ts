import { Component } from '@angular/core';
// Importa el decorador Component para poder crear un componente en Angular

import { CommonModule } from '@angular/common';
// Importa funcionalidades comunes de Angular como directivas básicas (ngIf, ngFor, etc.)

import { Router } from '@angular/router';
// Importa el sistema de navegación de Angular para cambiar de rutas

@Component({
  selector: 'app-contacto-form',
  // Define el nombre del selector que se usará en el HTML

  standalone: true,
  // Indica que este componente es independiente y no necesita un módulo

  imports: [CommonModule],
  // Declara módulos necesarios para que el componente funcione correctamente

  templateUrl: './contacto-form.html',
  // Archivo HTML que contiene la vista del formulario

  styleUrl: './contacto-form.css',
  // Archivo CSS con los estilos del componente
})
export class ContactoForm {
  // Clase principal del componente

  constructor(private router: Router) {}
  // Inyecta el servicio Router para poder navegar entre páginas

  enviarFormulario() {
    // Método que se ejecuta cuando el usuario envía el formulario

    alert('Mensaje enviado correctamente');
    // Muestra una alerta confirmando el envío

    this.router.navigate(['/home']);
    // Redirige al usuario a la ruta /home después de enviar el formulario
  }
}