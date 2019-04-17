import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatAutocompleteModule, MatBadgeModule, MatBottomSheetModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule, MatDialogModule, MatDividerModule, MatExpansionModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule, MatSidenavModule, MatSliderModule,MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatStepperModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule, MatTreeModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { MatFormFieldModule} from '@angular/material';
// Directives
import { OnlyNumber } from './directives/number.only.directive';
import { OnlyNumberNoDecimal } from './directives/no.decimal.directive';
import { MaxNumber } from './directives/minMax.validator.directive';
import { AlphaNumeric } from './directives/alpha.numeric.directive';
import { OgnNumber } from './directives/number.only.directive';

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

import { ApiService } from './api.service';
import { CommonService } from './common.service';
import { HttpService } from './app.service';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EventAppsComponent } from './event-apps/event-apps.component';

@NgModule({
	declarations: [
	AppComponent,
	OnlyNumber,
	OgnNumber,
	OnlyNumberNoDecimal,
	MaxNumber,
	AlphaNumeric,
	HeaderComponent,
	AdminDashComponent,
	EventComponent,
	AddEmpComponent,
	ViewEmpComponent,
	AddEventComponent,
	ProfileComponent,
	UserProfileComponent,
	UserEventsComponent,
	LoginComponent,
	LandingComponent,
	UserdashboardComponent,
	NavbarComponent,
	EventAppsComponent
	],
	imports: [
	HttpClientModule,
	HttpModule,
	BrowserModule,
	BrowserAnimationsModule,
	MatFormFieldModule,
	MatInputModule,
	MatButtonModule,
	MatTabsModule,
	MatCheckboxModule, 
	MatDialogModule, 
	MatTooltipModule,
	MatDividerModule,
	MatDatepickerModule, 
	MatNativeDateModule, 
	MatSnackBarModule, 
	MatPaginatorModule, 
	MatExpansionModule, 
	MatButtonToggleModule,
	MatGridListModule, 
	MatCardModule, 
	MatChipsModule,
	MatRadioModule,
	FormsModule,
	ReactiveFormsModule,
	SimpleNotificationsModule.forRoot(),
	MatAutocompleteModule, 
	MatBadgeModule, 
	MatBottomSheetModule, 
	MatIconModule, 
	MatListModule, 
	MatMenuModule,
	MatProgressBarModule, 
	MatProgressSpinnerModule, 
	MatRippleModule, 
	MatSelectModule, 
	MatSidenavModule, 
	MatSliderModule, 
	MatSlideToggleModule, 
	MatSortModule, 
	MatStepperModule, 
	MatTableModule, 
	MatToolbarModule, 
	MatTreeModule,
	AppRoutingModule,
	],
	providers: [ApiService, HttpService, CommonService],
	bootstrap: [AppComponent]
})
export class AppModule { }
