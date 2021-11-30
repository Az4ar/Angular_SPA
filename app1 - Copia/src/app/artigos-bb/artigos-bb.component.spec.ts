import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtigosBbComponent } from './artigos-bb.component';

describe('ArtigosBbComponent', () => {
  let component: ArtigosBbComponent;
  let fixture: ComponentFixture<ArtigosBbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtigosBbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtigosBbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
