import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';

import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import { AboutComponent } from './about/about.component';
import { FormsModule } from '@angular/forms';
//reactive
import {ReactiveFormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';
import { JoinNowComponent } from './join-now/join-now.component'
@NgModule({
  declarations: [
    AppComponent,
    StudentdetailsComponent,
    
    HomeComponent,
    CourseComponent,
    AboutComponent,
    JoinNowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,ReactiveFormsModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
