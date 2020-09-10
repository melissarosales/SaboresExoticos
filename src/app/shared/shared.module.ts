import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ModalConfirmComponent } from './modal/modal-confirm/modal-confirm.component';
import { ModalErrorComponent } from './modal/modal-error/modal-error.component';
import { ModalSuccessComponent } from './modal/modal-success/modal-success.component';
import { LayoutComponent } from './layout/layout.component'; 
import { RouterModule, Routes } from '@angular/router'; 
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { ModalAddDishComponent } from './modal/modal-add-dish/modal-add-dish.component';
import { ModalAddImageComponent } from './modal/modal-add-image/modal-add-image.component'; 
 

 
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { AngularFileUploaderModule } from "angular-file-uploader";

const routes: Routes = [{ path: '', component: LayoutComponent }];
@NgModule({
  declarations: [ModalConfirmComponent, ModalErrorComponent, ModalSuccessComponent, LayoutComponent, FooterComponent, HeaderComponent, SidebarComponent, ModalAddDishComponent, ModalAddImageComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatTabsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatMenuModule,
    FlexLayoutModule,
    AngularFileUploaderModule,
    RouterModule.forChild(routes),
  ],
  entryComponents: [
    ModalConfirmComponent,
    ModalErrorComponent,
    ModalSuccessComponent,
    ModalAddDishComponent,
    RouterModule,
  ],
  exports: [
    MatTabsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatMenuModule,
    LayoutComponent, 
    ModalConfirmComponent,
    ModalSuccessComponent,
    ModalAddDishComponent,
    ModalErrorComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ]
})
export class SharedModule { }
