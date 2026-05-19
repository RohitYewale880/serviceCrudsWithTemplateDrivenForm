import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../service/student.service';
import { Istd } from '../../models/ofreturn';
import { SnakbarService } from '../../service/snakbar.service';
import { MatDialog } from '@angular/material/dialog';
import { GetconfirmComponent } from '../getconfirm/getconfirm.component';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  stdarr!: Array<Istd>
  constructor(
    private _stdservice: StudentService,
    private _snakbar: SnakbarService,
    private _matdilog: MatDialog
  ) { }

  ngOnInit(): void {
    this.fetchdata()
  }

  trackByfun(index: number, item: Istd) {
    return item.id
  }

  fetchdata() {
    this._stdservice.fetchdata().subscribe({
      next: res => {
        this.stdarr = res
      }
    })
  }

  oRemove(id: string) {
    let getconfirm = this._matdilog.open(GetconfirmComponent, {
      width: '500px',
      disableClose: true,
      data: `Are you sure do you want to remove this student with id ${id}`
    })

    getconfirm.afterClosed().subscribe({
      next: res => {
        if (res === true) {
          this._stdservice.onRemove(id)
            .subscribe({
              next: res => {
                this._snakbar.OpenSnakbar(res.msg)
              },
              error:err => {
                console.log(err)
              }
            })
        }
      }
    })
  }

  onEdit(std : Istd){
    this._stdservice.editemitstd$.next(std)
  }

}
