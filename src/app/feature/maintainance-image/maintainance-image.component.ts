import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ModalAddImageComponent } from '@shared/modal/modal-add-image/modal-add-image.component';

@Component({
  selector: 'app-maintainance-image',
  templateUrl: './maintainance-image.component.html',
  styleUrls: ['./maintainance-image.component.scss']
})
export class MaintainanceImageComponent implements OnInit {
  private unsubscribe$ = new Subject<void>();
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }


  addNewImage(data){
    
    const dialogRef = this.dialog.open(ModalAddImageComponent, {
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
