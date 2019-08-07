import { Component } from '@angular/core';
import { Options } from 'selenium-webdriver/chrome';
import { Router } from '@angular/router';
import { IonButton } from '@ionic/angular';
// import { ResultsPage } from '../results/results.page';
// import {Storage} from '@ionic/Storage';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  question1;
  question2 ;
  question3;
  question4;
  question5;
  score=0;
  test1=false;
  t=true;
  r="c1";
  g="c2";
// question1 =true;
// question2 = true;
// question3 = true;
// question4 =true;
// question5=true;

  constructor(private route:Router, private router:Router) {}

  submit(){
    console.log(this.question1)
    console.log(this.question2)
    console.log(this.question3)
    console.log(this.question4)
    console.log(this.question5)
    

    if (this.question1=="B correct") {
      this.score+=1;
    }
    if (this.question2=="D correct") {
      this.score+=1;
    }
    if (this.question3=="B correct") {
      this.score+=1;
    }
    if (this.question4=="A correct") {
      this.score+=1;
    }
    if (this.question5=="A correct") {
      this.score+=1;
    }
    console.log(this.score)
    this.test1=true;
      this.t=false;
    
    }
    back(){
      this.route.navigateByUrl("menu")
    }     
 
}
