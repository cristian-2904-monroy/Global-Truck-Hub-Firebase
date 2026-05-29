import { Component } from '@angular/core';

import { RedesSociales } from '../redes-sociales/redes-sociales';

@Component({

  selector: 'app-footer-container',
  standalone: true,
  imports: [RedesSociales],
  templateUrl: './footer-container.html',
  styleUrl: './footer-container.css',
})

export class FooterContainer {}
