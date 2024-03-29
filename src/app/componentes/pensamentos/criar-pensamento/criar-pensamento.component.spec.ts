import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarPensamentoComponent } from './criar-pensamento.component';

describe('CriarPensamentosComponent', () => {
  let component: CriarPensamentoComponent;
  let fixture: ComponentFixture<CriarPensamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarPensamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarPensamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
