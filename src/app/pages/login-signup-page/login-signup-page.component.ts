import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { SingUpPageComponent } from './sign-up-page/sing-up-page.component';

@Component({
  selector: 'app-login-signup-page',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, LoginPageComponent, SingUpPageComponent],
  templateUrl: './login-signup-page.component.html',
  styleUrl: './login-signup-page.component.css'
})
export class LoginSignupPageComponent implements OnInit {

  router: any;
  showLogin = true;

  public onButton1(){
    this.showLogin = true
  }

  public onButton2(){
    this.showLogin = false

  }

  ngOnInit() {
  }
  
}
