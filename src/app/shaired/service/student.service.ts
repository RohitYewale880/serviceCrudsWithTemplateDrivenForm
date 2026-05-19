import { Injectable } from '@angular/core';

import { Observable, of, Subject } from 'rxjs';
import { Ires, Istd } from '../models/ofreturn';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  stdArr: Array<Istd> = [
    {
      id: '1',
      fname: 'Rohit',
      lname: 'Sharma',
      email: 'rohit@gmail.com',
      contact: '9876543210',
      isConfirmed: true
    },
    {
      id: '2',
      fname: 'Amit',
      lname: 'Patil',
      email: 'amit@gmail.com',
      contact: '9123456780',
      isConfirmed: false
    },
    {
      id: '3',
      fname: 'Sneha',
      lname: 'Joshi',
      email: 'sneha@gmail.com',
      contact: '9988776655',
      isConfirmed: true
    },
    {
      id: '4',
      fname: 'Priya',
      lname: 'Desai',
      email: 'priya@gmail.com',
      contact: '9012345678',
      isConfirmed: false
    },
    {
      id: '5',
      fname: 'Vikas',
      lname: 'Kumar',
      email: 'vikas@gmail.com',
      contact: '9090909090',
      isConfirmed: true
    }
  ];
  editemitstd$ : Subject<Istd> = new Subject<Istd>()
  constructor() { }

  fetchdata(): Observable<Istd[]> {
    return of(this.stdArr)
  }

  onAddStd(std: Istd): Observable<Ires<Istd>> {
    this.stdArr.push(std)
    return of({
      msg: `The Student with Id ${std.id} is Added Successfully!!!`,
      data: std
    })
  }

  onRemove(id:string) : Observable<Ires<Istd>>{
    let getindex = this.stdArr.findIndex((ele) => ele.id === id)
    let std = this.stdArr.splice(getindex, 1)

    return of({
      msg:`The Student with id ${std[0].id} is removed successfully!!!`,
      data:std[0]
    })
  }

  updateStd(std : Istd) : Observable<Ires<Istd>>{
    let getindex =  this.stdArr.findIndex((ele) => ele.id === std.id)
    this.stdArr[getindex] = std

    return of({
      msg:`The student with id ${std.id} id Updated successfully!!!`,
      data: std
    })
  }
}
