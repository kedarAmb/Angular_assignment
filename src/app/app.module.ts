import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExampleComponent } from './example/example.component';
import { RegisterComponent } from './register/register.component';
import { LoginpageComponent } from './loginpage/loginpage.component';


@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    RegisterComponent,
    LoginpageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
