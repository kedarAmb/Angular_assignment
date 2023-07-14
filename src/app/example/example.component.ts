import { Conditional } from '@angular/compiler';
import { Component } from '@angular/core';

  @Component({
    selector: 'app-example',
    templateUrl: './example.component.html',
    styleUrls: ['./example.component.css']
  })
  export class ExampleComponent {
    display = true;
  
    hide(){
      this.display = !this.display;
    }

    
}
