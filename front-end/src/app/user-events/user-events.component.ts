import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { ApiService } from './../api.service';
import { CommonService } from './../common.service';
import { NotificationsService } from 'angular2-notifications';
import { Router } from '@angular/router'

@Component({
	selector: 'app-user-events',
	templateUrl: './user-events.component.html',
	styleUrls: ['./user-events.component.css']
})
export class UserEventsComponent implements OnInit {
	displayedColumns: string[] = ['eventTitle', 'eventSubTitle', 'phoneNo', 'eventDesc', 'email', 'gender', 'edLevel','eventDate','action'];
	dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

	mainContentSize:Boolean = false;
	constructor( public apiService:ApiService, public commonService:CommonService, private notificationsService:NotificationsService, public router:Router) { }


	ngOnInit() {
	}
	
	updateHeaderToggle(){
		this.mainContentSize = !this.mainContentSize;
	}

}
	export interface PeriodicElement {
		id: number;
		eventTitle: string;
		eventSubTitle: string;
		eventDesc: string;
		eventDate: string;
	};

	const ELEMENT_DATA: PeriodicElement[] = [
	{id: 1, eventTitle: 'Test', eventSubTitle: 'Hydrogen', eventDesc: 'H',eventDate: '21/4/2019'},
	{id: 2, eventTitle: 'Test', eventSubTitle: 'Helium', eventDesc: 'He',eventDate: '21/4/2019'},
	{id: 3, eventTitle: 'Test', eventSubTitle: 'Lithium', eventDesc: 'Li',eventDate: '21/4/2019'},
	{id: 4, eventTitle: 'Test', eventSubTitle: 'Beryllium', eventDesc: 'Be', eventDate: '21/4/2019'},
	{id: 5, eventTitle: 'Test', eventSubTitle: 'Boron', eventDesc: 'B',eventDate: '21/4/2019'},
	{id: 6, eventTitle: 'Test', eventSubTitle: 'Carbon', eventDesc: 'C',eventDate: '21/4/2019'},
	{id: 7, eventTitle: 'Test', eventSubTitle: 'Nitrogen', eventDesc: 'N',eventDate: '21/4/2019'},
	{id: 8, eventTitle: 'Test', eventSubTitle: 'Oxygen', eventDesc: 'O', eventDate: '21/4/2019'},
	{id: 9, eventTitle: 'Test', eventSubTitle: 'Fluorine', eventDesc: 'F',eventDate: '21/4/2019'},
	{id: 10, eventTitle: 'Test', eventSubTitle: 'Neon', eventDesc: 'Ne',eventDate: '21/4/2019'},
	{id: 11, eventTitle: 'Test', eventSubTitle: 'Sodium', eventDesc: 'Na',eventDate: '21/4/2019'},
	{id: 12, eventTitle: 'Test', eventSubTitle: 'Magnesium', eventDesc: 'Mg',eventDate: '21/4/2019'},
	{id: 13, eventTitle: 'Test', eventSubTitle: 'Aluminum', eventDesc: 'Al',eventDate: '21/4/2019'},
	{id: 14, eventTitle: 'Test', eventSubTitle: 'Silicon', eventDesc: 'Si', eventDate: '21/4/2019'},
	{id: 15, eventTitle: 'Test', eventSubTitle: 'Phosphorus', eventDesc: 'P',eventDate: '21/4/2019'},
	{id: 16, eventTitle: 'Test', eventSubTitle: 'Sulfur', eventDesc: 'S',eventDate: '21/4/2019'},
	{id: 17, eventTitle: 'Test', eventSubTitle: 'Chlorine', eventDesc: 'Cl',eventDate: '21/4/2019'},
	{id: 18, eventTitle: 'Test', eventSubTitle: 'Argon', eventDesc: 'Ar',eventDate: '21/4/2019'},
	{id: 19, eventTitle: 'Test', eventSubTitle: 'Potassium', eventDesc: 'K',eventDate: '21/4/2019'},
	{id: 20, eventTitle: 'Test', eventSubTitle: 'Calcium', eventDesc: 'Ca',eventDate: '21/4/2019'},
	];