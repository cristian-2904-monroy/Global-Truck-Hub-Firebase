import { TestBed } from '@angular/core/testing';
// Importa el módulo de testing de Angular para configurar y ejecutar pruebas

import { App } from './app';
// Importa el componente principal de la aplicación

describe('App', () => {
  // Agrupa las pruebas relacionadas con el componente App

  beforeEach(async () => {
    // Se ejecuta antes de cada prueba para preparar el entorno

    await TestBed.configureTestingModule({
      imports: [App],
      // Configura el entorno de testing e importa el componente standalone
    }).compileComponents();
    // Compila el componente y sus dependencias
  });

  it('should create the app', () => {
    // Prueba que verifica que la aplicación se cree correctamente

    const fixture = TestBed.createComponent(App);
    // Crea una instancia del componente en el entorno de testing

    const app = fixture.componentInstance;
    // Obtiene la instancia lógica del componente

    expect(app).toBeTruthy();
    // Verifica que el componente exista y se haya creado correctamente
  });

  it('should render title', async () => {
    // Prueba que valida que el título se renderice correctamente en el HTML

    const fixture = TestBed.createComponent(App);
    // Crea una nueva instancia del componente

    await fixture.whenStable();
    // Espera a que Angular termine de estabilizar el renderizado

    const compiled = fixture.nativeElement as HTMLElement;
    // Accede al DOM del componente renderizado

    expect(compiled.querySelector('h1')?.textContent)
    // Busca el elemento h1 y obtiene su contenido de texto

      .toContain('Hello, Global-Truck-Hub');
    // Verifica que el título contenga el texto esperado
  });
});