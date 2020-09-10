import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor( private router: Router,  ) { }

  ngOnInit(): void {
  }
goToContactUs(){
  this.router.navigate(['contact']);
}
}
