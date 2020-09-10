import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainanceMenuComponent } from './maintainance-menu.component';

describe('MaintainanceMenuComponent', () => {
  let component: MaintainanceMenuComponent;
  let fixture: ComponentFixture<MaintainanceMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintainanceMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintainanceMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
