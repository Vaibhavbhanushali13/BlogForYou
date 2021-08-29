import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import { ApiService } from './../helpers/api.service';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {
  title = 'Blogs';
  otherError : boolean;
  errorMessage : string;
  blogs :any;
  constructor(private fb: FormBuilder,public router:Router,public apiService:ApiService) { }

  ngOnInit(): void {
    this.viewPost();
  }

  viewPost() {
     let obj = {};
     obj['post_id'] = localStorage.getItem('post_id');
     console.log(obj);
     let response = this.apiService.viewPost(obj).subscribe(
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

}
