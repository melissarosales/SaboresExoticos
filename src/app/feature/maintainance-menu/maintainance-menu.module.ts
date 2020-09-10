import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaintainanceMenuComponent } from './maintainance-menu.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
const routes: Routes = [{ path: '', component: MaintainanceMenuComponent }];
@NgModule({
  declarations: [MaintainanceMenuComponent],
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
export class MaintainanceMenuModule { }
