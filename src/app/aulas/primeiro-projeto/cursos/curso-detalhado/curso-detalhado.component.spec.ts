import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoDetalhadoComponent } from './curso-detalhado.component';

describe('CursoDetalhadoComponent', () => {
  let component: CursoDetalhadoComponent;
  let fixture: ComponentFixture<CursoDetalhadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursoDetalhadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoDetalhadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
