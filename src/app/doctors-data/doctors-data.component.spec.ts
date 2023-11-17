import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsDataComponent } from './doctors-data.component';

describe('DoctorsDataComponent', () => {
  let component: DoctorsDataComponent;
  let fixture: ComponentFixture<DoctorsDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorsDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoctorsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
