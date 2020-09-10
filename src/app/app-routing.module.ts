import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './shared/layout/layout.component';

const routes: Routes = [  
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./feature/dashboard/dashboard.module').then(m => m.DashboardModule)
      }, 
      {
        path: 'contact',
        loadChildren: () => import('./feature/contact/contact.module').then(m => m.ContactModule)
      }, 
      {
        path: 'calendar-activities',
        loadChildren: () => import('./feature/calendar-activities/calendar-activities.module').then(m => m.CalendarActivitiesModule)
      }, 
      {
        path: 'food-menu',
        loadChildren: () => import('./feature/food-menu/food-menu.module').then(m => m.FoodMenuModule)
      }, 
      {
        path: 'book',
        loadChildren: () => import('./feature/book/book.module').then(m => m.BookModule)
      }, 
      {
        path: 'login',
        loadChildren: () => import('./feature/login/login.module').then(m => m.LoginModule)
      }, 
      {
        path: 'register',
        loadChildren: () => import('./feature/register/register.module').then(m => m.RegisterModule)
      }, 
      {
        path: 'maintainance-image',
        loadChildren: () => import('./feature/maintainance-image/maintainance-image.module').then(m => m.MaintainanceImageModule)
      },  
      {
        path: 'maintainance-menu',
        loadChildren: () => import('./feature/maintainance-menu/maintainance-menu.module').then(m => m.MaintainanceMenuModule)
      }, 
      {
        path: 'my-booking-list',
        loadChildren: () => import('./feature/my-booking-list/my-booking-list.module').then(m => m.MyBookingListModule)
      }, 
      {
        path: 'report-booking',
        loadChildren: () => import('./feature/report-booking/report-booking.module').then(m => m.ReportBookingModule)
      }, 
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
