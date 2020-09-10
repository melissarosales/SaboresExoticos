import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CommonService } from '@shared/services/common-service.service';
import { Router } from '@angular/router';
import { UserService } from '@shared/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
 
  constructor(private form: FormBuilder,
    private matDialog: MatDialog,
    private _commonService: CommonService, 
    private _router: Router,
    private userService: UserService) { }

  ngOnInit(): void {
    this.registerForm = this.form.group({
      name: ["", Validators.compose([Validators.required])],
      lastName: ["", Validators.compose([Validators.required])],
      identity: ["", Validators.compose([Validators.required])],
      phone: ["", Validators.compose([Validators.required])],
      password: ["", Validators.compose([Validators.required])],
      email: ["", Validators.compose([Validators.required, Validators.email])],
    });
  }
  register(){
    if (!this.registerForm.valid) {
      this.submitted = true;
    } else { 
      this.submitted = false;
    }
  }
  getErrorMessage(control) {
    switch (control) {
      case 'name': {
        return this.registerForm.controls.name.hasError('required') ? 'Campo requerido.' : '';
        break;
      } 
      case 'email': {
        return this.registerForm.controls.email.hasError('required') ? 'Campo requerido.' :
          this.registerForm.controls.email.hasError('email') ? 'No es un correo valido.' : '';
        break;
      } 
      case 'lastName': {
        return this.registerForm.controls.lastName.hasError('required') ? 'Campo requerido.' : '';
        break;
      } 
      case 'identity': {
        return this.registerForm.controls.identity.hasError('required') ? 'Campo requerido.' : '';
        break;
      } 
      case 'phone': {
        return this.registerForm.controls.phone.hasError('required') ? 'Campo requerido.' : '';
        break;
      } 
      case 'password': {
        return this.registerForm.controls.password.hasError('required') ? 'Campo requerido.' : '';
        break;
      }
    }
  }

}
