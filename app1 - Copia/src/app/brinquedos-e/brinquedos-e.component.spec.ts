import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrinquedosEComponent } from './brinquedos-e.component';

describe('BrinquedosEComponent', () => {
  let component: BrinquedosEComponent;
  let fixture: ComponentFixture<BrinquedosEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrinquedosEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrinquedosEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
