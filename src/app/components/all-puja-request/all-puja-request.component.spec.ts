import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPujaRequestComponent } from './all-puja-request.component';

describe('AllPujaRequestComponent', () => {
  let component: AllPujaRequestComponent;
  let fixture: ComponentFixture<AllPujaRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPujaRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPujaRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
