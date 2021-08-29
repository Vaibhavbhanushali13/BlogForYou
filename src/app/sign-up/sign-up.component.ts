import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import { ApiService } from './../helpers/api.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signupForm : FormGroup;
  title = 'Login';
  otherError : boolean;
  errorMessage : string;
  successFlag : boolean;
  successMessage : string;

  constructor(private fb: FormBuilder,public router:Router,public apiService:ApiService) {
    this.validateSignupForm();
   }

  ngOnInit(): void {
  }
  validateSignupForm() {
       this.signupForm = this.fb.group({
          email: ['', Validators.required ],
          pass: ['', Validators.required ],
          confirm_pass: ['', Validators.required ]

       });
     }
  get f() { return this.signupForm.controls; }

 onSubmit() {
       // stop here if form is invalid
       if (this.signupForm.invalid || this.f.pass.value != this.f.confirm_pass.value) {
           return;
       }

       let obj = {};
       obj['email'] = this.f.email.value;
       obj['password'] = this.f.pass.value;
       // obj['password'] = this.f.confirm_pass.value;
       console.log(obj);
       let response = this.apiService.SignUpUser(obj).subscribe(
            response  => {
              console.log(response.status);
              if(response.status === 1){
                localStorage.setItem('login_status','success');
                // localStorage.setItem('user_id',response.data.id);
                localStorage.setItem('email',this.f.email.value);
                this.successFlag =true;
                this.successMessage = response.msg;
                setTimeout(function() {
                   this.successFlag = false;
                   this.router.navigate(['/home']);
                 }.bind(this), 5000);
                // setTimeout(function() {
                //    this.successFlag = false;
                //    this.router.navigate(['/account-info']).then(() => {
                //       window.location.reload();
                //     });
                //  }.bind(this), 5000);
              }else{
                this.otherError =true;
                this.errorMessage = response.msg;
                setTimeout(function() {
                   this.otherError = false;
                 }.bind(this), 5000);
              }
            }
        )
     }

}
