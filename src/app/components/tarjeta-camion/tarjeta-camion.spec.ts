import { ComponentFixture, TestBed } from '@angular/core/testing';
// Importa las herramientas que Angular utiliza para construir y ejecutar pruebas unitarias.

import { TarjetaCamion } from './tarjeta-camion';
// Trae el componente TarjetaCamion que será evaluado en este archivo.

describe('TarjetaCamion', () => {
  // Agrupa todas las pruebas relacionadas con la tarjeta del camión.

  let component: TarjetaCamion;
  // Variable donde se almacenará la instancia principal del componente.

  let fixture: ComponentFixture<TarjetaCamion>;
  // Guarda el entorno de pruebas que incluye la vista y la lógica del componente.

  beforeEach(async () => {
    // Este bloque se ejecuta antes de cada prueba para preparar nuevamente el entorno.

    await TestBed.configureTestingModule({
      // Configura un módulo temporal que simula el comportamiento real de Angular.

      imports: [TarjetaCamion],
      // Registra el componente necesario para ejecutar las pruebas correctamente.

    }).compileComponents();
    // Compila el componente y deja lista su estructura antes de iniciar los tests.

    fixture = TestBed.createComponent(TarjetaCamion);
    // Crea una instancia simulada del componente dentro del entorno de testing.

    component = fixture.componentInstance;
    // Obtiene acceso directo a la instancia creada del componente.

    await fixture.whenStable();
    // Espera a que finalicen procesos asíncronos pendientes antes de continuar.
  });

  it('should create', () => {
    // Verifica que el componente pueda crearse correctamente sin errores.

    expect(component).toBeTruthy();
    // Comprueba que la instancia exista y tenga un valor válido.
  });
});