import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '../../node_modules/@angular/router';
import { QuestionsComponent } from './questions/questions.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
//  { path: 'about', component: AboutComponent },
//  { path: 'car-insurance', component: CarinsuranceComponent },
//  { path: 'contact', component: ContactComponent },
{ path: 'questions', component: QuestionsComponent },
//  
 ];


 @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
    
})

export class AppRoutingModule { }
