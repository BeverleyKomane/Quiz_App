import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test3',
  templateUrl: './test3.page.html',
  styleUrls: ['./test3.page.scss'],
})
export class Test3Page implements OnInit {
  question1;
  question2 ;
  question3;
  question4;
  question5;
  score=0;
  test3=false;
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
    if (this.question2=="B correct") {
      this.score+=1;
    }
    if (this.question3=="A correct") {
      this.score+=1;
    }
    if (this.question4=="B correct") {
      this.score+=1;
    }
    if (this.question5=="B correct") {
      this.score+=1;
    }
    console.log(this.score)
    this.test3=true;
      this.t=false
    }
  ngOnInit() {
  }
  back(){
    this.route.navigateByUrl("menu")
  } 
}
