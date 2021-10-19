import { Component, OnInit } from '@angular/core';
import { NgForm,FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { EducationserviceService } from '../educationservice.service';
import { Students } from '../student';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent implements OnInit {
   public studentss:any;
   studentob=new Students(0,"","","","","")
   isEdit=false
  constructor(private ess:EducationserviceService,private router:Router){ }

  ngOnInit(): void {
    this.ess.geteducationlogin().subscribe(data=>this.studentss=data);
  }
  delete(id:any)
  {
    this.ess.deletestudent(id).subscribe(data=>{alert("Student deleted..")},(err)=>{alert("unable to post"+err)});
  }
 edit(login:any)
 {
  this.isEdit=true;
  this.studentob=login;
 }

 update(slogin:NgForm)
  {
    const sid=slogin.value.id;
   let student:Students={
     id:slogin.value.id,
    fname:slogin.value.fname,
    lname:slogin.value.lname,
    course:slogin.value.courses,
    email:slogin.value.email,
    password:slogin.value.password};
   this.ess.updatestudent(student,sid)
   .subscribe(data=>{alert("Student updated..")},(err)=>{alert("unable to post"+err)});
     }




}