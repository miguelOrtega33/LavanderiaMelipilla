import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProblemaPage } from './problema.page';

describe('ProblemaPage', () => {
  let component: ProblemaPage;
  let fixture: ComponentFixture<ProblemaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProblemaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
