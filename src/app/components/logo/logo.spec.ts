import { ComponentFixture, TestBed } from '@angular/core/testing';
// Importa las utilidades que Angular utiliza para construir y ejecutar pruebas unitarias.

import { Logo } from './logo';
// Trae el componente Logo que será probado en este archivo.

describe('Logo', () => {
  // Agrupa todas las pruebas relacionadas con el componente Logo.

  let component: Logo;
  // Variable donde se almacenará la instancia del componente durante las pruebas.

  let fixture: ComponentFixture<Logo>;
  // Guarda el entorno de prueba que incluye la lógica y la plantilla HTML del componente.

  beforeEach(async () => {
    // Prepara nuevamente el entorno antes de ejecutar cada prueba.

    await TestBed.configureTestingModule({
      // Configura un módulo temporal para simular el comportamiento de Angular.

      imports: [Logo],
      // Registra el componente Logo para que pueda utilizarse en el entorno de pruebas.

    }).compileComponents();
    // Compila el componente y deja lista su estructura antes de evaluarlo.

    fixture = TestBed.createComponent(Logo);
    // Crea una instancia simulada del componente dentro del entorno de testing.

    component = fixture.componentInstance;
    // Obtiene acceso directo a la instancia creada del componente.

    await fixture.whenStable();
    // Espera a que finalicen procesos asíncronos pendientes antes de continuar.
  });

  it('should create', () => {
    // Verifica que el componente pueda generarse correctamente sin errores.

    expect(component).toBeTruthy();
    // Comprueba que la instancia exista y tenga un valor válido.
  });
});