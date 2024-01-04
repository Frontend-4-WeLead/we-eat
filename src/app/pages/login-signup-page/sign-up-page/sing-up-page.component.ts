import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sing-up-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './sing-up-page.component.html',
  styleUrl: './sing-up-page.component.css'
})
export class SingUpPageComponent {
applyForm = new FormGroup({
  
})
}