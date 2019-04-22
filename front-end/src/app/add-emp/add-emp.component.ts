import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';
import { CommonService } from './../common.service';
import { NotificationsService } from 'angular2-notifications';
import { Router } from '@angular/router'

@Component({
	selector: 'app-add-emp',
	templateUrl: './add-emp.component.html',
	styleUrls: ['./add-emp.component.css']
	})
export class AddEmpComponent implements OnInit {

	constructor( public apiService:ApiService, public commonService:CommonService, private notificationsService:NotificationsService, public router:Router) { }

	employeeData:any = {};
	mainContentSize:Boolean = false;

	ngOnInit() {
	}
	
	updateHeaderToggle(){
		this.mainContentSize = !this.mainContentSize;
	}

	createEmployee(){
		if (this.commonService.required(this.employeeData.firstName) && this.commonService.required(this.employeeData.lastName) && this.commonService.required(this.employeeData.email) && this.commonService.required(this.employeeData.empDep) && this.commonService.required(this.employeeData.education) && this.commonService.required(this.employeeData.birthDate) && this.commonService.required(this.employeeData.Password)) {
			if (this.commonService.checkValidEmail(this.employeeData.email)) {
				this.apiService.adminCreateUser(this.employeeData).subscribe(res=>{
					this.notificationsService.success("Success","Event Created Successfully");
				},(error)=>{
					this.notificationsService.error("Error!","Internal Server Error");
				});
			}
		}else this.notificationsService.error('Error!',"Please Fill all the required fields (*).");
	}
}
