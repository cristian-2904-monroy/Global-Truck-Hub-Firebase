import { ComponentFixture, TestBed } from '@angular/core/testing';
// Importa las herramientas necesarias para construir y ejecutar pruebas en Angular.

import { NavButton } from './nav-button';
// Trae el componente NavButton que será evaluado durante el test.

describe('NavButton', () => {
  // Agrupa todas las pruebas relacionadas con el componente del botón de navegación.

  let component: NavButton;
  // Variable donde se almacenará la instancia del componente.

  let fixture: ComponentFixture<NavButton>;
  // Guarda el entorno de pruebas que incluye tanto la lógica como la plantilla HTML.

  beforeEach(async () => {
    // Se ejecuta antes de cada prueba para reiniciar el entorno correctamente.

    await TestBed.configureTestingModule({
      // Configura un módulo temporal utilizado únicamente durante las pruebas.

      imports: [NavButton],
      // Registra el componente que será utilizado dentro del entorno de testing.

    }).compileComponents();
    // Compila el componente y deja preparada su estructura antes de probarlo.

    fixture = TestBed.createComponent(NavButton);
    // Genera una instancia simulada del componente para poder interactuar con él.

    component = fixture.componentInstance;
    // Obtiene acceso directo a la instancia creada del componente.

    await fixture.whenStable();
    // Espera a que terminen procesos asíncronos pendientes antes de continuar.
  });

  it('should create', () => {
    // Comprueba que el componente pueda crearse correctamente sin fallos.

    expect(component).toBeTruthy();
    // Verifica que la instancia exista y contenga un valor válido.
  });