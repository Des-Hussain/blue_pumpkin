import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Injectable, EventEmitter } from '@angular/core';

import { environment } from '../environments/environment';

@Injectable()
export class HttpService {

   urlBase = 'http://localhost/omp/api/';
   auth: string = '';

   constructor(private http: Http) {}

   setAuthToken() {
       this.auth = localStorage.getItem('token');
   }

   get(url) {
       this.setAuthToken();
       const headers = new Headers({ 'Content-Type': 'application/json','token': this.auth, 'Access-Control-Allow-Origin': '*' });
       const options = new RequestOptions({ headers: headers });

       return this.http.get(this.urlBase + url, options)
           .map((res: Response) => {
               var data =  res.json();
               return data;
           }).catch((error: any) => {
               console.log("error:", error);
               return Observable.throw(error.json())
           });
   }

   post(url, data) {

       this.setAuthToken();
       var headers = new Headers({ 'Content-Type': 'application/json','token': this.auth,'Access-Control-Allow-Origin': '*' });

       var options = new RequestOptions({ headers: headers });

       return this.http.post(this.urlBase + '' + url, data, options)
           .map((res: Response) => {
               var postRes = res.json();
               postRes.request = data;
               return postRes;
           })
           .catch((error: any) => {
               error = error.json();
               error.request = data;
               return Observable.throw(error);
           });
   }

   put(url, data) {
       const headers = new Headers({ 'Content-Type': 'application/json','Access-Control-Allow-Origin': '*' });
       const options = new RequestOptions({ headers: headers });

       return this.http.put(this.urlBase + '' + url, data)
           .map((res: Response) => res.json())
           .catch((error: any) => Observable.throw(error.json()));
   }

   delete(url) {
       const headers = new Headers({ 'Content-Type': 'application/json','Access-Control-Allow-Origin': '*' });
       const options = new RequestOptions({ headers: headers });

       return this.http.delete(this.urlBase + '' + url)
           .map((res: Response) => res.json())
           .catch((error: any) => Observable.throw(error.json()));
   }
}