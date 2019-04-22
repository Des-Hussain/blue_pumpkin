import { Injectable } from '@angular/core';
import { HttpService } from './app.service';
import { ApiService } from './api.service';
import { ActivatedRoute, Routes, Router } from '@angular/router';

@Injectable()
export class CommonService {

    constructor(private httpService: HttpService, private apiService: ApiService, public router: Router) { }
   
    required(value) {
		if(value != null && value != undefined && value != '') return true;
		else return false;
    }

    requiredArray(value) {
        if(value.length > 0) return true;
        else return false;
    }

    requiredObject(obj) {
        var isTrue = true;
        Object.keys(obj).forEach(function (key) {
            if (obj[key] == null || obj[key] == "" || obj[key] == undefined) {
                isTrue = false;
            }
        });
        return isTrue;
    }

    formateDate(date){            
        var day = date.getDate();
        var month = date.getMonth()+1;
        var year = date.getFullYear();
        var hours = date.getHours();
        var minuts = date.getMinutes();
        var second = date.getSeconds();

        return year + '-' + month + '-' +day+' '+hours+':'+minuts+':'+second;
    }
    formatDate(date){            
        var myDate = new Date(date);
        var day = myDate.getDate();
        var month = myDate.getMonth()+1;
        var year = myDate.getFullYear();
        var months = ['','January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        return months[month] + '-' + day + '-' + year;
    }
    formatToday(date){
      var day = date.getDate();
      var month = date.getMonth()+1;
      var year = date.getFullYear();

      return month+'-'+day+'-'+year;
    }
    formatDateOnly(date){            
        date = new Date(date);
        var day = date.getDate();
        var month = date.getMonth()+1;
        var year = date.getFullYear();
        
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var months = ['','January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        return days[date.getDay()]+', '+months[month] + ' ' + day + ', ' +year;
    }

    formatDateForDateAndDay(date){
        date = new Date(date);
        var day = date.getDate();
        var month = date.getMonth()+1;
        
        var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        var months = ['','January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        return days[date.getDay()]+' '+ day +' '+months[month] ;
    }

    formatDateAndTime(date){            
        date = new Date(date);
        var day = date.getDate();
        var month = date.getMonth()+1;
        var year = date.getFullYear();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        return day+' '+months[month]+' '+year+' '+hours+' : '+minutes;
    }

    formatTimestampToDate(timstamp){
        var date = new Date(timstamp*1000);
        var day = date.getDate();
        var month = date.getMonth()+1;
        var year = date.getFullYear();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        return day+' '+months[month]+' '+year+' '+hours+' '+minutes;
    }

    checkValidEmail(email) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            return true;
        } else {
          return false;
        }
    }
    checkValidMobileNumber(mobileNumber) {
        if(mobileNumber.length == 10) return true;
        else return false;
    }

    logout() {
        var user = JSON.parse(localStorage.getItem("user"));
        if(user) {
            /*this.apiService.logout(user.email).subscribe(res => {
                this.logoutUser();
            }, (error) => {
                this.logoutUser();
            });*/            
        } else this.logoutUser();
    }

    logoutUser() {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        this.router.navigateByUrl('/home');
    }

    removeMultipleRecords(arr, index) {
        
        index.sort(function(a, b){ return b - a; });
        for(var i = 0; i < index.length; i++){
            arr.splice(index[i], 1);
        }
        return arr;
    }

    calculatePercent(total, actual) {
      var value = ((actual/total) * 100).toFixed(0);
      return parseInt(value);
    }
    checkValidOrganization(org){
        var res = org.split("-");
        if (res.length === 2) {
            return true;
        }else return false;
    }
    splitOrganization(org){
        var arr = org.split("-");
        var res = arr[0]+arr[1];
        return res;
    }
}
