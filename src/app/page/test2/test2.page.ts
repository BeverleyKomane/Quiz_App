import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.page.html',
  styleUrls: ['./test2.page.scss'],
})
export class Test2Page implements OnInit {
  question1;
  question2 ;
  question3;
  question4;
  question5;
  score=0;
  test2=false;
  t=true
  constructor(private route:Router) { }

  submit(){
    console.log(this.question1)
    console.log(this.question2)
    console.log(this.question3)
    console.log(this.question4)
    console.log(this.question5)
    

    if (this.question1=="A correct") {
      this.score+=1;
    }
    if (this.question2=="C correct") {
      this.score+=1;
    }
    if (this.question3=="B correct") {
      this.score+=1;
    }
    if (this.question4=="B correct") {
      this.score+=1;
    }
    if (this.question5=="C correct") {
      this.score+=1;
    }
    console.log(this.score)
    this.test2=true;
      this.t=false
    }
      
  ngOnInit() {
  }
  back(){
    this.route.navigateByUrl("menu")
  } 
}
