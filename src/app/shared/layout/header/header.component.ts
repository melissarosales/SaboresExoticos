
import { Component, OnInit, Input, OnDestroy, HostListener, Output, EventEmitter } from '@angular/core';
import { Subscription, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { MenuOptionsModel } from '@app/model/menuOptions.model';
import { LoginModel } from '@app/model/login.Model';
import { utiles } from '@env/utiles';
import { IfStmt } from '@angular/compiler';
import { CommonService } from '@shared/services/common-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();
  loginModel: LoginModel = null;
  openSession = false;
  buttonSession = '';
  menuOptionsList: MenuOptionsModel[];
  constructor(private router: Router, private commonService: CommonService) { 
    this.getMenuoptions();}

  ngOnInit(): void {
  }
  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }
  goToCalendarActivities() {
    this.router.navigate(['calendar-activities']);
  }
  goToFoodMenu() {
    this.router.navigate(['food-menu']);
  }
  goToBook() {
    this.router.navigate(['book']);
  }
  goToLogin() {
    utiles.clearCache();
    this.getMenuoptions();
    this.commonService.asignMenu('');
    this.router.navigate(['login']);
  }
  navigate(route) {
    this.router.navigate([route]);
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
