import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductlistconsComponent } from './productlistcons.component';

describe('ProductlistconsComponent', () => {
  let component: ProductlistconsComponent;
  let fixture: ComponentFixture<ProductlistconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductlistconsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductlistconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
