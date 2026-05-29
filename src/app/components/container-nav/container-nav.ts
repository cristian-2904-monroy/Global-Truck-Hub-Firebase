import { Component } from '@angular/core';

import { Logo } from "../logo/logo";

import { NavButton } from "../nav-button/nav-button";

@Component({

  selector: 'app-container-nav',

  standalone: true,

  imports: [Logo, NavButton],

  templateUrl: './container-nav.html',

  styleUrl: './container-nav.css',
})

export class ContainerNav {}
