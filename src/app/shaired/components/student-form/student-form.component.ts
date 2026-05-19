import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StudentService } from '../../service/student.service';
import { SnakbarService } from '../../service/snakbar.service';
import { Istd } from '../../models/ofreturn';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {

  isineditmode: boolean = false
  editstdobj !: Istd
  @ViewChild('stdform') stdform!: NgForm
  constructor(
    private _stdservice: StudentService,
    private _snakbar: SnakbarService
  ) { }

  ngOnInit(): void {
    this.patchdata()
  }

  onAddStd() {
    if (this.stdform.valid) {
      let newobj = {
        ...this.stdform.value, id: Date.now().toString()
      }
      this._stdservice.onAddStd(newobj).subscribe({
        next: res => {
          this._snakbar.OpenSnakbar(res.msg)
        },
        error: err => {
          console.log(err)
        }
      })
      this.stdform.reset()
    }
  }

  patchdata() {
    this._stdservice.editemitstd$.subscribe({
      next: res => {
        this.editstdobj = res
        this.stdform.form.patchValue(res)
        this.isineditmode = true
      },
      error: err => {
        console.log(err)
      }
    })
  }

  onUpdatestd() {
    if (this.stdform.valid) {
      let updated_obj: Istd = {
        ...this.stdform.value, id : this.editstdobj.id
      }

      this._stdservice.updateStd(updated_obj)
        .subscribe({
          next: res => {
            this._snakbar.OpenSnakbar(res.msg)
          },
          error: err => {
            console.log(err)
          }
        })
    }
  }
}
