import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudenEditComponent } from './studen-edit.component';

describe('StudenEditComponent', () => {
  let component: StudenEditComponent;
  let fixture: ComponentFixture<StudenEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudenEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudenEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
