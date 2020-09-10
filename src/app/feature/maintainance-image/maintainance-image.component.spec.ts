import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainanceImageComponent } from './maintainance-image.component';

describe('MaintainanceImageComponent', () => {
  let component: MaintainanceImageComponent;
  let fixture: ComponentFixture<MaintainanceImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintainanceImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintainanceImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
