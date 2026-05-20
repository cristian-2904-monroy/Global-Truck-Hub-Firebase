import { ComponentFixture, TestBed } from '@angular/core/testing';
// Importa las utilidades de Angular para pruebas unitarias

import { FichaTecnica } from './ficha-tecnica';
// Importa el componente que se va a testear

describe('FichaTecnica', () => {
  // Agrupa todas las pruebas relacionadas con el componente FichaTecnica

  let component: FichaTecnica;
  // Variable que almacenará la instancia del componente

  let fixture: ComponentFixture<FichaTecnica>;
  // Permite acceder al DOM del componente y manejar su ciclo de vida en pruebas

  beforeEach(async () => {
    // Se ejecuta antes de cada test para preparar el entorno

    await TestBed.configureTestingModule({
      imports: [FichaTecnica],
      // Configura el entorno de testing e importa el componente standalone
    }).compileComponents();
    // Compila el componente y sus dependencias

    fixture = TestBed.createComponent(FichaTecnica);
    // Crea una instancia del componente dentro del entorno de pruebas

    component = fixture.componentInstance;
    // Obtiene la instancia lógica del componente para manipularla

    await fixture.whenStable();
    // Espera a que Angular termine procesos asíncronos y estabilice el componente
  });

  it('should create', () => {
    // Caso de prueba que valida que el componente se cree correctamente

    expect(component).toBeTruthy();
    // Verifica que la instancia del componente exista
  });
});