import { ComponentFixture, TestBed } from '@angular/core/testing';
// Importa herramientas de Angular para crear y manejar pruebas de componentes

import { HomeContainer } from './home-container';
// Importa el componente que se va a testear

describe('HomeContainer', () => {
  // Agrupa todas las pruebas relacionadas con el componente HomeContainer

  let component: HomeContainer;
  // Variable donde se guardará la instancia del componente

  let fixture: ComponentFixture<HomeContainer>;
  // Permite acceder al DOM del componente y controlar su ciclo de vida en testing

  beforeEach(async () => {
    // Se ejecuta antes de cada prueba para preparar el entorno

    await TestBed.configureTestingModule({
      imports: [HomeContainer],
      // Configura el entorno de testing e importa el componente standalone
    }).compileComponents();
    // Compila el componente y sus dependencias

    fixture = TestBed.createComponent(HomeContainer);
    // Crea una instancia del componente dentro del entorno de pruebas

    component = fixture.componentInstance;
    // Obtiene la instancia lógica del componente

    await fixture.whenStable();
    // Espera a que Angular termine procesos asíncronos y estabilice el componente
  });

  it('should create', () => {
    // Prueba que valida que el componente se cree correctamente

    expect(component).toBeTruthy();
    // Verifica que la instancia del componente exista
  });
});