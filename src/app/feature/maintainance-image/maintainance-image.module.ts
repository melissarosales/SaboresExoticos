import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaintainanceImageComponent } from './maintainance-image.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
const routes: Routes = [{ path: '', component: MaintainanceImageComponent }];
@NgModule({
  declarations: [MaintainanceImageComponent],
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
export class MaintainanceImageModule { }
