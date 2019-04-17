import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';
import { CommonService } from './../common.service';
import { NotificationsService } from 'angular2-notifications';
import { Router } from '@angular/router'

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
	})
export class HeaderComponent implements OnInit {

	constructor(public apiService:ApiService, public commonService:CommonService, private notificationsService:NotificationsService, public router:Router) { }

	public position:String = 'right';
	toggleSideBar:Boolean = false;

	ngOnInit() {
	}
	toggleMiniSideBar(){
		this.toggleSideBar = !this.toggleSideBar;
	}
}
