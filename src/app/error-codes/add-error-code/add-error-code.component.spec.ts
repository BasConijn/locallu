import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddErrorCodeComponent } from './add-error-code.component';

describe('AddErrorCodeComponent', () => {
  let component: AddErrorCodeComponent;
  let fixture: ComponentFixture<AddErrorCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddErrorCodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddErrorCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
