import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorCodeListComponent } from './error-code-list.component';

describe('ErrorCodeListComponent', () => {
  let component: ErrorCodeListComponent;
  let fixture: ComponentFixture<ErrorCodeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorCodeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorCodeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
