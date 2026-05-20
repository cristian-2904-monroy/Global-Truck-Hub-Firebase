import { Component } from '@angular/core';
// Importa el decorador Component necesario para crear componentes en Angular.

@Component({
  // Define la configuración general del componente.

  selector: 'app-logo',
  // Establece el nombre de la etiqueta HTML usada para mostrar este componente.

  standalone: true,
  // Indica que el componente puede funcionar sin depender de un módulo Angular.

  imports: [], 
  // Espacio reservado para importar otros componentes o directivas si llegan a necesitarse.

  templateUrl: './logo.html',
  // Conecta el archivo HTML donde se encuentra la estructura visual del logo.

  styleUrl: './logo.css'
  // Vincula la hoja de estilos encargada de la apariencia del componente.
})

export class Logo {
}
// Declara la clase principal del componente Logo.
// Actualmente no contiene lógica porque solo se encarga de mostrar información visual.