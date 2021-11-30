import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialInclusaoComponent } from './material-inclusao.component';

describe('MaterialInclusaoComponent', () => {
  let component: MaterialInclusaoComponent;
  let fixture: ComponentFixture<MaterialInclusaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialInclusaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialInclusaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
