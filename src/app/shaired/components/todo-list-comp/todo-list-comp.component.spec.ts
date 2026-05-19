import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListCompComponent } from './todo-list-comp.component';

describe('TodoListCompComponent', () => {
  let component: TodoListCompComponent;
  let fixture: ComponentFixture<TodoListCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoListCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoListCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
