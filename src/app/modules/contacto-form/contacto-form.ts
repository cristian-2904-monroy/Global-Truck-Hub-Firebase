import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

import { Router } from '@angular/router';

@Component({
  selector: 'app-contacto-form',

  standalone: true,

  imports: [CommonModule],

  templateUrl: './contacto-form.html',

  styleUrl: './contacto-form.css',
})
export class ContactoForm {

  constructor(private router: Router) {}
  // Inyecta el servicio Router para poder navegar entre páginas

  enviarFormulario() {
    // Método que se ejecuta cuando el usuario envía el formulario

    alert('Mensaje enviado correctamente');
    // Muestra una alerta confirmando el envío

    this.router.navigate(['/home']);
    // Redirige al usuario a la ruta home después de enviar el formulario aqui es donde se utilizo navegacion programatica 
  }
}
