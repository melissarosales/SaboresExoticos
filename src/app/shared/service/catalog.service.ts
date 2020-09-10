import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { utiles } from '@env/utiles';
import { map } from 'rxjs/operators';

const methodGetCatalog = 'api/GlbCatCatalog/Get';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor(public http: HttpClient) { }


  /******************************************************
  * Author: Erick Sibaja
  * Creation date: 23/04/2020
  * Description:get catalog 
  *******************************************************/
  _getcatalog(model: any) {
    const url = utiles.getCacheObject('infoSecurityUser').apiServiceBaseUri + methodGetCatalog;
    return this.http.post<any>(url, model, httpOptions)
      .pipe(map(response => {
        return response;
      }));
  }

}
