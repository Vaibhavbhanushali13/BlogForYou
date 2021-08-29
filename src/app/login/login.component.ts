import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import { ApiService } from './../helpers/api.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup;
  title = 'Login';
  otherError : boolean;
  errorMessage : string;
  successFlag : boolean;
  successMessage : string;
  constructor(private fb: FormBuilder,public router:Router,public apiService:ApiService) {
    this.validateLoginForm();
  }

  ngOnInit(): void {
  }

  validateLoginForm() {
       this.loginForm = this.fb.group({
          email: ['', Validators.required ],
          pass: ['', Validators.required ]
       });
     }
  get f() { return this.loginForm.controls; }

 onSubmit() {
       // stop here if form is invalid
       if (this.loginForm.invalid) {
           return;
       }

       let obj = {};
       obj['email'] = this.f.email.value;
       obj['password'] = this.f.pass.value;
       console.log(obj);
       let response = this.apiService.loginUser(obj).subscribe(
          response  => {
            if(response.status == 1){
              localStorage.setItem('login_status','success');
              localStorage.setItem('user_id',response.data.id);
              localStorage.setItem('email',response.data.email);
              this.successFlag =true;
              this.successMessage = response.msg;
              setTimeout(function() {
                 this.successFlag = false;
                 this.router.navigate(['/']).then(() => {
                      window.location.href = 'index.html';
                    });
                 // this.router.navigate(['/home']);
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
