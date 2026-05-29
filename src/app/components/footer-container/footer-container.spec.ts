import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterContainer } from './footer-container';

describe('FooterContainer', () => {

  let component: FooterContainer;

  let fixture: ComponentFixture<FooterContainer>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({

      imports: [FooterContainer],
      
    }).compileComponents();

    fixture = TestBed.createComponent(FooterContainer);

    component = fixture.componentInstance;

    await fixture.whenStable();
  });

  it('should create', () => {

    expect(component).toBeTruthy();
  });
});
