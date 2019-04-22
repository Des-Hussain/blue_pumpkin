import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ApiService } from './../api.service';
import { CommonService } from './../common.service';
import { NotificationsService } from 'angular2-notifications';
import { Router } from '@angular/router'
import * as $ from 'jquery';
import Swiper from 'swiper';

@Component({
	selector: 'app-landing',
	templateUrl: './landing.component.html',
	styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

	constructor(public apiService:ApiService, public commonService:CommonService, private notificationsService:NotificationsService, public router:Router) { }

	mySwiper: any;
	public endDate = "July 22, 2019";

	ngOnInit() {
		// setInterval(this.countDownTimer(), 1000);
		var self = this;
		setInterval(function() { self.countDownTimer(); }, 1000);
	}

	ngAfterViewInit() {
		this.mySwiper = new Swiper('.swiper-container', {
			spaceBetween: 0,
			centeredSlides: true,
			effect: 'fade',
			loop: true,
			autoplay: {
				delay: 7500,
				disableOnInteraction: false,
			},
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
		});
	}
	countDownTimer(){
		//		var endTime = new Date("29 April 2018 9:56:00 GMT+01:00");	
		var endTime:any;
		endTime = "22 April 2019 15:00:00 GMT+05:00";
		endTime = (Date.parse(endTime) / 1000);
		var now:any;
		now = new Date();
		now = (Date.parse(now) / 1000);

		var timeLeft = endTime - now;

		var days:any;
		var hours:any;
		var minutes:any;
		var seconds:any;
		days = Math.floor(timeLeft / 86400); 
		hours = Math.floor((timeLeft - (days * 86400)) / 3600);
		minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
		seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

		if (hours < "10") { hours = "0" + hours; }
		if (minutes < "10") { minutes = "0" + minutes; }
		if (seconds < "10") { seconds = "0" + seconds; }

		$("#days").html(days);
		$("#hours").html(hours);
		$("#minutes").html(minutes);
		$("#seconds").html(seconds);
	}
}
