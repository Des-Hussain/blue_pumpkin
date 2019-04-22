import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';
import { CommonService } from './../common.service';
import { NotificationsService } from 'angular2-notifications';
import { Router } from '@angular/router'

@Component({
	selector: 'app-add-event',
	templateUrl: './add-event.component.html',
	styleUrls: ['./add-event.component.css']
	})
export class AddEventComponent implements OnInit {

	constructor( public apiService:ApiService, public commonService:CommonService, private notificationsService:NotificationsService, public router:Router) { }

	eventData:any = {};
	mainContentSize:Boolean = false;
	
	ngOnInit() {
	}

	updateHeaderToggle(){
		this.mainContentSize = !this.mainContentSize;
	}

	createEvent(){
		if (this.commonService.required(this.eventData.title) && this.commonService.required(this.eventData.subTitle) && this.commonService.required(this.eventData.desc) && this.commonService.required(this.eventData.date)) {
			this.apiService.createEvent(this.eventData).subscribe(res=>{
				this.notificationsService.success("Success","Event Created Successfully");
			},(error)=>{
				this.notificationsService.error("Error!","Internal Server Error");
			});
		}else this.notificationsService.error('Error!',"Please Fill all the required fields (*).");
	}
}
