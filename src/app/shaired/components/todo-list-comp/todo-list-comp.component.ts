import { Component, OnInit } from '@angular/core';
import { TodoserviceService } from '../../service/todoservice.service';
import { SnakbarService } from '../../service/snakbar.service';
import { MatDialog } from '@angular/material/dialog';
import { GetconfirmComponent } from '../getconfirm/getconfirm.component';
import { Itodo } from '../../models/ofreturn';

@Component({
  selector: 'app-todo-list-comp',
  templateUrl: './todo-list-comp.component.html',
  styleUrls: ['./todo-list-comp.component.scss']
})
export class TodoListCompComponent implements OnInit {

  todoarr !: Array<Itodo>
  constructor(
    private _service: TodoserviceService,
    private _snakbar: SnakbarService,
    private _matdilog: MatDialog
  ) { }

  ngOnInit(): void {
    this.todoarr = this._service.todoarra
  }

  trackbyfun(index: number, item: Itodo) {
    return item.todoid
  }

  onRemove(id: string) {
    let matopen = this._matdilog.open(GetconfirmComponent, {
      width: '450px',
      disableClose: true,
      data: `Are you sure do you want to delete this todo Item with id ${id}`
    })

    matopen.afterClosed().subscribe(data => {
      if (data === true) {
        this._service.removetodo(id)
          .subscribe({
            next: res => {
              this._snakbar.OpenSnakbar(res.msg)
            },
            error: err => {
              console.log(err)
            }
          })
      }
    })
  }

  onEdit(todo: Itodo) {
    this._service.EditSubject$.next(todo)
  }

}
