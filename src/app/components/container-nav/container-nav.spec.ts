import { ComponentFixture, TestBed } from '@angular/core/testing';
// Importa las herramientas de Angular utilizadas para crear y ejecutar pruebas unitarias.

import { ContainerNav } from './container-nav';
// Trae el componente que será evaluado durante las pruebas.

describe('ContainerNav', () => {
// Agrupa todas las pruebas relacionadas con el componente ContainerNav.

  let component: ContainerNav;
  // Declara una variable que almacenará la instancia del componente.

  let fixture: ComponentFixture<ContainerNav>;
  // Guarda una referencia al entorno de prueba del componente y su plantilla HTML.

  beforeEach(async () => {
  // Ejecuta este bloque antes de cada prueba para preparar el entorno correctamente.

    await TestBed.configureTestingModule({
    // Configura un módulo de pruebas simulando el funcionamiento real de Angular.

      imports: [ContainerNav],
      // Registra el componente que será utilizado dentro de las pruebas.
      
    }).compileComponents();
    // Compila el componente y su plantilla antes de comenzar los tests.

    fixture = TestBed.createComponent(ContainerNav);
    // Crea una instancia simulada del componente para poder probarlo.

    component = fixture.componentInstance;
    // Obtiene la instancia directa del componente desde el entorno de pruebas.

    await fixture.whenStable();
    // Espera a que finalicen todas las tareas asíncronas antes de continuar.
  });

  it('should create', () => {
  // Define una prueba que verifica si el componente puede crearse correctamente.

    expect(component).toBeTruthy();
    // Comprueba que la instancia del componente exista y no sea nula.
  });
});