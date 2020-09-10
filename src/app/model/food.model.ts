import { FoodCategoryModel } from './foodCategory.model';

export class FoodModel {
    Id: number;
    Name: string;
    Description: string;
    Price: number;
    FkFoodCategory:number;
    constructor() {
        this.Id = 0;
        this.Name = "";
        this.Description = "";
        this.Price = 0;
        this.FkFoodCategory =0;
    }

}