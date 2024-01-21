import { Component, NgModule, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressComponent } from "./address/address.component";
import { UserComponent } from "./user/user.component";
import { Router } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ModalModule, ModalService } from '@developer-partners/ngx-modal-dialog';

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    imports: [CommonModule ,AddressComponent, UserComponent, UserDetailsComponent, ModalModule]
})
export class HeaderComponent {

    constructor(private router: Router, private readonly _modalService: ModalService) { }

    public showModal(): void {
        this._modalService.show(UserDetailsComponent, {
          title: 'Ο λογαριασμός μου'
        });
      }

    isLoginOrSignUpPage(): boolean {
        const path = this.router.url;
        return path.includes("login") || path.includes("register");
    }

    searchFor(searchValue: string): void {
    }

}
