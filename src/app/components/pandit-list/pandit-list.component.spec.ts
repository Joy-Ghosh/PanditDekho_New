import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanditListComponent } from './pandit-list.component';

describe('PanditListComponent', () => {
  let component: PanditListComponent;
  let fixture: ComponentFixture<PanditListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanditListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanditListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
