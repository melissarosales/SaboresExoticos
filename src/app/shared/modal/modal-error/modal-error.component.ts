import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { DataMessageModel } from '@app/model/dataMessage.model';


@Component({
  selector: 'app-modal-error',
  templateUrl: './modal-error.component.html',
  styleUrls: ['./modal-error.component.scss']
})
export class ModalErrorComponent implements OnInit {
  icon: any;
  labelTitile: string;
  textDescription: any;
  status: any;
  constructor(@Inject(MAT_DIALOG_DATA) public dataMessage: DataMessageModel) {
    
    if (this.dataMessage !== null && this.dataMessage !== undefined) {
      this.labelTitile = this.dataMessage.labelTitile;
      this.icon = this.dataMessage.icon;
      this.textDescription = this.dataMessage.textDescription;
      this.status = this.dataMessage.status;
    } else {
      this.labelTitile = 'Lo sentimos parece que algo anda mal';
    }
  }
  ngOnInit() {
  }

}
