import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  display = false;
  
  hide(){
    this.display = !this.display;
  }
  registerButton(){
    alert("you click the register button");
  }
  
}
