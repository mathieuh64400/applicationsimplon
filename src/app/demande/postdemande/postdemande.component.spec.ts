import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostdemandeComponent } from './postdemande.component';

describe('PostdemandeComponent', () => {
  let component: PostdemandeComponent;
  let fixture: ComponentFixture<PostdemandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostdemandeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostdemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
