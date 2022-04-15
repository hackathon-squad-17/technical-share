import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAboutComponent } from './register-about.component';

describe('RegisterAboutComponent', () => {
  let component: RegisterAboutComponent;
  let fixture: ComponentFixture<RegisterAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
