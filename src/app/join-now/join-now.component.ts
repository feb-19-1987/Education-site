import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EducationserviceService } from '../educationservice.service';

@Component({
  selector: 'app-join-now',
  templateUrl: './join-now.component.html',
  styleUrls: ['./join-now.component.css']
})
export class JoinNowComponent implements OnInit {

  signupform!:FormGroup;
  submitted=false;
  
  constructor(private es:EducationserviceService) { 
    // private fb:FormBuilder
  // this.signupform=this.fb.group(
  //   {
  //     fname:new FormControl(null,[Validators.required]),
  //     lname:new FormControl(null,[Validators.required]),
  //     course:new FormControl(''),
  //     email:new FormControl('',[Validators.required,Validators.email]),
  //     password:new FormControl('',[Validators.required,Validators.minLength(3)])
  //   })
   }
  
  ngOnInit() {
    this.signupform=new FormGroup({

      'fname':new FormControl(null,Validators.required),
      'lname':new FormControl(null,Validators.required),
      'course':new FormControl(null,Validators.required),
      'email':new FormControl(null,[Validators.required,Validators.email]),
      'password':new FormControl(null,Validators.required)
    })
  }

  onSignup(){
    this.submitted=true;
    if(this.signupform.valid)
    {
      console.log(this.signupform.value)
    this.es.posteducationlogin(this.signupform.value).subscribe((d:any)=>{alert('data added')})
    } 
  }

  

}
