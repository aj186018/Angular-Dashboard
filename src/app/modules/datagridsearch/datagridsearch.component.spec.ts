import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatagridsearchComponent } from './datagridsearch.component';

describe('DashboardComponent', () => {
  let component: DatagridsearchComponent;
  let fixture: ComponentFixture<DatagridsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatagridsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatagridsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
