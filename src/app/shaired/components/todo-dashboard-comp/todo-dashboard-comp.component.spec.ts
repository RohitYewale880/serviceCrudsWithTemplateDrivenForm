import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDashboardCompComponent } from './todo-dashboard-comp.component';

describe('TodoDashboardCompComponent', () => {
  let component: TodoDashboardCompComponent;
  let fixture: ComponentFixture<TodoDashboardCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoDashboardCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoDashboardCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
