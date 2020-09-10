import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { utiles } from '@env/utiles';
import { map } from 'rxjs/operators';
import { environment } from '@env/environment';

const methodFoodCategoryList = 'api/FoodCategory/List';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable({
  providedIn: 'root'
})
export class FoodCategoryService {

  constructor(public http: HttpClient) { }
 

  _foodCategoryList(model: any) {  
    return this.http.post<any>(environment.apiURL+ methodFoodCategoryList, model, httpOptions)
      .pipe(map(response => {
        return response;
      }));
  }


}