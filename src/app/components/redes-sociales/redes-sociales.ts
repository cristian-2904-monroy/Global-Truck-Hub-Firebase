import { Component, OnInit } from '@angular/core';
// Importa Component para crear el componente.
// También trae OnInit, utilizado para ejecutar lógica al iniciar el componente.

import { CommonModule } from '@angular/common';
// Importa funcionalidades comunes de Angular como directivas y estructuras básicas.

import { RedesSocialesServices } from '../../services/redes-sociales';
// Trae el servicio encargado de suministrar la información de las redes sociales.

@Component({
  // Configura las propiedades principales del componente.

  selector: 'app-redes-sociales',
  // Define la etiqueta HTML utilizada para insertar este componente en otras vistas.

  standalone: true,
  // Permite que el componente funcione de manera independiente sin usar módulos tradicionales.

  imports: [CommonModule],
  // Habilita herramientas básicas de Angular necesarias dentro del HTML.

  templateUrl: './redes-sociales.html',
  // Conecta el archivo que contiene la estructura visual del componente.

  styleUrl: './redes-sociales.css',
  // Vincula la hoja de estilos utilizada para personalizar la apariencia.
})

export class RedesSociales implements OnInit {
  // Declara la clase principal e implementa el ciclo de vida OnInit.

  public redes: any[] = [];
  // Crea un arreglo público donde se almacenará la lista de redes sociales.

  constructor(private servicio: RedesSocialesServices) {}
  // Inyecta el servicio de redes sociales para acceder a los datos desde el componente.

  ngOnInit(): void {
    // Este método se ejecuta automáticamente cuando el componente termina de cargarse.

    this.redes = this.servicio.listaRedes;
    // Copia la lista de redes sociales del servicio al arreglo utilizado en la vista.
  }
}