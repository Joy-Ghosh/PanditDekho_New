import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanditRegistrationComponent } from './pandit-registration.component';

describe('PanditRegistrationComponent', () => {
  let component: PanditRegistrationComponent;
  let fixture: ComponentFixture<PanditRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanditRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanditRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
