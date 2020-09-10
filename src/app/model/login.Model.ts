import { MenuOptionsModel } from './menuOptions.model';

export class LoginModel {
  Password: string;
  Email: string;
  NewPassword: string;
  MenuOptions: [MenuOptionsModel];
  constructor() {
    this.Password = '';
    this.Email = '';
    this.NewPassword = "";
    this.MenuOptions = null;
  }
}
