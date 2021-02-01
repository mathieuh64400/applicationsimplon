import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagegetComponent } from './messageget.component';

describe('MessagegetComponent', () => {
  let component: MessagegetComponent;
  let fixture: ComponentFixture<MessagegetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessagegetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagegetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
