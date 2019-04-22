import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';
import { CommonService } from './../common.service';
import { NotificationsService } from 'angular2-notifications';
import { Router } from '@angular/router'

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.css']
	})
export class ContactComponent implements OnInit {

	constructor(public apiService:ApiService, public commonService:CommonService, private notificationsService:NotificationsService, public router:Router) { }

	contactData:any = {};

	ngOnInit() {

	}

	redirectToUrl(url){
		window.open(url, "_blank");
	}
	sendEmail(){
		if(this.commonService.required(this.contactData.email) && this.commonService.required(this.contactData.message)){
			if(this.commonService.checkValidEmail(this.contactData.email)){
					this.notificationsService.success('Success','We have recieved your email succesfully, our team will contact you very soon');
				// this.apiService.sendEmailApi(this.contactData).subscribe(res=>{
				// },(error)=>{
				// 	this.notificationsService.error("Error!","Internal Server Error, please try again later.");
				// });
			}else this.notificationsService.error('Error!','Invalid Email');
		}else this.notificationsService.error('Error!','Please fill all the required fields (*)');
	}
}
