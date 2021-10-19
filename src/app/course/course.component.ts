import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 courses=[
   {'id':1,'name':'Learn Angular','description':'Angular is an application design framework  ','image':'../../assets/angular.jpg'},
   {'id':2,'name':'Learn Networking','description':'Cascading Style Sheets (CSS) is a style sheet language .','image':'../../assets/cybercrime..jpg'},
   {'id':3,'name':'Learn Data Science','description':'HTML stands for Hypertext Markup Language.','image':'../../assets/ds.jpg'},
   {'id':4,'name':'Learn node','description':'Node.js is designed to build scalable network applications. ','image':'../../assets/node.jpg'}
  ]
 
}

