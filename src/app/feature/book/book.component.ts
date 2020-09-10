import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CommonService } from '@shared/services/common-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  bookForm: FormGroup;
  submitted = false;
  constructor( private form: FormBuilder, 
    private matDialog: MatDialog,
    private _commonService: CommonService,  
    private _router: Router,) { }

  ngOnInit(): void {
    this.bookForm = this.form.group({
      restaurant: ["", Validators.compose([Validators.required])],
      typeReservation: ["", Validators.compose([Validators.required])],
      tableUbication: [""],
      date: ["", Validators.compose([Validators.required])],
      hour: ["", Validators.compose([Validators.required])],
      personQuantity: ["", Validators.compose([Validators.required])],
      tableQuantity: ["", Validators.compose([Validators.required])],
      name: ["", Validators.compose([Validators.required])],
      phone: ["", Validators.compose([Validators.required])],
      email: ["", Validators.compose([Validators.required])],
      details: [""],
      cardNumber: ["", Validators.compose([Validators.required])],
      ccv: ["", Validators.compose([Validators.required])],
      expirationDate: ["", Validators.compose([Validators.required])],
    });
  }

  getErrorMessage(control) {
    switch (control) {
      case 'restaurant': {
        return this.bookForm.controls.restaurant.hasError('required') ? 'Campo requerido.' : '';
        break;
      }
      case 'typeReservation': {
        return this.bookForm.controls.typeReservation.hasError('required') ? 'Campo requerido.' : '';
        break;
      }
      case 'tableUbication': {
        return this.bookForm.controls.tableUbication.hasError('required') ? 'Campo requerido.' : '';
        break;
      }
      case 'date': {
        return this.bookForm.controls.date.hasError('required') ? 'Campo requerido.' : '';
        break;
      }
      case 'hour': {
        return this.bookForm.controls.hour.hasError('required') ? 'Campo requerido.' : '';
        break;
      }
      case 'personQuantity': {
        return this.bookForm.controls.personQuantity.hasError('required') ? 'Campo requerido.' : '';
        break;
      }
      case 'tableQuantity': {
        return this.bookForm.controls.tableQuantity.hasError('required') ? 'Campo requerido.' : '';
        break;
      }
      case 'name': {
        return this.bookForm.controls.name.hasError('required') ? 'Campo requerido.' : '';
        break;
      }
      case 'phone': {
        return this.bookForm.controls.phone.hasError('required') ? 'Campo requerido.' : '';
        break;
      }
      case 'email': {
        return this.bookForm.controls.email.hasError('required') ? 'Campo requerido.' :
          this.bookForm.controls.email.hasError('email') ? 'No es un correo valido.' : '';
        break;
      }
      case 'cardNumber': {
        return this.bookForm.controls.cardNumber.hasError('cardNumber') ? 'Campo requerido.' : '';
        break;
      }
      case 'ccv': {
        return this.bookForm.controls.ccv.hasError('ccv') ? 'Campo requerido.' : '';
        break;
      }
      case 'expirationDate': {
        return this.bookForm.controls.expirationDate.hasError('expirationDate') ? 'Campo requerido.' : '';
        break;
      }
      case 'restaurant': {
        return this.bookForm.controls.restaurant.hasError('restaurant') ? 'Campo requerido.' : '';
        break;
      }
    }
  }

  
  book() {
    if (!this.bookForm.valid) {
      this.submitted = true;
    } else { 
      this.submitted = false; 
    }
  }
}
