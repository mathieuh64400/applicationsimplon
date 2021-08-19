import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullcalandarComponent } from './fullcalandar.component';

describe('FullcalandarComponent', () => {
  let component: FullcalandarComponent;
  let fixture: ComponentFixture<FullcalandarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullcalandarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullcalandarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
