import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteCatalogo } from './componente-catalogo';

describe('ComponenteCatalogo', () => {

  let component: ComponenteCatalogo;

  let fixture: ComponentFixture<ComponenteCatalogo>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({

      imports: [ComponenteCatalogo],

    }).compileComponents();

    fixture = TestBed.createComponent(ComponenteCatalogo);

    component = fixture.componentInstance;

    await fixture.whenStable();
  });

  it('should create', () => {

    expect(component).toBeTruthy();
  });
});
