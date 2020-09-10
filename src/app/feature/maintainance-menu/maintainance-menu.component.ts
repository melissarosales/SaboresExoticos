import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalAddDishComponent } from '@shared/modal/modal-add-dish/modal-add-dish.component';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-maintainance-menu',
  templateUrl: './maintainance-menu.component.html',
  styleUrls: ['./maintainance-menu.component.scss']
})
export class MaintainanceMenuComponent implements OnInit {

  private unsubscribe$ = new Subject<void>();
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  addNewDish(data){
    const dialogRef = this.dialog.open(ModalAddDishComponent, {
      data,
      minWidth: '33vw', maxWidth: '55vw', minHeight: '37vh', maxHeight: '70vh'
    });
    dialogRef.updatePosition({ left: '33vw' });
    // const sub = dialogRef.componentInstance.onAdd
    //   .pipe(takeUntil(this.unsubscribe$))
    //   .subscribe(() => {
    //     dialogRef.close();
    //   });
     const sub = dialogRef.afterClosed()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        () => {
          sub.unsubscribe();
        }
      );
  } 

}
