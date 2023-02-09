import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProManagementComponent } from './pro-management.component';

describe('ProManagementComponent', () => {
  let component: ProManagementComponent;
  let fixture: ComponentFixture<ProManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
