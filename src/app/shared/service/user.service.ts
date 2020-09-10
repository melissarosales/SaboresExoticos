import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { utiles } from '@env/utiles';
import { map } from 'rxjs/operators';
import { LoginModel } from '@app/model/login.Model';
import { environment } from '@env/environment';

const methodLogin = 'api/user/login';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient) { }
 
  _loginUser(model: LoginModel) {  
    return this.http.post<any>(environment.apiURL+ methodLogin, model, httpOptions)
      .pipe(map(response => {
        return response;
      }));
  }

}
