import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoContainer } from './contacto-container';

describe('ContactoContainer', () => {

  let component: ContactoContainer;

  let fixture: ComponentFixture<ContactoContainer>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [ContactoContainer],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactoContainer);

    component = fixture.componentInstance;

    await fixture.whenStable();
  });

  it('should create', () => {

    expect(component).toBeTruthy();
  });
});
