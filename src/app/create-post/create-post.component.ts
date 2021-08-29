import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import { ApiService } from './../helpers/api.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  createBlogForm : FormGroup;
  title = 'Login';
  otherError : boolean;
  errorMessage : string;
  successFlag : boolean;
  successMessage : string;
  constructor(private fb: FormBuilder,public router:Router,public apiService:ApiService) { }

  ngOnInit(): void {
    this.validateCreateBlogForm();
  }

  validateCreateBlogForm() {
       this.createBlogForm = this.fb.group({
          title: ['', Validators.required ],
          subtitle: ['', Validators.required ],
          description: ['', Validators.required ],
          tag: ['', Validators.required ]
       });
     }
  get f() { return this.createBlogForm.controls; }

  onSubmit() {
       // stop here if form is invalid
       if (this.createBlogForm.invalid) {
           return;
       }

       let obj = {};
       obj['title'] = this.f.title.value;
       obj['subtitle'] = this.f.subtitle.value;
       obj['description'] = this.f.description.value;
       obj['tag'] = this.f.tag.value;
       obj['email'] = localStorage.getItem('email');
       console.log(obj);
       let response = this.apiService.createBlog(obj).subscribe(
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
