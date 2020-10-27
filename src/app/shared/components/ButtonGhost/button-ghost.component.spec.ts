import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonGhostComponent } from './button-ghost.component';

describe('ButtonGhostComponent', () => {
  let component: ButtonGhostComponent;
  let fixture: ComponentFixture<ButtonGhostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonGhostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonGhostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
