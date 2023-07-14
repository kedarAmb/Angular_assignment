import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent {

  loginButton(){
     alert("You click the login button")
    }
  
}
