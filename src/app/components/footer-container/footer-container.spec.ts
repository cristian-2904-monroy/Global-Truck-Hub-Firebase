import { ComponentFixture, TestBed } from '@angular/core/testing';
// Importa las herramientas que Angular utiliza para construir y ejecutar pruebas unitarias.

import { FooterContainer } from './footer-container';
// Trae el componente que será evaluado durante el test.

describe('FooterContainer', () => {
  // Agrupa todas las pruebas relacionadas con el componente FooterContainer.

  let component: FooterContainer;
  // Variable que almacenará la instancia real del componente.

  let fixture: ComponentFixture<FooterContainer>;
  // Guarda el entorno de pruebas que incluye tanto la lógica como la plantilla HTML.

  beforeEach(async () => {
    // Se ejecuta antes de cada prueba para preparar nuevamente el entorno.

    await TestBed.configureTestingModule({
      // Configura un módulo temporal de Angular exclusivo para las pruebas.

      imports: [FooterContainer],
      // Registra el componente que se necesita cargar dentro del entorno de test.
      
    }).compileComponents();
    // Compila el componente y deja lista su estructura antes de probarlo.

    fixture = TestBed.createComponent(FooterContainer);
    // Crea una instancia simulada del componente dentro del entorno de pruebas.

    component = fixture.componentInstance;
    // Obtiene acceso directo a la instancia del componente creado.

    await fixture.whenStable();
    // Espera a que finalicen procesos asíncronos pendientes antes de continuar.
  });

  it('should create', () => {
    // Comprueba que el componente pueda crearse correctamente sin errores.

    expect(component).toBeTruthy();
    // Verifica que la instancia exista y tenga un valor válido.
  });
});