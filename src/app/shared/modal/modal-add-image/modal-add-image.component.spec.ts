import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddImageComponent } from './modal-add-image.component';

describe('ModalAddImageComponent', () => {
  let component: ModalAddImageComponent;
  let fixture: ComponentFixture<ModalAddImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAddImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
