import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import { ApiService } from './../helpers/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'Blogs';
  otherError : boolean;
  errorMessage : string;
  blogs :any;
  tags :any;
  filterBlog :any;
  all :any;


  constructor(private fb: FormBuilder,public router:Router,public apiService:ApiService) { }

  ngOnInit(): void {
    this.getPost();
  }


 getPost() {
    let obj = {};
    console.log(obj);
    let response = this.apiService.getBlog(obj).subscribe(
       response  => {
         if(response.status == 1){
           console.log(response.data);
            this.otherError =false;
           this.blogs = response.data;
           this.all = this.blogs;
           var vals=[];
            for(var item of this.blogs){
               vals.push(item.tag);
            }

            this.tags =vals;
            console.log(this.tags);
         }else{
           this.otherError =true;
           this.errorMessage = response.msg;
           setTimeout(function() {
              this.otherError = false;
            }.bind(this), 5000);
         }
       });
  }

  setPostId(postid){
    console.log(postid);
    localStorage.setItem('post_id',postid);
    this.router.navigate(['/view-posts']);
  }

  filter(filter){
    if(filter == "all"){
      this.blogs  = this.all;
    }else{
      // console.log(filter);
      this.blogs  = this.all.filter(function(o){return o.tag == filter;} );
    }

  }
}
