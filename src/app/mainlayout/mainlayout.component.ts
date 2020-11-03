import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-mainlayout',
  templateUrl: './mainlayout.component.html',
  styleUrls: ['./mainlayout.component.css']
})
export class MainlayoutComponent implements OnInit {
  introductionText = 'Hi, I am Tanay Ghosh. I am a web developer. I have worked 5 years in this field. I am a recent graduate with a Master\'s degree majoring in Computer Science. I have built this website in my free time to demonstrate my love for building UI. Please explore the website.';  

  constructor() { }

  ngOnInit() {
  }

}
