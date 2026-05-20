import { ComponentFixture, TestBed } from '@angular/core/testing';
// Importa las herramientas que Angular utiliza para crear y ejecutar pruebas unitarias.

import { RedesSociales } from './redes-sociales';
// Trae el componente RedesSociales que será evaluado en este archivo de pruebas.

describe('RedesSociales', () => {
  // Agrupa todas las pruebas relacionadas con el componente de redes sociales.

  let component: RedesSociales;
  // Variable donde se almacenará la instancia principal del componente.

  let fixture: ComponentFixture<RedesSociales>;
  // Guarda el entorno de pruebas que contiene la lógica y la vista del componente.

  beforeEach(async () => {
    // Este bloque se ejecuta antes de cada prueba para preparar el entorno.

    await TestBed.configureTestingModule({
      // Configura un módulo temporal que simula el comportamiento real de Angular.

      imports: [RedesSociales],
      // Registra el componente necesario para realizar las pruebas correctamente.

    }).compileComponents();
    // Compila la plantilla y deja listo el componente antes de utilizarlo.

    fixture = TestBed.createComponent(RedesSociales);
    // Crea una instancia simulada del componente dentro del entorno de testing.

    component = fixture.componentInstance;
    // Obtiene acceso directo a la instancia creada del componente.

    await fixture.whenStable();
    // Espera a que finalicen tareas asíncronas pendientes antes de continuar.
  });

  it('should create', () => {
    // Verifica que el componente pueda inicializarse correctamente.

    expect(component).toBeTruthy();
    // Comprueba que la instancia exista y no tenga un valor nulo o inválido.
  });
});