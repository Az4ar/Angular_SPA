import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrinquedosMComponent } from './brinquedos-m.component';

describe('BrinquedosMComponent', () => {
  let component: BrinquedosMComponent;
  let fixture: ComponentFixture<BrinquedosMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrinquedosMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrinquedosMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
