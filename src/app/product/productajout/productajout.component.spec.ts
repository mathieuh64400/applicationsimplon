import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductajoutComponent } from './productajout.component';

describe('ProductajoutComponent', () => {
  let component: ProductajoutComponent;
  let fixture: ComponentFixture<ProductajoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductajoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductajoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
