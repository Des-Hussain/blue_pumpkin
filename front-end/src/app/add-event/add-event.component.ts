import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-add-event',
	templateUrl: './add-event.component.html',
	styleUrls: ['./add-event.component.css']
	})
export class AddEventComponent implements OnInit {

	constructor() { }

	mainContentSize:Boolean = false;
	
	ngOnInit() {
	}

	updateHeaderToggle(){
		this.mainContentSize = !this.mainContentSize;
	}
}
