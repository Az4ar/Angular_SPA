import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveisInfaComponent } from './moveis-infa.component';

describe('MoveisInfaComponent', () => {
  let component: MoveisInfaComponent;
  let fixture: ComponentFixture<MoveisInfaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoveisInfaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveisInfaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
