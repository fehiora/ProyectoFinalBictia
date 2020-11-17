import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportarSintomasComponent } from './reportar-sintomas.component';

describe('ReportarSintomasComponent', () => {
  let component: ReportarSintomasComponent;
  let fixture: ComponentFixture<ReportarSintomasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportarSintomasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportarSintomasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
