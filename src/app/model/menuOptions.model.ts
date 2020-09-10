export class MenuOptionsModel {
    Description:string;
    DisplayOrder:number;
    Route:string;
    DropDown:boolean;
    MenuOptionsList:[MenuOptionsModel]
    
  constructor() {
      this.Description="";
      this.DisplayOrder=0;
      this.Route="";
      this.MenuOptionsList=null;
      this.DropDown=false;
  }
}