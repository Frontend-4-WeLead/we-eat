import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
loginForm!: FormGroup

ngOnInit(): void {
  this.setFormValues();
 }

  setFormValues(){
    this.loginForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
  }
}
