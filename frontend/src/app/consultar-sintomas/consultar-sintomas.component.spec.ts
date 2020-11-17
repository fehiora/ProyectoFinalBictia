import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarSintomasComponent } from './consultar-sintomas.component';

describe('ConsultarSintomasComponent', () => {
  let component: ConsultarSintomasComponent;
  let fixture: ComponentFixture<ConsultarSintomasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultarSintomasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarSintomasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
