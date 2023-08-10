import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cursos1Component } from './cursos1.component';

describe('Cursos1Component', () => {
  let component: Cursos1Component;
  let fixture: ComponentFixture<Cursos1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cursos1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cursos1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
