import { Component, OnInit } from '@angular/core';
import { FoodCategoryService } from '@shared/services/foodCategory.service';
import { FoodService } from '@shared/services/food.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FoodCategoryModel } from '@app/model/foodCategory.model';
import { FoodModel } from '@app/model/food.model';

@Component({
  selector: 'app-food-menu',
  templateUrl: './food-menu.component.html',
  styleUrls: ['./food-menu.component.scss']
})
export class FoodMenuComponent implements OnInit {
foodCategoryList:FoodCategoryModel[];
foodList:FoodModel[];
filteredFoodList:FoodModel[];
  private unsubscribe$ = new Subject<void>();
  constructor(private foodCategoryService:FoodCategoryService,private foodService:FoodService, ) { }

  ngOnInit(): void {
    this.getCategoryFoodList();
  }

  
  getCategoryFoodList() { 
      this.foodCategoryService._foodCategoryList(null)
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe(
          response => {
            this.foodCategoryList=response;
            this.getFoodList();
          },
        ); 
  }
  
  getFoodList() { 
      this.foodService._foodList(null)
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe(
          response => {
            this.foodList=response;
            this.filterFoodList(this.foodCategoryList[0].Id);
          },
        ); 
  }


  filterFoodList(fkFoodCategory){
    this.filteredFoodList=[];
    this.filteredFoodList=this.foodList.filter(x => x.FkFoodCategory == fkFoodCategory)
    console.log( this.filteredFoodList)
  }

}
