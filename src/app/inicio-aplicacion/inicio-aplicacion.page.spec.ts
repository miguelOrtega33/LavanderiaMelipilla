import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InicioAplicacionPage } from './inicio-aplicacion.page';

describe('InicioAplicacionPage', () => {
  let component: InicioAplicacionPage;
  let fixture: ComponentFixture<InicioAplicacionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InicioAplicacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
