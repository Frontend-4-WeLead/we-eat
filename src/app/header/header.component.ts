import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressComponent } from "./address/address.component";
import { UserComponent } from "./user/user.component";
import { Router } from '@angular/router';


@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    imports: [CommonModule, AddressComponent, UserComponent]
})
export class HeaderComponent {

    constructor(private router: Router) {}

    isLoginOrSignUpPage(): boolean {
        const path = this.router.url;
        return path.includes("login") || path.includes("register");
    }

}
