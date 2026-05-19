import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoDashboardCompComponent } from './shaired/components/todo-dashboard-comp/todo-dashboard-comp.component';
import { TodoFormCompComponent } from './shaired/components/todo-form-comp/todo-form-comp.component';
import { TodoListCompComponent } from './shaired/components/todo-list-comp/todo-list-comp.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { GetconfirmComponent } from './shaired/components/getconfirm/getconfirm.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoDashboardCompComponent,
    TodoFormCompComponent,
    TodoListCompComponent,
    GetconfirmComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
    MatSnackBarModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
