import { Injectable } from '@angular/core';

import { Observable, of, Subject } from 'rxjs';
import { Ires, Itodo } from '../models/ofreturn';

@Injectable({
  providedIn: 'root'
})
export class TodoserviceService {

  todoarra: Itodo[] = [
    {
      todoid: '1',
      title: "delectus aut autem facilis et officia qui"
    },
    {

      todoid: '2',
      title: "quis ut nam facilis et officia qui"
    },
    {

      todoid: '3',
      title: "fugiat veniam minus facilis et officia qui  "
    },
    {

      todoid: '4',
      title: "et porro tempora facilis et officia qui"
    },
    {

      todoid: '5',
      title: "laboriosam mollitia et"
    },
    {

      todoid: '6',
      title: "qui ullam ratione quibusdam voluptatem quia omnis"
    }
  ]
  EditSubject$: Subject<Itodo> = new Subject<Itodo>()
  constructor() { }

  addTodo(todo: Itodo): Observable<Ires<Itodo>> {
    this.todoarra.push(todo)
    return of({
      msg: ` The Todo item with id ${todo.todoid} is added Successfully!!!`,
      data: todo
    })
  }

  removetodo(id: string): Observable<Ires<Itodo>> {
    let getindex = this.todoarra.findIndex((ele) => ele.todoid === id)
    let item = this.todoarra.splice(getindex, 1)
    return of({
      msg: ` The Todo item with id ${item[0].todoid} is removed Successfully!!!`,
      data: item[0]
    })
  }

  updatetodo(todo: Itodo): Observable<Ires<Itodo>> {
    let getindex = this.todoarra.findIndex((ele) => ele.todoid === todo.todoid)
    this.todoarra[getindex] = todo

    return of({
      msg: ` The Todo item with id ${todo.todoid} is Updated Successfully!!!`,
      data: todo
    })
  }

}
