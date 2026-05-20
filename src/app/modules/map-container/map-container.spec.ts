import { ComponentFixture, TestBed } from '@angular/core/testing';
// Importa herramientas de Angular para pruebas unitarias de componentes

import { MapContainer } from './map-container';
// Importa el componente que se va a testear

describe('MapContainer', () => {
  // Agrupa las pruebas relacionadas con el componente MapContainer

  let component: MapContainer;
  // Variable donde se guardará la instancia del componente

  let fixture: ComponentFixture<MapContainer>;
  // Permite interactuar con el DOM del componente en el entorno de testing

  beforeEach(async () => {
    // Se ejecuta antes de cada prueba para preparar el entorno

    await TestBed.configureTestingModule({
      imports: [MapContainer],
      // Configura el entorno de pruebas e importa el componente standalone
    }).compileComponents();
    // Compila el componente y sus dependencias

    fixture = TestBed.createComponent(MapContainer);
    // Crea una instancia del componente dentro del entorno de testing

    component = fixture.componentInstance;
    // Obtiene la instancia lógica del componente

    await fixture.whenStable();
    // Espera a que Angular termine procesos asíncronos y estabilice el componente
  });

  it('should create', () => {
    // Verifica que el componente se cree correctamente

    expect(component).toBeTruthy();
    // Comprueba que la instancia del componente existe
  });
});