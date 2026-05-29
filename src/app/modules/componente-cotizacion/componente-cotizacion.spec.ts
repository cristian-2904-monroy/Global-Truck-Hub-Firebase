import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteCotizacion } from './componente-cotizacion';

describe('ComponenteCotizacion', () => {

  let component: ComponenteCotizacion;

  let fixture: ComponentFixture<ComponenteCotizacion>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({

      imports: [ComponenteCotizacion],

    }).compileComponents();

    fixture = TestBed.createComponent(ComponenteCotizacion);

    component = fixture.componentInstance;

    await fixture.whenStable();
  });

  it('should create', () => {

    expect(component).toBeTruthy();
  });
});
