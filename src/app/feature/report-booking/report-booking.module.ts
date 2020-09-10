import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportBookingComponent } from './report-booking.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
const routes: Routes = [{ path: '', component: ReportBookingComponent }];
@NgModule({
  declarations: [ReportBookingComponent],
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
export class ReportBookingModule { }
