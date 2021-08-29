import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import { ApiService } from './../helpers/api.service';

@Component({
  selector: 'app-update-delete-post',
  templateUrl: './update-delete-post.component.html',
  styleUrls: ['./update-delete-post.component.css']
})
export class UpdateDeletePostComponent implements OnInit {
  title = 'Blogs';
  otherError : boolean;
  errorMessage : string;
  blogs :any;
  successFlag : boolean;
  successMessage : string;
  constructor(private fb: FormBuilder,public router:Router,public apiService:ApiService) { }

  ngOnInit(): void {
    this.getPost();
  }

  getPost() {
     let obj = {};
     obj['email'] = localStorage.getItem('email');
     console.log(obj);
     let response = this.apiService.getMyBlog(obj).subscribe(
        response  => {
          if(response.status == 1){
            console.log(response.data);
             this.otherError =false;
            this.blogs = response.data;
          }else{
            this.otherError =true;
            this.errorMessage = response.msg;
            setTimeout(function() {
               this.otherError = false;
             }.bind(this), 5000);
          }
        });
   }

   deleteBlog(postid){
     let obj = {};
     obj['id'] = postid;
     obj['email'] = localStorage.getItem('email');
     console.log(obj);
     let response = this.apiService.deleteBlog(obj).subscribe(
        response  => {
          if(response.status == 1){
            this.successFlag =true;
            this.successMessage = response.msg;
            setTimeout(function() {
               this.successFlag = false;
               this.router.navigate(['/home']);
             }.bind(this), 5000);
          }else{
            this.otherError =true;
            this.errorMessage = response.msg;
            setTimeout(function() {
               this.otherError = false;
             }.bind(this), 5000);
          }
        });
   }
   updateBlog(postid){
     var title = (<HTMLInputElement>document.getElementById('title'+postid)).value;
     var subtitle = (<HTMLInputElement>document.getElementById('subtitle'+postid)).value;
     var content = (<HTMLInputElement>document.getElementById('content'+postid)).value;
     let obj = {};
     obj['id'] = postid;
     obj['email'] = localStorage.getItem('email');
     obj['title'] = title;
     obj['subtitle'] = subtitle;
     obj['content'] = content;

     console.log(obj);
     let response = this.apiService.updateBlog(obj).subscribe(
        response  => {
          if(response.status == 1){
            this.successFlag =true;
            this.successMessage = response.msg;
            setTimeout(function() {
               this.successFlag = false;
               this.router.navigate(['/home']);
             }.bind(this), 5000);
          }else{
            this.otherError =true;
            this.errorMessage = response.msg;
            setTimeout(function() {
               this.otherError = false;
             }.bind(this), 5000);
          }
        });

   }
}
