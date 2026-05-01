import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveLoanComponent } from './remove-loan.component';

describe('RemoveLoanComponent', () => {
  let component: RemoveLoanComponent;
  let fixture: ComponentFixture<RemoveLoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemoveLoanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoveLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
