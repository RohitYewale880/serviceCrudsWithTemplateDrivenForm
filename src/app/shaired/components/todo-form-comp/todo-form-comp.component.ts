import { Component, OnInit, ViewChild } from '@angular/core';
import { Itodo } from '../../models/todo';
import { NgForm } from '@angular/forms';
import { TodoserviceService } from '../../service/todoservice.service';
import { SnakbarService } from '../../service/snakbar.service';

@Component({
  selector: 'app-todo-form-comp',
  templateUrl: './todo-form-comp.component.html',
  styleUrls: ['./todo-form-comp.component.scss']
})
export class TodoFormCompComponent implements OnInit {

  isineditmode: boolean = false
  edittodo!: Itodo
  @ViewChild('todoform') todoform!: NgForm
  constructor(
    private _service: TodoserviceService,
    private _snakbar: SnakbarService
  ) { }

  ngOnInit(): void {
    this.onEdit()
  }

  onTodoadd() {
    if (this.todoform.valid) {
      let newobj: Itodo = { ...this.todoform.value, todoid: Date.now().toString() }

      this._service.addTodo(newobj)
        .subscribe({
          next: res => {
            this._snakbar.OpenSnakbar(res.msg)
            this.todoform.reset()
          },
          error: err => {
            console.log(err)
          }
        })
    }
  }

   onEdit(){
    this._service.EditSubject$.subscribe({
      next: res => {
        this.edittodo = res
        this.isineditmode =true

        this.todoform.form.patchValue(res)
      }
    })
    }

    onUpdatetodo(){
      let updated_obj = { ...this.todoform.value, todoid : this.edittodo.todoid}

      this._service.updatetodo(updated_obj)
        .subscribe({
          next: res => {
            this._snakbar.OpenSnakbar(res.msg)
            this.isineditmode =false
            this.todoform.reset()
          },
          error: err => {
            console.log(err)
          }
        })
    }
}
