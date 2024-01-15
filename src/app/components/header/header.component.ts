import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressComponent } from "./address/address.component";
import { UserComponent } from "./user/user.component";
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';


@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    imports: [CommonModule, AddressComponent, UserComponent]
})
export class HeaderComponent {
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

    constructor(private router: Router) { }

    isLoginOrSignUpPage(): boolean {
        const path = this.router.url;
        return path.includes("login") || path.includes("register");
    }

    searchFor(searchValue: string): void {
     
        
    }

}
