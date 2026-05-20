import { ComponentFixture, TestBed } from '@angular/core/testing';
// Importa las herramientas necesarias para crear y ejecutar pruebas unitarias en Angular.

import { ComponenteCatalogo } from './componente-catalogo';
// Trae el componente del catálogo que será probado en este archivo.

describe('ComponenteCatalogo', () => {
  // Agrupa todas las pruebas relacionadas con el componente del catálogo.

  let component: ComponenteCatalogo;
  // Variable que almacenará la instancia principal del componente.

  let fixture: ComponentFixture<ComponenteCatalogo>;
  // Guarda el entorno de pruebas que incluye la lógica y la vista del componente.

  beforeEach(async () => {
    // Este bloque se ejecuta antes de cada prueba para preparar el entorno nuevamente.

    await TestBed.configureTestingModule({
      // Configura un módulo temporal utilizado exclusivamente durante las pruebas.

      imports: [ComponenteCatalogo],
      // Registra el componente que será utilizado dentro del entorno de testing.

    }).compileComponents();
    // Compila la plantilla y deja listo el componente antes de iniciar los tests.

    fixture = TestBed.createComponent(ComponenteCatalogo);
    // Genera una instancia simulada del componente para poder interactuar con él.

    component = fixture.componentInstance;
    // Obtiene acceso directo a la instancia creada del componente.

    await fixture.whenStable();
    // Espera a que finalicen tareas asíncronas pendientes antes de continuar.
  });

  it('should create', () => {
    // Comprueba que el componente pueda inicializarse correctamente.

    expect(component).toBeTruthy();
    // Verifica que la instancia exista y tenga un valor válido.
  });
});