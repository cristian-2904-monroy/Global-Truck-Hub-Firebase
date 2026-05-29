import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerNav } from './container-nav';

describe('ContainerNav', () => {

  let component: ContainerNav;

  let fixture: ComponentFixture<ContainerNav>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({

      imports: [ContainerNav],
      
    }).compileComponents();

    fixture = TestBed.createComponent(ContainerNav);

    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {

    expect(component).toBeTruthy();
  });
});
