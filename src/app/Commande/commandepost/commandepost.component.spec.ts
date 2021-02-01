import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandepostComponent } from './commandepost.component';

describe('CommandepostComponent', () => {
  let component: CommandepostComponent;
  let fixture: ComponentFixture<CommandepostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandepostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandepostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
