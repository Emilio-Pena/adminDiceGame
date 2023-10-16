import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondStatusComponent } from './second-status.component';

describe('SecondStatusComponent', () => {
  let component: SecondStatusComponent;
  let fixture: ComponentFixture<SecondStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
