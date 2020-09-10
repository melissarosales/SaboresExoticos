import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ModalConfirmComponent } from '@shared/modal/modal-confirm/modal-confirm.component';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { AuthenticationService } from '@core/service/authentication.service';
import { Router } from '@angular/router';
import { LoginModel } from '@app/model/login.Model';
import { CommonService } from '@shared/services/common-service.service';
import { DataMessageModel } from '@app/model/dataMessage.model';
import { UserService } from '@shared/services/user.service';
import { utiles } from '@env/utiles';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //#region variables
  private unsubscribe$ = new Subject<void>();
  loginForm: FormGroup;
  submitted = false;
  hide = true;
  loginModel: LoginModel = new LoginModel();
  //#endregion variables

  constructor(private form: FormBuilder,
    private matDialog: MatDialog,
    private _commonService: CommonService, 
    private _router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.form.group({
      Password: ["", Validators.compose([Validators.required])],
      Email: ["", Validators.compose([Validators.required, Validators.email])]
    });
  }
  goToRegister() {
    this._router.navigate(['register']);
  }


  login() {
    if (!this.loginForm.valid) {
      this.submitted = true;
    } else {
      this.setUserModel();
      this.submitted = false;

      this.userService._loginUser(this.loginModel)
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe(
          responseLogin => {
            if (responseLogin !== null) { 
              this.loginModel = responseLogin;
              this._commonService.asignMenu(JSON.stringify(this.loginModel.MenuOptions));
              utiles.createCacheUser(this.loginModel);
              this._router.navigate(['dashboard']);
            } else {
              this.opendialogAlert('Usuario o contrasena incorrectos');
            }
          },
        );
    }
  }

  getErrorMessage(control) {
    switch (control) {
      case 'Password': {
        return this.loginForm.controls.Password.hasError('required') ? 'Campo requerido.' : '';
        break;
      }
      case 'Email': {
        return this.loginForm.controls.Email.hasError('required') ? 'Campo requerido.' :
          this.loginForm.controls.Email.hasError('email') ? 'No es un correo valido.' : '';
        break;
      }
    }
  }

  setUserModel() {
    this.loginModel.Email = this.loginForm.get('Email').value;
    this.loginModel.Password = this.loginForm.get('Password').value;
  }
  opendialogAlert(args): void {
    this._commonService._setLoading(false);
    // this.closeDocumentModal();
    let data = new DataMessageModel();
    data.labelTitile = 'Error';
    data.textDescription = args;
    data.status = 'info';
    data.button = true;
    data.error = args;
    this._commonService._setLoading(false);
    this._commonService.onErrorModal(data);
  }

}
