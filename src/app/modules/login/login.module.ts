import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginInputComponent } from './login-input/login-input.component';
import { LoginCardComponent } from './login-card/login-card.component';



@NgModule({
  declarations: [
    LoginComponent,
    LoginInputComponent,
    LoginCardComponent
  ],
  exports: [
    LoginComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LoginModule { }
