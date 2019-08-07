import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }
  home(){
    this.route.navigateByUrl("home")
  } 
  test2(){
    this.route.navigateByUrl("test2")
  } 
  test3(){
    this.route.navigateByUrl("test3")
  } 
}
