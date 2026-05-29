import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-nav-button',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './nav-button.html',
  styleUrl: './nav-button.css'
})

export class NavButton {

  link = input<string>('');
  // Recibe dinámicamente la ruta hacia la que navegará el botón.

  texto = input<string>('');
  // Obtiene el texto que será mostrado dentro del botón de navegación.
}
