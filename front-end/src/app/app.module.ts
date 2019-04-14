import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { EventComponent } from './event/event.component';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { ViewEmpComponent } from './view-emp/view-emp.component';
import { AddEventComponent } from './add-event/add-event.component';
import { ProfileComponent } from './profile/profile.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserEventsComponent } from './user-events/user-events.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdminDashComponent,
    EventComponent,
    AddEmpComponent,
    ViewEmpComponent,
    AddEventComponent,
    ProfileComponent,
    UserProfileComponent,
    UserEventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
