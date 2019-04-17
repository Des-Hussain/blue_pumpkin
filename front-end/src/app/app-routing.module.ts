import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [];
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { EventComponent } from './event/event.component';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { ViewEmpComponent } from './view-emp/view-emp.component';
import { AddEventComponent } from './add-event/add-event.component';
import { ProfileComponent } from './profile/profile.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserEventsComponent } from './user-events/user-events.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { LandingComponent } from './landing/landing.component';


@NgModule({
  imports: [RouterModule.forRoot([
    { path: '', redirectTo: 'index', pathMatch: 'full' },
  	{ path: 'index', component: LandingComponent},
  	{ path: 'login', component: LoginComponent},
    // Admin Routes
  	{ path: 'admin-dash', component: AdminDashComponent},
  	{ path: 'viewevents', component: EventComponent},
  	{ path: 'addEvent', component: AddEventComponent},
  	{ path: 'addEmp', component: AddEmpComponent},
  	{ path: 'viewEmp', component: ViewEmpComponent},
    { path: 'profile', component: ProfileComponent},
    // Employee Routes
    { path: 'userProfile', component: UserProfileComponent},
    { path: 'user-events', component: UserEventsComponent},
    { path: 'user-dash', component: UserdashboardComponent},
  	])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
