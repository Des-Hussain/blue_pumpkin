import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
	})
export class HeaderComponent implements OnInit {

	constructor() { }

	public position:String = 'right';
	toggleSideBar:Boolean = false;

	ngOnInit() {
	}
	toggleMiniSideBar(){
		this.toggleSideBar = !this.toggleSideBar;
	}
}
