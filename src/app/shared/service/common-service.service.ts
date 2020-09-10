import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { utiles } from '@env/utiles';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ModalErrorComponent } from '@shared/modal/modal-error/modal-error.component';

@Injectable({
  providedIn: 'root'
})
export class CommonService{

  private activatedModal = new BehaviorSubject(false);
  modalservice = this.activatedModal.asObservable();
  private loading = new BehaviorSubject(false);
  loadingService = this.loading.asObservable();

  private dataMenu = new BehaviorSubject('');
  menuOptions = this.dataMenu.asObservable();
 
  constructor(
    private router: Router,
    private dialog: MatDialog,) { }


  _modalservice(item: any) {
    this.activatedModal.next(item);
  }

  _setLoading(item: any) {
    this.loading.next(item);
  }
  
  asignMenu(item: any) {
    this.dataMenu.next(item);
  }
  
  onErrorModal(data: any) {
    this._setLoading(false);
    const datafailed = {
      labelTitile: 'Error',
      icon: 'cancel',
      textDescription: (data.error == null) ? '' : (data.error.error_description) ? data.error.error_description : data.error,
      status: 'error',
    };

    switch (data.status) {
      case 0: {
        datafailed.textDescription = 'Se ha perdido la conexión con el servidor.';
        utiles.clearCache();
        this.router.navigate(['']);
        const dialogRef = this.dialog.open(ModalErrorComponent, {
          data: datafailed,
          panelClass: 'modal-error'
        });
        dialogRef.afterClosed().subscribe(() => {
          this.dialog.closeAll();
        });
        break;
      }
      case 401: {
        // tslint:disable-next-line:prefer-const
        let aux ="" //utiles.getInfoAuthorization();
        if (aux !== null && aux !== undefined) {
          this._modalservice(true);
        } else {
          this._modalservice(false);
          datafailed.textDescription = 'El periodo de inactividad se ha cumplido, por favor ingresar nuevamente.';
          utiles.clearCache();
          this.router.navigate(['']);
          const dialogRef = this.dialog.open(ModalErrorComponent, {
            data: datafailed,
            panelClass: 'modal-warning'
          });
          dialogRef.afterClosed().subscribe(() => {
            this.dialog.closeAll();
          });
        }
        break;
      }
      default: {
        const dialogRef = this.dialog.open(ModalErrorComponent, {
          data: datafailed,
          panelClass: 'modal-error'
        });
        dialogRef.afterClosed().subscribe(() => {
          /* dialogRef.close(); */
        });
        break;
      }
    }
  }
}
