import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { utiles } from '@env/utiles';
import { map } from 'rxjs/operators';
import { environment } from '@env/environment';

const methodFoodyList = 'api/Food/List';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(public http: HttpClient) { }
 

  _foodList(model: any) {  
    return this.http.post<any>(environment.apiURL+ methodFoodyList, model, httpOptions)
      .pipe(map(response => {
        return response;
      }));
  }


}