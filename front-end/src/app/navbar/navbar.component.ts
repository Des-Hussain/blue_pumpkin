import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';
import { CommonService } from './../common.service';
import { NotificationsService } from 'angular2-notifications';
import { Router } from '@angular/router'


@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.css']
	})
export class NavbarComponent implements OnInit {

	constructor(public apiService:ApiService, public commonService:CommonService, private notificationsService:NotificationsService, public router:Router) { }

	navDropToggler:Boolean = false;
	notificationToggler:Boolean = false;

	ngOnInit() {

	}
	navDropToggle(){
		this.navDropToggler = !this.navDropToggler;
	}
	toggleNotificaitons(){
		this.notificationToggler = !this.notificationToggler;
	}
}
