import { ComponentFixture, TestBed } from '@angular/core/testing';
// Importa las herramientas que Angular utiliza para crear y ejecutar pruebas unitarias.

import { ComponenteCotizacion } from './componente-cotizacion';
// Trae el componente de cotización que será evaluado durante las pruebas.

describe('ComponenteCotizacion', () => {
  // Agrupa todas las pruebas relacionadas con el componente de cotización.

  let component: ComponenteCotizacion;
  // Variable donde se almacenará la instancia principal del componente.

  let fixture: ComponentFixture<ComponenteCotizacion>;
  // Guarda el entorno de pruebas que incluye tanto la lógica como la vista del componente.

  beforeEach(async () => {
    // Este bloque se ejecuta antes de cada prueba para preparar nuevamente el entorno.

    await TestBed.configureTestingModule({
      // Configura un módulo temporal que simula el funcionamiento real de Angular.

      imports: [ComponenteCotizacion],
      // Registra el componente necesario para realizar las pruebas correctamente.

    }).compileComponents();
    // Compila la estructura del componente antes de iniciar los tests.

    fixture = TestBed.createComponent(ComponenteCotizacion);
    // Crea una instancia simulada del componente dentro del entorno de testing.

    component = fixture.componentInstance;
    // Obtiene acceso directo a la instancia creada del componente.

    await fixture.whenStable();
    // Espera a que finalicen procesos asíncronos pendientes antes de continuar.
  });

  it('should create', () => {
    // Verifica que el componente pueda inicializarse correctamente sin errores.

    expect(component).toBeTruthy();
    // Comprueba que la instancia exista y tenga un valor válido.
  });
});