import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { LoginModel } from '@app/model/login.Model';
import { MenuOptionsModel } from '@app/model/menuOptions.model';
import { Router } from '@angular/router';
import { CommonService } from '@shared/services/common-service.service';
import { utiles } from '@env/utiles';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();
  loginModel: LoginModel = null;
  openSession = false;
  buttonSession = '';
  menuOptionsList: MenuOptionsModel[]; 

  constructor(private router: Router, private commonService: CommonService) { 
    this.getMenuoptions();}

  ngOnInit(): void {
  }

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }

  navigate(route) { 
    this.router.navigate([route]);
  }
  goToLogin() {
    utiles.clearCache();
    this.getMenuoptions();
    this.commonService.asignMenu('');
    this.router.navigate(['login']);
  }
  getMenuoptions() {
    this.loginModel = utiles.getCacheUser();
    
    this.commonService.menuOptions.subscribe(data => {
     var menu = data!=""&&data!=undefined?JSON.parse(data):[]; 
      if (menu.length>0) {
        this.menuOptionsList =[];
        this.menuOptionsList =menu;
        this.openSession = true;
        this.buttonSession = "CERRAR SESIÓN";
      } else if(this.loginModel!=null && menu.length==0){
        this.buttonSession = "CERRAR SESIÓN";
        this.menuOptionsList =[];
        this.menuOptionsList =this.loginModel.MenuOptions;
      } else {
        this.menuOptionsList =[];
        var activitiesOption = new MenuOptionsModel();
        activitiesOption.Description = "ACTIVIDADES";
        activitiesOption.Route="calendar-activities"
        activitiesOption.DisplayOrder = 1;

        var menuOption = new MenuOptionsModel();
        menuOption.Route="food-menu"
        menuOption.Description = "MENÚ";
        menuOption.DisplayOrder = 2;

        this.menuOptionsList.push(activitiesOption);
        this.menuOptionsList.push(menuOption);
        this.openSession = false;
        this.buttonSession = "INGRESO";
      }
    });
  }
}
