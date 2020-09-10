import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '@env/environment';
import { utiles } from '@env/utiles';

const methodApi = 'token/token';
const methodGetRolScreenActions = 'api/RolScreenAction/List';
const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable()
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  /******************************************************
  * Author: Erick Sibaja
  * Creation date: 22/04/2019
  * Description: Method to log in to the local api
  *****************************************************/
  login(loginData: any) {
    let data = {
      User_Name: loginData.userName,
      password: loginData.Password,
      client_Id: environment.clientId
    };
    // tslint:disable-next-line:prefer-const
    let url = environment.apiURL + methodApi;

    return this.http.post<any>(url, data, httpOptions)
      .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        let data = {
          apiServiceBaseUri: user.userInfo.api_Service_Base_Uri,
          userName: user.userInfo.user_Name,
          idUser: user.userInfo.id_User,
          Fk_Sistema: user.userInfo.fk_Seg_Mtr_System_Select,
          Fk_Sistema_Consulta: user.userInfo.fk_Seg_Mtr_System_Select,
          roleList: user.userInfo.role_List
        }
        utiles.createCacheObject("infoSecurityUser", data);
        return user;
      }));
  }
  /******************************************************
   * Author: Erick Sibaja
   * Creation date: 22/04/2019
   * Description: Method to log in to the local api
  *****************************************************/
  loginLocalApi(loginData: any) {

    let url = loginData.api_Service_Base_Uri +
      'api/token/' +
      loginData.autentication_Method;

    let data = {
      Password_Autenticacion: loginData.autentication_Password,
      Usuario_Autenticacion: loginData.autentication_User,
      userName: loginData.user_Name
    }
    return this.http.post<any>(url, data, httpOptions)
      .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        user.apiServiceBaseUri = loginData.api_Service_Base_Uri;
        user.userName = loginData.user_Name;
        user.idUser = loginData.id_User;
        user.Fk_Sistema = loginData.fk_Seg_Mtr_System_Select;
        user.Fk_Sistema_Consulta = loginData.fk_Seg_Mtr_System_Select;
        utiles.createCacheObject("infoSecurity", user);
        return user;
      }));
  }

}
