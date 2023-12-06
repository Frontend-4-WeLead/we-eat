import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login-signup-page',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './login-signup-page.component.html',
  styleUrl: './login-signup-page.component.css'
})
export class LoginSignupPageComponent {

}
