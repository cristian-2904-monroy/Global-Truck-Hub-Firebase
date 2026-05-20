import { ComponentFixture, TestBed } from '@angular/core/testing';
// Importa las herramientas de testing de Angular para crear y manipular componentes en pruebas

import { ContactoForm } from './contacto-form';
// Importa el componente que se va a probar

describe('ContactoForm', () => {
  // Agrupa todas las pruebas relacionadas con el componente ContactoForm

  let component: ContactoForm;
  // Variable donde se almacenará la instancia del componente

  let fixture: ComponentFixture<ContactoForm>;
  // Permite acceder al DOM del componente y controlar su ciclo de vida

  beforeEach(async () => {
    // Se ejecuta antes de cada prueba para preparar el entorno

    await TestBed.configureTestingModule({
      imports: [ContactoForm],
      // Configura el módulo de pruebas e importa el componente standalone
    }).compileComponents();
    // Compila el componente y sus dependencias

    fixture = TestBed.createComponent(ContactoForm);
    // Crea una instancia del componente dentro del entorno de testing

    component = fixture.componentInstance;
    // Obtiene la instancia lógica del componente para poder probarla

    await fixture.whenStable();
    // Espera a que Angular termine procesos asíncronos y estabilice el componente
  });

  it('should create', () => {
    // Prueba que verifica si el componente se crea correctamente

    expect(component).toBeTruthy();
    // Comprueba que la instancia del componente existe y es válida
  });
});