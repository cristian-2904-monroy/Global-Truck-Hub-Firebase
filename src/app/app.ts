import { Component, signal } from '@angular/core';

import { ContainerNav } from "./components/container-nav/container-nav";

import { FooterContainer } from "./components/footer-container/footer-container";

import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',

  standalone: true,

  imports: [ContainerNav, FooterContainer, RouterOutlet],

  templateUrl: './app.html',

  styleUrl: './app.css'
})
export class App {

}
