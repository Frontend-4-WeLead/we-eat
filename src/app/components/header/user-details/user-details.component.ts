import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css',
})
export class UserDetailsComponent {
  
  service = inject(UserService);
  users: User[] = [];
 
  getUser(){
      this.service.getUser().subscribe({
          next: res => {this.users = res; console.log(this.users)}
      })
  }
  
  ngOnInit(){
       this.getUser();
  }
}
