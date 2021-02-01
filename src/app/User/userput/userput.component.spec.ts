import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserputComponent } from './userput.component';

describe('UserputComponent', () => {
  let component: UserputComponent;
  let fixture: ComponentFixture<UserputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
