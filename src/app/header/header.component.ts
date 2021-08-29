import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loginStatus : boolean;
  login_status : any;
  constructor(public router:Router) { }

  ngOnInit(): void {
    // if(localStorage.hasOwnProperty('login_status')){
    //   this.loginStatus = true;
    // }else{
    //   this.loginStatus = false;
    // }
    this.login_status = localStorage.getItem('login_status');
        if(this.login_status=="success"){
          this.loginStatus = true;
        }else{
          this.loginStatus = false;
        }
        console.log(this.loginStatus);

    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
  }

  Logout(){
    localStorage.clear();
    this.router.navigate(['/']).then(() => {
                      window.location.href = 'index.html';
                    });
  }
}
