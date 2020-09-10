import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { BookComponent } from './book.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';

const routes: Routes = [{ path: '', component: BookComponent }];
 @NgModule({
  declarations: [BookComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
  ]
})
export class BookModule { }
