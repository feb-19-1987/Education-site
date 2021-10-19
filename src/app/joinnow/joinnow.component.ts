import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { EducationserviceService } from '../educationservice.service';
import { Students } from '../student';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-joinnow',
  templateUrl: './joinnow.component.html',
  styleUrls: ['./joinnow.component.css']
})
export class JoinnowComponent implements OnInit {
  public students:any
  public validationMessage:any={}

  reactiveForm: FormGroup ;
   
  constructor(private es:EducationserviceService,private fb:FormBuilder) {
    // this.validationMessage.id={

    //   required:"Id is mandatory",
    // }
  
    // this.validationMessage.fname={
    //   required:"First Name mandatory",
    //   pattern:"Must enter letters"
    // }
    // this.validationMessage.lname={

    //   required:"Last Name mandatory",
    //   pattern:"Must enter letters"

    // }
    // this.validationMessage.email={
    //   required:"Email is mandatory",
    //   email:"Must enter in correct format",
    // }
    // this.validationMessage.password={

    //   required:"Password is mandatory",
      
    // }

    this.reactiveForm=this.fb.group({
      fname:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      lname:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',Validators.required)
    })

  }
   
  ngOnInit(): void {
    this.es.geteducationlogin().subscribe(data=>this.students=data);
    }
  userlogin(login1:any)
  {

   
    this.es.posteducationlogin(this.reactiveForm.value).subscribe(data=>{alert("Student Logined Successfully...." )},
    (error)=>{alert("unable to post")});
  }

  get f(){
    return this.reactiveForm.controls
  }

}