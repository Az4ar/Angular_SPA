import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrinquedosGComponent } from './brinquedos-g.component';

describe('BrinquedosGComponent', () => {
  let component: BrinquedosGComponent;
  let fixture: ComponentFixture<BrinquedosGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrinquedosGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrinquedosGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
