import { ComponentFixture, TestBed } from '@angular/core/testing';
// Importa herramientas de testing de Angular: 
// ComponentFixture para controlar el componente en pruebas y TestBed para configurarlo

import { ContactoContainer } from './contacto-container';
// Importa el componente que se va a probar

describe('ContactoContainer', () => {
  // Agrupa todas las pruebas relacionadas con este componente

  let component: ContactoContainer;
  // Variable donde se guardará la instancia del componente

  let fixture: ComponentFixture<ContactoContainer>;
  // Fixture que permite acceder al DOM y controlar el ciclo de vida del componente

  beforeEach(async () => {
    // Se ejecuta antes de cada prueba

    await TestBed.configureTestingModule({
      imports: [ContactoContainer],
      // Se configura el entorno de prueba e importa el componente standalone
    }).compileComponents();
    // Compila el componente y sus dependencias

    fixture = TestBed.createComponent(ContactoContainer);
    // Crea una instancia del componente dentro del entorno de testing

    component = fixture.componentInstance;
    // Obtiene la instancia lógica del componente

    await fixture.whenStable();
    // Espera a que Angular termine de estabilizar bindings y tareas asíncronas
  });

  it('should create', () => {
    // Caso de prueba: verifica que el componente se cree correctamente

    expect(component).toBeTruthy();
    // Comprueba que la instancia del componente existe y es válida
  });
});