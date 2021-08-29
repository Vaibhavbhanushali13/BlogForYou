import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient, HttpParams, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})



export class ApiService {
    auth: any = '';
    headers: any ;
    output: any ;
    constructor(private http: HttpClient, private router: Router) {
    }

    baseURL: string = environment.apiUrl;

    /* Products */

    // //loginUser
    loginUser(object): Observable<any> {
      console.log(object);
      return this.http.post(this.baseURL + "login", object).pipe(map((res: any) => res));
    }

    //SignUpUser
    SignUpUser(object): Observable<any> {
      console.log(object);
      return this.http.post(this.baseURL + "signup-user", object).pipe(map((res: any) => res));
    }

    //createBlogForm
    createBlog(object): Observable<any> {
      console.log(object);
      return this.http.post(this.baseURL + "create-post", object).pipe(map((res: any) => res));
    }

    //getBlog
    getBlog(object): Observable<any> {
      console.log(object);
      return this.http.post(this.baseURL + "get-post", object).pipe(map((res: any) => res));
    }

    //viewPost
    viewPost(object): Observable<any> {
      console.log(object);
      return this.http.post(this.baseURL + "view-post", object).pipe(map((res: any) => res));
    }

    //getMyBlog
    getMyBlog(object): Observable<any> {
      console.log(object);
      return this.http.post(this.baseURL + "get-my-post", object).pipe(map((res: any) => res));
    }

    //deleteBlog
    deleteBlog(object): Observable<any> {
      console.log(object);
      return this.http.post(this.baseURL + "delete-post", object).pipe(map((res: any) => res));
    }

    //updateBlog
    updateBlog(object): Observable<any> {
      console.log(object);
      return this.http.post(this.baseURL + "update-post", object).pipe(map((res: any) => res));
    }
  }
