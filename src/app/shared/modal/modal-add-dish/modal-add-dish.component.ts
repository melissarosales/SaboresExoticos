import { Component, OnInit, Inject, EventEmitter } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-modal-add-dish',
  templateUrl: './modal-add-dish.component.html',
  styleUrls: ['./modal-add-dish.component.scss']
})
export class ModalAddDishComponent implements OnInit {

  constructor(public dialog: MatDialogRef<ModalAddDishComponent>) { }

  ngOnInit(): void {
  }

}
