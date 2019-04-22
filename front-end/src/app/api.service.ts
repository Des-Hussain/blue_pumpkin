import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import {Md5} from 'ts-md5/dist/md5'

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { HttpService } from './app.service';

@Injectable({
	providedIn: 'root'
	})
export class ApiService {

	constructor(private httpService: HttpService, private http: Http) {}

	loginUser(loginData){
		var md5 = new Md5();
		var obj:any = {
			email:loginData.email,
			password:md5.appendStr(loginData.Password).end()
		};
		return this.httpService.post('login',obj);
	}
	logoutUser(){
		return this.httpService.post('logout',{});
	}
	adminCreateUser(data){
		var md5 = new Md5();
		var obj:any = data;
		var ecryptedPwd = md5.appendStr(data.Password).end();
		delete obj.Password;
		obj.password = ecryptedPwd;
		return this.httpService.post('createAdminUser',obj);
	}
	adminGetAllUser(){
		return this.httpService.get('viewAllAdminuser');
	}
	deleteUser(mail){
		var obj = {email:mail };
		return this.httpService.post('deleteAdminUser',obj);
	}

	sendEmailApi(data){
		// return this.httpService.postEmail(obj);
	}
	createEvent(data){
		return this.httpService.post('addEvent',data);
	}
}
