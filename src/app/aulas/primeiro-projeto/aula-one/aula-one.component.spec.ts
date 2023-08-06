import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AulaOneComponent } from './aula-one.component';

describe('AulaOneComponent', () => {
  let component: AulaOneComponent;
  let fixture: ComponentFixture<AulaOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AulaOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AulaOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
