import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoFormCompComponent } from './todo-form-comp.component';

describe('TodoFormCompComponent', () => {
  let component: TodoFormCompComponent;
  let fixture: ComponentFixture<TodoFormCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoFormCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoFormCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
