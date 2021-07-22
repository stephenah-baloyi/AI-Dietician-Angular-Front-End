import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new User();
  msg ='';
  constructor(private _service : RegistrationService, private _router : Router) { }

  ngOnInit(): void {
  }

  userLogin(){
    this._service.userLoginFromRemote(this.user).subscribe(
      data =>{
         console.log("Response received.");
         this._router.navigate(["/loginsuccess"])
        },
      error =>{
        console.log("Exception occured.");
        this.msg = "Bad credentials, please enter valid username and password.";
      }
    )
  }
}
