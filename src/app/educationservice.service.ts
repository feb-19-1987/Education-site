import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Students } from './student';

stud:Students;

@Injectable({
  providedIn: 'root'
})
export class EducationserviceService {

  constructor(private http:HttpClient) { }
  geteducationlogin(){                                                                                                                                     
    return this.http.get("http://localhost:3000/students");
  }
  posteducationlogin(stud:Students){
   return this.http.post("http://localhost:3000/students",stud)
  }
  deletestudent(id:number){
    return this.http.delete("http://localhost:3000/students/"+id)
  }
  updatestudent(studcode:Students,sid:number)
  {
     return this.http.patch("http://localhost:3000/students/"+sid,studcode)
  }

}
