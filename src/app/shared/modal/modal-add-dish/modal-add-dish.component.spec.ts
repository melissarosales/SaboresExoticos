import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddDishComponent } from './modal-add-dish.component';

describe('ModalAddDishComponent', () => {
  let component: ModalAddDishComponent;
  let fixture: ComponentFixture<ModalAddDishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAddDishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddDishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
