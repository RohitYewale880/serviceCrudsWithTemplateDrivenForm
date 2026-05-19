import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnakbarService {

  constructor(
    private _snakbar : MatSnackBar
  ) { }

  OpenSnakbar(msg:string){
    this._snakbar.open(msg, 'close', {
      verticalPosition:'top',
      horizontalPosition:'left',
      duration:3000
    })
  }
}
