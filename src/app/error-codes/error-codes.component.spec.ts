import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorCodesComponent } from './error-codes.component';

describe('ErrorCodesComponent', () => {
  let component: ErrorCodesComponent;
  let fixture: ComponentFixture<ErrorCodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorCodesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorCodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
