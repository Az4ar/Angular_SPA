import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspumadosComponent } from './espumados.component';

describe('EspumadosComponent', () => {
  let component: EspumadosComponent;
  let fixture: ComponentFixture<EspumadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspumadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspumadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
