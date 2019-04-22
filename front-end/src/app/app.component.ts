import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { CommonService } from './common.service';
import {NotificationsService, SimpleNotificationsComponent} from 'angular2-notifications';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
	})
export class AppComponent {
	title = 'Blue Pumpkin';
	public options = {
		position: ["bottom", "left"],
		showProgressBar: true,
		pauseOnHover: true,
		clickToClose: true,
		clickIconToClose: true,
		lastOnBottom: true,
		timeOut: 3000,
	}
}
